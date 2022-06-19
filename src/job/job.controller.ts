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

  @Get('task/all/:trackId')
  async getAllTasks(@Param('trackId') trackId: string): Promise<any> {
    return await this.JobRepository.getAllTasks(trackId);
  }

  @Get('task/:trackId/:roleId')
  async getTasksByRole(
    @Param('trackId') trackId: string,
    @Param('roleId') roleId: string,
  ): Promise<any> {
    return await this.JobRepository.getTasksByRole(trackId, roleId);
  }
}
