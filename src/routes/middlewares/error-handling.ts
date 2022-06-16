import { NextFunction, Request, Response } from "express";

import ErrorsApp from "../../utils/errors/ErrorApp";

export const errorMiddleware = (
  error: ErrorsApp,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  return res.status(status).json({
    message,
  });
};
