import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicItem } from './items/models/item.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('items')
  getItems(): PublicItem[] {
    return this.appService.getPublicItems();
  }
}
