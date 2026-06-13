import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { HashProvider } from './hashing.provider';
import { LoginUserDto } from '../dto/login-user.dto';
import { GenerateTokensProvider } from './generate-token.provider';
import type { ActiveUserData } from '../interfaces/active-user-data.interface';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { RefreshTokenProvider } from './refresh-token.provider';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashProvider: HashProvider,
    private readonly generateTokensProvider: GenerateTokensProvider,
    private readonly refreshTokenProvider: RefreshTokenProvider,
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

  public async login(dto: LoginUserDto) {
    const user = await this.usersService.findUserByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const isMatch = await this.hashProvider.compare(
      dto.password,
      user.password,
    );

    if (!isMatch) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    return await this.generateTokensProvider.generateTokens(user);
  }

  public async me(user: ActiveUserData) {
    const data = await this.usersService.findUserByEmail(user.email);

    if (!data) {
      throw new NotFoundException('User not found');
    }

    return {
      username: data.username,
      email: data.email,
      createdAt: data.createdAt,
    };
  }

  public refresh(dto: RefreshTokenDto) {
    return this.refreshTokenProvider.refresh(dto);
  }
}
