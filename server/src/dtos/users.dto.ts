import { IsEmail, IsString, IsInt, IsOptional } from 'class-validator';

// TODO: Create custom trim decorator
// TODO: Add UpdatedAt and CreatedAt
export class UserDto {
  @IsString()
  @IsEmail()
  public email: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  @IsOptional()
  public telephone?: string;
}
