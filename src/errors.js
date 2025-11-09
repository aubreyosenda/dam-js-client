export class DAMError extends Error {
  constructor(message, code, details = null) {
    super(message);
    this.name = 'DAMError';
    this.code = code;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }

  toString() {
    return `[DAMError: ${this.code}] ${this.message}`;
  }

  toJSON() {
    return {
      error: this.name,
      message: this.message,
      code: this.code,
      details: this.details,
      timestamp: this.timestamp
    };
  }
}

export class AuthenticationError extends DAMError {
  constructor(message = 'Authentication failed') {
    super(message, 'AUTH_ERROR');
  }
}

export class ValidationError extends DAMError {
  constructor(message = 'Validation failed', details = null) {
    super(message, 'VALIDATION_ERROR', details);
  }
}

export class NotFoundError extends DAMError {
  constructor(resource = 'Resource') {
    super(`${resource} not found`, 'NOT_FOUND');
  }
}

export class RateLimitError extends DAMError {
  constructor(message = 'Rate limit exceeded') {
    super(message, 'RATE_LIMIT');
  }
}

export class NetworkError extends DAMError {
  constructor(message = 'Network error occurred') {
    super(message, 'NETWORK_ERROR');
  }
}

export default {
  DAMError,
  AuthenticationError,
  ValidationError,
  NotFoundError,
  RateLimitError,
  NetworkError
};