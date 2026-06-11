import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async userExists(dto: CreateUserDto): Promise<boolean> {
    const exists = await this.userRepository.findOne({
      where: [{ email: dto.email }, { username: dto.username }],
    });
    return !!exists;
  }

  public async createUser(dto: CreateUserDto) {
    try {
      const user = this.userRepository.create({ ...dto });
      return await this.userRepository.save(user);
    } catch (err: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if ((err as any)?.code === '23505') {
        throw new ConflictException('Email or username already exists.');
      }
      throw err;
    }
  }

  public async findUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
