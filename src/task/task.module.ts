import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskRepository } from './repositories/task.repositories';
@Module({
  controllers: [TaskController],
  providers: [TaskRepository],
})
export class TaskModule {}
