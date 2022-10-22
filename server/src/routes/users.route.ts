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
    // Get Users Route
    this.router.get(`${this.path}`, this.usersController.getUsers);
    // Create User Route
    this.router.post(`${this.path}`, validationMiddleware(UserDto), this.usersController.createUser);
    // Update User Route
    this.router.put(`${this.path}/:id`, validationMiddleware(UserDto), this.usersController.updateUser);
    // Delete User Route
    this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
