import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumEntity } from 'src/entities/forum.entity';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([ForumEntity]), PassportModule],
  providers: [ForumService],
  controllers: [ForumController],
})
export class ForumModule {}
