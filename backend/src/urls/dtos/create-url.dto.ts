import { Type } from 'class-transformer';
import {
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  @MaxLength(500)
  originalUrl!: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  title?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Send proper dates' })
  expiresAt?: Date;

  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  password?: string;
}
