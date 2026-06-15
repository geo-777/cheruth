import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyRedirect {
  @ApiProperty({
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  password!: string;

  @ApiProperty({
    example: 'abcDe2',
  })
  @IsNotEmpty()
  @IsString()
  shortCode!: string;
}
