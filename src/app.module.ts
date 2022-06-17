import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrivineModule } from '@liberation-data/drivine';
import { DrivineModuleOptions } from '@liberation-data/drivine';
import { DatabaseRegistry } from '@liberation-data/drivine';
import { RouteModule } from './route/route.module';

@Module({
  imports: [
    DrivineModule.withOptions(<DrivineModuleOptions>{
      connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()],
    }),
    RouteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
