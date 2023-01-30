const { validationResult } = require("express-validator");
import { response, request, NextFunction } from "express";

export function validate(validators: any[], allowExtraFields = false) {
  return async (
    req: typeof request,
    res: typeof response,
    next: NextFunction
  ) => {
    // Type validation
    await Promise.all(validators.map((validator) => validator.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ error: true, errors: errors.array() });
  };
}
