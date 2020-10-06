import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationDTO, LoginDTO } from 'src/models/user.model';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  register(@Body(ValidationPipe) credentials: RegistrationDTO) {
    return this.authService.register(credentials);
  }

  @Post('/login')
  login(@Body(ValidationPipe) credentials: LoginDTO) {
    return this.authService.login(credentials);
  }
}
