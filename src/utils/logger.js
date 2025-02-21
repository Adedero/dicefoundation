const winston = require('winston');
const path = require('path');
const DailyRotateFile = require('winston-daily-rotate-file');
const { IS_PRODUCTION_ENV } = require('./constants');
const { HTTPException } = require('./helpers');

const logDirectory = path.resolve('logs');

// Custom colors for log levels
const customColors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  debug: 'green',
};

winston.addColors(customColors);

// Create a logger instance
const logger = winston.createLogger({
  level: 'debug', // Set to debug to show all logs in development
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }), // Apply colors to all parts
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    // Add Console transport
    new winston.transports.Console()
  ]
});

// Add file logging with rotation in production mode
if (IS_PRODUCTION_ENV) {
  logger.add(
    new DailyRotateFile({
      filename: path.join(logDirectory, 'site-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
      )
    })
  );

  logger.add(
    new DailyRotateFile({
      filename: path.join(logDirectory, 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
      )
    })
  );
}

// Custom error handler
const originalError = logger.error;
logger.error = (msg, err) => {
  if (err && (err instanceof Error || err instanceof HTTPException)) {
    originalError.call(logger, `${msg || 'Error'}: ${err.message}\nStack: ${err.stack}`);
  } else {
    originalError.call(logger, `${msg || 'Error'} :${err}`);
  }
};

module.exports = logger;