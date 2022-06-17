import { Controller, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
  constructor(readonly userRepository: UserRepository) {}

  @Get('/all')
  async getAllUser(): Promise<any> {
    return await this.userRepository.getAllUsers();
  }
}
