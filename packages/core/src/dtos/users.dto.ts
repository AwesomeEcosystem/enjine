import { IsEmail, IsString } from 'class-validator';

export default class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string
}
