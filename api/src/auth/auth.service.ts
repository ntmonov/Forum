import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { LoginDTO, RegistrationDTO } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async register(credentials: RegistrationDTO) {
    try {
      const user = this.userRepo.create(credentials);
      await user.save();
      return { message: 'User created.' };
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username allready taken');
      }
      throw new InternalServerErrorException('Server error');
    }
  }

  async login({ username, password }: LoginDTO) {
    try {
      const user = await this.userRepo.findOne({ where: { username } });
      const isValid = await user.comparePassword(password);
      if (!isValid) {
        throw new Error();
      }
      const payload = { username: user.username, isAdmin: user.isAdmin };
      const token = this.jwtService.sign(payload);

      return { user: { ...user.toJSON(), token } };
    } catch (err) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
