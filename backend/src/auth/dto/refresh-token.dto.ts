import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    example: 'eyJhbGc9.eyJzdWIiOjEs.aHrVP_NUblbKto4OKhuLITZ7IgTy2XXA',
  })
  @IsNotEmpty()
  @IsString()
  refreshToken!: string;
}
