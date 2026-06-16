import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AnalyticsService } from './provider/analytics.service';
import { type ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/analytics')
export class AnalyticsController {
  constructor(private readonly analyticService: AnalyticsService) {}
  @ApiBearerAuth()
  @Get(':id')
  public async getIndividualAnalytics(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.analyticService.getIndividualAnalytics(id, user);
  }

  @Get()
  @ApiBearerAuth()
  public async getAll(@ActiveUser() user: ActiveUserData) {
    return this.analyticService.getAll(user);
  }
}
