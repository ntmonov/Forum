import { IsString, MinLength, IsBoolean } from 'class-validator';

export class LoginDTO {
  @IsString()
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(4)
  password: string;
}

export class RegistrationDTO extends LoginDTO {
  @IsBoolean()
  isAdmin: boolean = false;
}

export interface AuthPayload {
  username: string;
  isAdmin: boolean;
}
