import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { ForumDTO } from 'src/models/forum.model';
import { ForumService } from './forum.service';

@Controller('forums')
export class ForumController {
  constructor(private forumService: ForumService) {}

  @Get()
  getAllForums() {
    return this.forumService.getAllForums();
  }

  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  addForum(
    @Body(ValidationPipe) forum: ForumDTO,
    @User() { isAdmin }: UserEntity,
  ) {
    this.forumService.addForum(forum, isAdmin);
    return { message: 'Forum successfully added' };
  }
}
