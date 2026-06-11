import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'https://google.com',
    description: 'Original long URL',
  })
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  originalUrl!: string;

  @ApiProperty({
    example: 'Google',
    description: 'Title for URL',
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  title?: string;

  @ApiProperty({
    example: '2007-01-16',
    description: 'URL expiry date',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Send proper dates' })
  expiresAt?: Date;

  @ApiProperty({
    example: 'password#123',
    description: 'Password for protected URLS.',
  })
  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  password?: string;
}
