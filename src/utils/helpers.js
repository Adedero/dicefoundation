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


const getIcon = (name) => {
  if (!name) return ''
  const lower = name.toLowerCase()

  switch (lower) {
    case 'facebook':
      return 'pi pi-facebook'
    case 'twitter':
      return 'pi pi-twitter'
    case 'x':
      return 'pi pi-twitter'
    case 'linkedin':
      return 'pi pi-linkedin'
    case 'instagram':
      return 'pi pi-instagram'
    case 'github':
      return 'pi pi-github'
    default:
      return ''
  }
}


function getCurrencySymbol(currency) {
  if (!currency) return ''
  const lower = currency.trim().toLowerCase()
  switch (lower) {
    case 'naira':
      return '₦'
    case 'dollar':
      return '$'
    case 'euro':
      return '€'
    case 'pound':
      return '£'
    case 'rupees':
      return '₹'
    case 'yen':
      return '¥'
    default:
      return '';
  }
}


function formatEventDates(event) {
  // Helper: Format a date (or date string) into an object with month, day, and year.
  function formatDate(dateInput) {
    var d = new Date(dateInput);
    return {
      month: d.toLocaleString('en-US', { month: 'short' }), // e.g., "Mar"
      day: String(d.getDate()).padStart(2, '0'),              // two digits, e.g., "05"
      year: d.getFullYear(),                                 // e.g., 2025
      fullDate: d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
  }



  // Helper: Format a Date object into an object with hour, minute, and am/pm.
  function formatTime(dateInput) {
    var d = new Date(dateInput);
    var hour = d.getHours();
    var minute = String(d.getMinutes()).padStart(2, '0');
    var amorpm = hour >= 12 ? 'p.m.' : 'a.m.';
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour = hour - 12;
    }
    return {
      fullTime: `${hour}:${minute} ${amorpm}`,  
      hour: String(hour).padStart(2, '0'),
      minute: minute,
      amorpm: amorpm
    };
  }

  return {
    startDate: event.startDate ? formatDate(event.startDate) : null,
    endDate: event.endDate ? formatDate(event.endDate) : null,
    startTime: event.startTime ? formatTime(event.startTime) : null,
    endTime: event.endTime ? formatTime(event.endTime) : null
  };
}

module.exports = {
  formatEventDates,
  HTTPException,
  responder,
  isPlainObject,
  objectFromFields,
  getIcon,
  getCurrencySymbol
}