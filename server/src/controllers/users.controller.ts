import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { Prisma } from '../db';
import { UserDto } from '../dtos/users.dto';

class UsersController {
  private prisma = new PrismaClient();
}

export default UsersController;
