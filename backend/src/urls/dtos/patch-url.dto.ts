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
import { ApiProperty } from '@nestjs/swagger';
export class PatchUrlDto {
  @ApiProperty({
    example: 'https://google.com',
    description: 'Original long URL',
  })
  @IsOptional()
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  originalUrl?: string;

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
  @IsDate()
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

  @ApiProperty({
    example: true,
    description: 'Indicates if url is active or not.',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
