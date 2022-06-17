import { Expose } from 'class-transformer';

export class UserEntity {
  readonly id: string;
  readonly role: string;
  readonly firstName: string;
  readonly lastName: string;

  constructor(id: string, role: string, firstName: string, lastName: string) {
    this.id = id;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
