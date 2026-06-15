import { Injectable, NotFoundException } from '@nestjs/common';
import { ClickEntry } from '../interfaces/click-entry.interface';
import { UAParser } from 'ua-parser-js';
import { InjectRepository } from '@nestjs/typeorm';
import { Click } from '../entities/clicks.entity';
import { Repository } from 'typeorm';
import { UrlsService } from '../../urls/providers/urls.service';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Click)
    private readonly clickRepository: Repository<Click>,

    private readonly urlService: UrlsService,
  ) {}
  public async recordClick(data: ClickEntry, shortCode: string) {
    const clickData: ClickEntry = { ...data };

    const parser = new UAParser(data.userAgent);
    clickData.browser = parser.getBrowser().name ?? 'unkown';
    clickData.device = parser.getDevice().type ?? 'desktop';
    console.log(clickData);
    const url = await this.urlService.redirect(shortCode);
    if (!url) throw new NotFoundException('Not found url');

    const click = this.clickRepository.create({ ...clickData, url: url });
    await this.clickRepository.save(click);
  }
}
