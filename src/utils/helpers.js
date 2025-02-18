const logger = require("./logger")

class HTTPException extends Error {
  constructor(status, message) {
    this.status = status
    this.message = message
  }
}

const response = (res, status, data) => {
  let payload = {}
  if (typeof data === 'string') {
    payload.message = data
  } else {
    payload = { ...data }
  }
  return res.status(status).json(payload)
}

const handleError = (message, err) => {
  logger.error(message, err)
}

module.exports = {
  HTTPException,
  response,
  handleError
}