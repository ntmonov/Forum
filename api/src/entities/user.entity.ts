import { AbstractEntity } from './abstract-entity';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { Exclude, classToPlain } from 'class-transformer';
import { IsBoolean, MinLength } from 'class-validator';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column({ unique: true })
  @MinLength(4)
  username: string;

  @Column({ default: null, nullable: true })
  image: string | null;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: false })
  @IsBoolean()
  @Exclude()
  isAdmin: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toJSON() {
    return classToPlain(this);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }
}
