export class PdfGenerationError extends Error {
  constructor(
    message: string,
    public originalError?: Error,
    public code: string = 'PDF_GENERATION_ERROR'
  ) {
    super(message);
    this.name = 'PdfGenerationError';

    // Capture stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PdfGenerationError);
    }

    // Preserve original error stack if available
    if (originalError?.stack) {
      this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
    }
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      originalError: this.originalError ? {
        message: this.originalError.message,
        name: this.originalError.name
      } : undefined
    };
  }
}