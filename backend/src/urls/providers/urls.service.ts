import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from '../url.entity';
import { Repository } from 'typeorm';
import { CreateUrlDto } from '../dtos/create-url.dto';
import { nanoid } from 'nanoid';
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
}
