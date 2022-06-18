import { Expose } from 'class-transformer';
import { RoleEntity } from '@/user/entities/role.entity';

export class UserEntity {
  readonly id: string;
  readonly role: RoleEntity;
  readonly firstName: string;
  // readonly lastName: string;

  constructor(
    id: string,
    role: RoleEntity,
    firstName: string,
    lastName: string,
  ) {
    this.id = id;
    this.role = role;
    this.firstName = firstName;
    // this.lastName = lastName;
  }
}
