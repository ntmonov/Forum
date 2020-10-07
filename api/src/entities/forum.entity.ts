import { AbstractEntity } from './abstract-entity';
import { Entity, Column } from 'typeorm';
import { MinLength } from 'class-validator';

@Entity('forum')
export class ForumEntity extends AbstractEntity {
  @Column({ unique: true })
  @MinLength(10)
  title: string;
}
