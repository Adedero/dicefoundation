const { IS_PRODUCTION_ENV } = require("../utils/constants")
const { HTTPException } = require("../utils/helpers")
const logger = require("../utils/logger")

module.exports = (err, req, res, next) => {
  logger.error('API ERROR', err)

  res.format({  
    'text/html': function () {
      return res.render('error')
    },
  
    'application/json': function () {
      if (err instanceof HTTPException) {
        return res.status(err.status).json({
          success: false,
          message: err.message
        })
      }
      return res.status(500).json({
        success: false,
        message: IS_PRODUCTION_ENV ? 'Something went wrong. Please, try again later.' : err.message ?? 'Something went wrong. Please, try again later.'
      })
    },
  
    default: function () {
      res.status(406).send('Not Acceptable')
    }
  })
}