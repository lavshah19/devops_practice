class CustomError extends Error {
  constructor(message, statusCode) {
    super(message); // call the parent constructor (Error)
    this.statusCode = statusCode || 500; // default to 500 if not provided
    this.name = this.constructor.name; // sets the error name
    Error.captureStackTrace(this, this.constructor); // optional, for cleaner stack
  }
}

module.exports = CustomError;
