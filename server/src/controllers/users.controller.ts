import { NextFunction, Request, Response } from 'express';
import { Prisma } from '../db';
import { UserDto } from '../dtos/users.dto';

class UsersController {
  private prisma = Prisma.getInstance();

  public getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    try {
      const newUser: UserDto = req.body;

      const userExists = await this.prisma.users.findUnique({
        where: {
          email: newUser.email,
        },
      });

      if (userExists) {
        return res.status(409).send({ message: 'User already exists' });
      }

      const createUser = await this.prisma.users.create({
        data: {
          ...newUser,
        },
      });

      return res.status(201).send({ data: createUser, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
