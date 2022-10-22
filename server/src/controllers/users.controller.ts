import { NextFunction, Request, Response } from 'express';
import { Prisma } from '../db';
import { UserDto } from '../dtos/users.dto';
import { isString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { HttpException } from '../exceptions/HttpException';

class UsersController {
  private prisma = Prisma.getInstance();

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await this.prisma.users.findMany();
      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const newUser: UserDto = req.body;

      const userExists = await this.prisma.users.findUnique({
        where: {
          email: newUser.email,
        },
      });

      if (userExists) {
        throw new HttpException(409, 'User already exists');
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

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.params.id;
      const userData: UserDto = req.body;

      if (!isString(userId) || !ObjectId.isValid(userId)) {
        throw new HttpException(400, 'Invalid user id');
      }

      const userExists = await this.prisma.users.findUnique({
        where: {
          id: userId,
        },
      });

      if (!userExists) {
        throw new HttpException(409, 'User does not exist');
      }

      const updateUser = await this.prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          ...userData,
        },
      });

      res.status(200).json({ data: updateUser, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const userId = req.params.id;

      if (!isString(userId) || !ObjectId.isValid(userId)) {
        throw new HttpException(400, 'Invalid id');
      }

      const userExists = await this.prisma.users.findUnique({
        where: {
          id: userId,
        },
      });

      if (!userExists) {
        throw new HttpException(409, 'User does not exist');
      }

      const deleteUser = await this.prisma.users.delete({
        where: {
          id: userId,
        },
      });

      return res.status(200).json({ message: 'User with id:' + deleteUser.id + ' deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
