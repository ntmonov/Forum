import { IsString, MinLength } from 'class-validator';

export class ForumDTO {
  @IsString()
  @MinLength(10)
  title: string;
}
