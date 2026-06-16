/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from '../url.entity';
import { Repository } from 'typeorm';
import { CreateUrlDto } from '../dtos/create-url.dto';
import { nanoid } from 'nanoid';
import { PatchUrlDto } from '../dtos/patch-url.dto';
import type { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { UsersService } from '../../users/providers/users.service';
@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,

    private readonly userService: UsersService,
  ) {}

  public async fetchUrls(user: ActiveUserData) {
    return await this.urlRepository.find({
      where: {
        user: { id: user.sub },
      },
    });
  }

  public async createUrl(dto: CreateUrlDto, user: ActiveUserData) {
    const dbUser = await this.userService.findUserByEmail(user.email);
    if (!dbUser) {
      throw new NotFoundException('User not found');
    }
    const shortCode = nanoid(8);
    const url = this.urlRepository.create({
      ...dto,
      shortCode: shortCode,
      user: dbUser,
    });

    const { user: savedUser, ...urlData } = await this.urlRepository.save(url);

    return urlData;
  }

  public async redirect(shortCode: string) {
    const url = await this.urlRepository.findOne({
      where: { shortCode },
    });
    //exceptions
    if (!url) {
      throw new NotFoundException('Short URL not found');
    }
    if (url.expiresAt && url.expiresAt < new Date()) {
      throw new BadRequestException('URL expired');
    }
    return url;
  }

  public async deleteUrl(id: number, user: ActiveUserData) {
    const url = await this.urlRepository.findOne({
      where: {
        id,
        user: {
          id: user.sub,
        },
      },
    });

    if (!url) {
      throw new NotFoundException('URL not found');
    }

    await this.urlRepository.delete(id);

    return { deleted: true, id };
  }
  public async patchUrl(id: number, dto: PatchUrlDto, user: ActiveUserData) {
    //checks if it exists
    const exists = await this.urlRepository.findOne({
      where: {
        id,
        user: {
          id: user.sub,
        },
      },
    });
    if (!exists) {
      throw new NotFoundException('URL not found');
    }
    //checks if anything to update
    const updates = Object.fromEntries(
      Object.entries(dto).filter(
        ([key, value]) => value !== undefined && value != exists?.[key],
      ),
    );

    if (Object.keys(updates).length === 0) {
      throw new BadRequestException('Nothing to update');
    }
    Object.assign(exists, updates);
    return await this.urlRepository.save(exists);
  }

  public async findOneByIdAndUser(id: number, userId: number) {
    const url = await this.urlRepository.findOne({
      where: {
        id,
        user: {
          id: userId,
        },
      },
    });

    if (!url) {
      throw new NotFoundException('URL not found');
    }

    return url;
  }
}
