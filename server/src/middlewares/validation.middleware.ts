import { NextFunction, Request, Response } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { HttpException } from '../exceptions/HttpException';

const validationMiddleware = (type: any, skipMissingProperties = false) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToInstance(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const dtoErrors = errors
            .map((error: ValidationError) =>
              (Object as any).values(error.constraints),
            )
            .join(', ');
          next(new HttpException(400, dtoErrors));
        } else {
          req.body = dtoObj;
          next();
        }
      },
    );
  };
};

export default validationMiddleware;
