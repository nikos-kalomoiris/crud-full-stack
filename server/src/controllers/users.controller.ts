import { NextFunction, Request, Response } from 'express';
import { UserDto } from '../dtos/users.dto';
import { isString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { HttpException } from '../exceptions/HttpException';
import userModel from '../models/users.model';

class UsersController {
  public users = userModel;

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await this.users.find();
      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const newUser: UserDto = req.body;

      const userExists = await this.users.findOne({
        email: newUser.email,
      });

      if (userExists) {
        throw new HttpException(409, 'User already exists');
      }

      const createUser = await this.users.create({
        ...newUser,
      });

      return res.status(201).send({ data: createUser, message: 'User created successfully' });
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

      const userExists = await this.users.findOne({
        email: userData.email,
      });

      if (userExists && userExists._id.toString() !== userId) {
        throw new HttpException(409, 'User does not exist');
      }

      await this.users.findByIdAndUpdate(userId, { ...userData });

      res.status(200).json({ data: { _id: userId, ...userData }, message: 'User updated successfully' });
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

      const deleteUser = await this.users.findByIdAndDelete(userId);
      if (!deleteUser) {
        throw new HttpException(409, 'User does not exist');
      }

      return res.status(200).json({ id: userId, message: 'User deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
