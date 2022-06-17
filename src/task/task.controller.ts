import { Controller } from '@nestjs/common';
import { TaskRepository } from './repositories/task.repositories';
import { Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
  constructor(readonly taskRepository: TaskRepository) {}

  @Get('/all')
  async getAllTasks(): Promise<any> {
    return await this.taskRepository.getAllTasks();
  }
  @Get('/all2')
  async getAllTask2(): Promise<any> {
    return await this.taskRepository.getAllTasks2();
  }
}
