import { Controller, Param } from '@nestjs/common';
import { JobRepository } from './repositories/job.repository';
import { Get } from '@nestjs/common';

@Controller('job')
export class JobController {
  constructor(readonly JobRepository: JobRepository) {}

  @Get('track/all')
  async getAllTracks(): Promise<any> {
    return await this.JobRepository.getAllTracks();
  }

  @Get('track/currentTask/:trackId')
  async getTrackCurrentTasks(@Param('trackId') trackId: string): Promise<any> {
    return await this.JobRepository.getTrackCurrentTasks(trackId);
  }

  // @Get('/all')
  // async getAllTasks(): Promise<any> {
  //   return await this.taskRepository.getAllTasks();
  // }
  // @Get('/all2')
  // async getAllTask2(): Promise<any> {
  //   return await this.taskRepository.getAllTasks2();
  //
}
