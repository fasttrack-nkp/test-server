import { Expose } from 'class-transformer';

export class UserEntity {
  readonly id: string;
  readonly role: string;
  @Expose({ name: 'first_name' })
  readonly firstName: string;
  @Expose({ name: 'last_name' })
  readonly lastName: string;

  constructor(id: string, role: string, firstName: string, lastName: string) {
    this.id = id;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
