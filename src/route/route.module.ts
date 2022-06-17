import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteRepository } from './route.repository';
@Module({
  controllers: [RouteController],
  providers: [RouteRepository],
})
export class RouteModule {}
