const { HTTPException } = require("./helpers")
const { db, sequelize } = require('../config/db.config');
const User = require("../models/user.model");

module.exports = {
  getHandler: (model) => {
    return async (req, res, next) => {
      const Model = db[model];
      if (!Model) {
        throw new HTTPException(400, `Table ${model} does not exist in the database`);
      }

      const { key, limit, skip, relation, field, sort, where } = req.query;

      // Determine the correct ID field.
      const idField = key ? key.toString() : 'id';
      const id = req.params[idField] || req.params.id;

      // Initialize the query 'where' object.
      let query = {};
      if (id) {
        query[idField] = id;
      }

      // Process the `where` parameter (supports comma-separated conditions)
      if (where) {
        const whereParams = Array.isArray(where) ? where : [where];
        whereParams.forEach((w) => {
          const [fieldKey, rawValue] = w.toString().split(',');
          if (fieldKey && rawValue) {
            let value = rawValue.trim();
            // Convert boolean strings
            if (value === 'true' || value === 'false') {
              value = value === 'true';
            } else if (!isNaN(Number(value))) {
              value = Number(value);
            }
            query[fieldKey.trim()] = value;
          }
        });
      }
      // Parse relations (assumed to be associations defined in your Sequelize models)
      const include = relation
        ? relation.toString().split(',').map((rel) => ({ association: rel.trim() }))
        : undefined;

      // Parse selected fields (attributes)
      const attributes = field ? field.toString().split(',').map((f) => f.trim()) : undefined;

      // Handle sorting: Sequelize expects order as an array of arrays: [ [field, direction], ... ]
      let order = undefined;
      if (sort) {
        const sortParams = Array.isArray(sort) ? sort : [sort];
        order = sortParams
          .map((s) => {
            const [sortField, orderDir] = s.toString().split(',');
            if (
              sortField &&
              orderDir &&
              (orderDir.toUpperCase() === 'ASC' || orderDir.toUpperCase() === 'DESC')
            ) {
              return [sortField.trim(), orderDir.toUpperCase()];
            }
            return null;
          })
          .filter((o) => o !== null);
        if (order.length === 0) order = undefined;
      }

      // Pagination: Sequelize uses limit and offset
      const limitValue = limit ? parseInt(limit.toString(), 10) : undefined;
      const offsetValue = skip ? parseInt(skip.toString(), 10) : undefined;

      try {
        let result;
        if (id) {
          result = await Model.findOne({
            where: query,
            include,
            attributes,
          });
        } else {
          result = await Model.findAll({
            where: query,
            limit: limitValue,
            offset: offsetValue,
            include,
            attributes,
            order,
          });
        }

        // Set caching headers (note: max-age is in seconds; here it is set to 10 seconds)
        res.setHeader('Cache-Control', 'public, max-age=10');

        return res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    };
  },

  postHandler: (model, hooks) => {
    return async (req, res, next) => {
      const { data } = req.body
  
      try {
        const Model = db[model]
        if (!Model) {
          throw new HTTPException(400, `Table ${model} does not exist in the database`)
        }

        if (!data || Object.keys(data).length === 0) {
          throw new HTTPException(400, 'No data provided')
        }

        await sequelize.transaction(async(transaction) => {
          let updatedData = data

          const beforeCreateContext = { req, res, data, transaction }

          if (hooks?.onBeforeCreate) {
            const result = await hooks.onBeforeCreate(beforeCreateContext)
            if (result) {
              updatedData = result
            }
          }

          const created = Model.build(data)

          await created.save({ transaction })

          //const created = await Model.create(data, { transaction })

          updatedData = created

          const onBeforeEndContext = { req, res, data: updatedData, transaction }

          if (hooks?.onBeforeEnd) {
            const result = await hooks.onBeforeEnd(onBeforeEndContext)
            if (result) {
              updatedData = result
            }
          }

          await updatedData.save({ transaction })

          res.status(201).json(updatedData)
        })

      } catch (error) {
        next(error)
      }
    }
  },

  putHandler: (model, hooks) => {
    return async (req, res, next) => {
      const Model = db[model]
      const { data } = req.body
      const { id } = req.params
      const { where } = req.query

      try {
        if (!Model) {
          throw new HTTPException(400, `Table ${model} does not exist in the database`)
        }
        
        if (!data || Object.keys(data).length === 0) {
          throw new HTTPException(400, 'No data provided')
        }

        if (!id && !where) {
          throw new HTTPException(400, 'Invalid request query')
        }
    
        let query = id ? { id } : {}
    
        // Process the `where` parameter (supports comma-separated conditions and type conversion)
        if (where) {
          const whereParams = Array.isArray(where) ? where : [where]
          whereParams.forEach((w) => {
            const [fieldKey, rawValue] = w.toString().split(',')
            if (fieldKey && rawValue) {
              let value = rawValue.trim()
              if (value === 'true' || value === 'false') {
                value = value === 'true'
              } else if (!isNaN(Number(value))) {
                value = Number(value)
              }
              query[fieldKey.trim()] = value
            }
          })
        }

        await sequelize.transaction(async(transaction) => {
          let updatedData = data

          const beforeUpdateContext = { req, res, data, transaction }

          if (hooks?.onBeforeUpdate) {
            const result = await hooks.onBeforeUpdate(beforeUpdateContext)
            if (result) {
              updatedData = result
            }
          }

          const updated = await Model.update(updatedData, { where: query, transaction, returning: true  })

          updatedData = updated[1][0]

          const onBeforeEndContext = { req, res, data: updatedData, transaction }

          if (hooks?.onBeforeEnd) {
            const result = await hooks.onBeforeEnd(onBeforeEndContext)
            if (result) {
              updatedData = result
            }
          }

          await updatedData.save({ transaction })

          res.status(201).json(updatedData)
        })
    
      } catch (error) {
        next(error)
      }
    }
  },

  deleteHandler: (model) => {
    return async (req, res, next) => {
      const Model = db[model]
      const { id } = req.params
      const { where } = req.query

      try {
        if (!Model) {
          throw new HTTPException(400, `Table ${model} does not exist in the database`)
        }
        
        if (!id && !where) {
          throw new HTTPException(400, 'Invalid request query')
        }
  
        let query = id ? { id } : {}
  
        if (where) {
          const whereParams = Array.isArray(where) ? where : [where]
          whereParams.forEach((w) => {
            const [fieldKey, rawValue] = w.toString().split(',')
            if (fieldKey && rawValue) {
              let value = rawValue.trim()
              if (value === 'true' || value === 'false') {
                value = value === 'true'
              } else if (!isNaN(Number(value))) {
                value = Number(value)
              }
              query[fieldKey.trim()] = value
            }
          })
        }

        await Model.destroy({ where: query })
        
        res.status(200).json({ message: 'Delete successful' })
      } catch (error) {
        next(error)
      }
    }
  }
}


/* 



export const countHandler = (model: keyof Model) => {
  return async (req, res) => {
    const { where } = req.query

    // Initialize the query object
    let query: Record<string, unknown> = {}

    // Process the `where` parameter if it exists
    if (where) {
      const whereParams = Array.isArray(where) ? where : [where] // Ensure `where` is always an array
      whereParams.forEach((w) => {
        const [key, rawValue] = w.toString().split(',')
        if (key && rawValue) {
          let value: unknown = rawValue.trim()

          // Attempt to convert the value to the appropriate type
          if (value === 'true' || value === 'false') {
            value = value === 'true' // Convert to boolean
          } else if (!isNaN(Number(value))) {
            value = Number(value) // Convert to number if it's numeric
          }

          // Merge the parsed condition into the query object
          const condition = { [key.trim()]: value }
          query = query ? { ...query, ...condition } : condition
        }
      })
    }

    const repository = await getRepository(model)

    try {
      const result = await repository.model.count({
        where: query
      })
      sendResponse(res, 200, { count: result })
    } catch (error) {
      logger.error('Failed to count items', error)
      sendResponse(
        res,
        500,
        `Failed to count items: ${(error as Error).message}`
      )
    }
  }
} */