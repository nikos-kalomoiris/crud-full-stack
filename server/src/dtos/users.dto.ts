import { IsEmail, IsString, IsInt, IsOptional } from 'class-validator';

// TODO: Create custom trim decorator
export class UserDto {
  @IsString()
  @IsEmail()
  public email: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsInt()
  @IsOptional()
  public telephone?: number;
}
