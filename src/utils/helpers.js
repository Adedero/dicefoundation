const logger = require("./logger")

class HTTPException extends Error {
  constructor(status, message) {
    super()
    this.status = status
    this.message = message
  }
}

const responder = (res, status, data) => {
  let payload = {}
  if (typeof data === 'string') {
    payload.message = data
  } else {
    payload = { ...data }
  }
  return res.status(status).json(payload)
}


function isPlainObject(value) {
  return (
    typeof value === 'object' && value !== null && !Array.isArray(value) //Object.getPrototypeOf(value) === Object.prototype
  )
}


const objectFromFields = (object, fields) => {
  if (!isPlainObject(object)) {
    throw new Error('object must be a plain object')
  }
  let parsedFields = [];
  if (typeof fields === 'string') {
    parsedFields = fields.split(',').map((field) => field.trim());
  } else if (Array.isArray(fields)) {
    parsedFields = fields.map((field) => field.trim());
  }

  const payload = {};

  // Helper: get a nested value from an object using dot notation
  const getNestedValue = (obj, path) =>
    path.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);

  // For each field, set the value in the payload using nested structure
  for (const field of parsedFields) {
    const value = getNestedValue(object, field);
    const parts = field.split('.');
    let current = payload;
    // Loop over all parts except the last to create nested objects
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!(part in current)) {
        current[part] = {};
      }
      current = current[part];
    }
    // Set the final key's value
    current[parts[parts.length - 1]] = value;
  }
  return payload;
}

module.exports = {
  HTTPException,
  responder,
  isPlainObject,
  objectFromFields
}