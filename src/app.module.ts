import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrivineModule } from '@liberation-data/drivine';
import { DrivineModuleOptions } from '@liberation-data/drivine';
import { DatabaseRegistry } from '@liberation-data/drivine';
import { UserModule } from './user/user.module';
import { TaskModule } from './job/job.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DrivineModule.withOptions(<DrivineModuleOptions>{
      connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()],
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
