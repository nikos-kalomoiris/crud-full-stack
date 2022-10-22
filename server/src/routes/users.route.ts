import { UserDto } from '../dtos/users.dto';
import validationMiddleware from '../middlewares/validation.middleware';
import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { Routes } from '../interfaces/routes.interface';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      validationMiddleware(UserDto),
      this.usersController.createUser,
    );
  }
}

export default UsersRoute;
