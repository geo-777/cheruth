import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { HashProvider } from './hashing.provider';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashProvider: HashProvider,
  ) {}
  public async register(dto: CreateUserDto) {
    //check exists
    const exists: boolean = await this.usersService.userExists(dto);
    if (exists) {
      throw new ConflictException('Email already exists');
    }
    const hashedPassword = await this.hashProvider.hash(dto.password);
    return this.usersService.createUser({
      ...dto,
      password: hashedPassword,
    });
  }
}
