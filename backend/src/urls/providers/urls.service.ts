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
@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
  ) {}

  public async fetchUrls() {}

  public async createUrl(dto: CreateUrlDto) {
    const shortCode = nanoid(8);
    const url = this.urlRepository.create({ ...dto, shortCode: shortCode });
    return await this.urlRepository.save(url);
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

  public async deleteUrl(id: number) {
    const result = await this.urlRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException('URL not found');
    }
    return { deleted: true, id };
  }
  public async patchUrl(id: number, dto: PatchUrlDto) {
    //checks if it exists
    const exists = await this.urlRepository.findOne({
      where: { id },
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
}
