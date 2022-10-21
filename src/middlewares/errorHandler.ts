import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues });
  }

  const messageErrorType = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageErrorType];

  if (mappedError) {
    const { statusCode, error } = mappedError;

    return res.status(statusCode).json({ error });
  }

  return res.status(500).json({ message: err.message });
};

export default errorHandler;