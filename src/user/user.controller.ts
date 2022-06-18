import { UserEntity } from '@/user/entities/user.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

@Controller('user')
export class UserController {
  constructor(readonly userRepository: UserRepository) {}

  @Get('/all')
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.getAllUsers();
  }

  @Get('/info/:userId')
  async getUserInfo(@Param('userId') userId: string): Promise<UserEntity> {
    return await this.userRepository.getUserInfo(userId);
  }
}
