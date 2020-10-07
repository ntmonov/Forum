import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForumEntity } from 'src/entities/forum.entity';
import { ForumDTO } from 'src/models/forum.model';
import { Repository } from 'typeorm';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(ForumEntity) private forumRepo: Repository<ForumEntity>,
  ) {}

  async getAllForums() {
    const forums = await this.forumRepo.find();
    return forums;
  }

  async addForum(forum: ForumDTO, isAdmin: boolean) {
    if (!isAdmin) throw new UnauthorizedException('Admin only');
    const f = await this.forumRepo.insert(forum);
    return f;
  }
}
