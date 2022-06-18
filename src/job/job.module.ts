import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobRepository } from './repositories/job.repository';
@Module({
  controllers: [JobController],
  providers: [JobRepository],
})
export class TaskModule {}
