import { IsEmail, IsString, IsOptional, IsNumberString, IsAlpha, Length } from 'class-validator';

// TODO: Create custom trim decorator
// TODO: Add UpdatedAt and CreatedAt
export class UserDto {
  @IsString()
  @IsEmail()
  public email: string;

  @Length(2, 40)
  @IsAlpha()
  public firstName: string;

  @Length(2, 40)
  @IsAlpha()
  public lastName: string;

  @IsNumberString()
  @IsOptional()
  public telephone?: string;
}
