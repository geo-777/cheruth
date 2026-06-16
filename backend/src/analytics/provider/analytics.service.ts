import { Injectable, NotFoundException } from '@nestjs/common';
import { ClickEntry } from '../interfaces/click-entry.interface';
import { UAParser } from 'ua-parser-js';
import { InjectRepository } from '@nestjs/typeorm';
import { Click } from '../entities/clicks.entity';
import { Repository } from 'typeorm';
import { UrlsService } from '../../urls/providers/urls.service';
import { type ActiveUserData } from '../../auth/interfaces/active-user-data.interface';

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
    const url = await this.urlService.redirect(shortCode);
    if (!url) throw new NotFoundException('Not found url');

    const click = this.clickRepository.create({ ...clickData, url: url });
    await this.clickRepository.save(click);
  }

  public async getAll(user: ActiveUserData) {
    const [totalClicks, clicksPerDate, clicksPerDevice, clicksPerBrowser] =
      await Promise.all([
        this.clickRepository
          .createQueryBuilder('click')
          .innerJoin('click.url', 'url')
          .where('url.userId = :userId', { userId: user.sub })
          .getCount(),

        this.clickRepository
          .createQueryBuilder('click')
          .innerJoin('click.url', 'url')
          .select('DATE(click.createdAt)', 'date')
          .addSelect('COUNT(*)', 'count')
          .where('url.userId = :userId', { userId: user.sub })
          .groupBy('DATE(click.createdAt)')
          .orderBy('date', 'ASC')
          .getRawMany(),

        this.clickRepository
          .createQueryBuilder('click')
          .innerJoin('click.url', 'url')
          .select('click.device', 'device')
          .addSelect('COUNT(*)', 'count')
          .where('url.userId = :userId', { userId: user.sub })
          .groupBy('click.device')
          .getRawMany(),

        this.clickRepository
          .createQueryBuilder('click')
          .innerJoin('click.url', 'url')
          .select('click.browser', 'browser')
          .addSelect('COUNT(*)', 'count')
          .where('url.userId = :userId', { userId: user.sub })
          .groupBy('click.browser')
          .getRawMany(),
      ]);

    return { totalClicks, clicksPerDate, clicksPerDevice, clicksPerBrowser };
  }

  public async getIndividualAnalytics(id: number, user: ActiveUserData) {
    await this.urlService.findOneByIdAndUser(id, user.sub); // checking if url exists

    const [
      totalClicks,
      clicksPerDate,
      clicksPerDevice,
      clicksPerBrowser,
      lastVisit,
    ] = await Promise.all([
      this.clickRepository
        .createQueryBuilder('click')
        .innerJoin('click.url', 'url')
        .where('url.id = :urlId', { urlId: id })
        .andWhere('url.userId = :userId', { userId: user.sub })
        .getCount(),

      this.clickRepository
        .createQueryBuilder('click')
        .innerJoin('click.url', 'url')
        .select('DATE(click.createdAt)', 'date')
        .addSelect('COUNT(*)', 'count')
        .where('url.id = :urlId', { urlId: id })
        .andWhere('url.userId = :userId', { userId: user.sub })
        .groupBy('DATE(click.createdAt)')
        .orderBy('date', 'ASC')
        .getRawMany(),

      this.clickRepository
        .createQueryBuilder('click')
        .innerJoin('click.url', 'url')
        .select('click.device', 'device')
        .addSelect('COUNT(*)', 'count')
        .where('url.id = :urlId', { urlId: id })
        .andWhere('url.userId = :userId', { userId: user.sub })
        .groupBy('click.device')
        .getRawMany(),

      this.clickRepository
        .createQueryBuilder('click')
        .innerJoin('click.url', 'url')
        .select('click.browser', 'browser')
        .addSelect('COUNT(*)', 'count')
        .where('url.id = :urlId', { urlId: id })
        .andWhere('url.userId = :userId', { userId: user.sub })
        .groupBy('click.browser')
        .getRawMany(),

      this.clickRepository
        .createQueryBuilder('click')
        .innerJoin('click.url', 'url')
        .where('url.id = :urlId', { urlId: id })
        .andWhere('url.userId = :userId', { userId: user.sub })
        .orderBy('click.createdAt', 'DESC')
        .getOne(),
    ]);

    return {
      totalClicks,
      clicksPerDate,
      clicksPerDevice,
      clicksPerBrowser,
      lastVisit,
    };
  }
}
