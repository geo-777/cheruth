import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PatchUrlDto {
  @IsOptional()
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  originalUrl?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  title?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  expiresAt?: Date;

  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  password?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
