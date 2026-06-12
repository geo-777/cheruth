import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'username',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username!: string;
  @ApiProperty({
    example: 'user@gmai.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email!: string;
  @ApiProperty({
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  password!: string;
}
