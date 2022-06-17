import { Injectable } from '@nestjs/common';
import {
  InjectPersistenceManager,
  PersistenceManager,
  InjectCypher,
  Transactional,
  QuerySpecification,
} from '@liberation-data/drivine';

import { UserEntity } from './entities/user.entity';
import { CypherStatement } from '@liberation-data/drivine';
import { Cursor } from '@liberation-data/drivine';
import { CursorSpecification } from '@liberation-data/drivine';

@Injectable()
export class UserRepository {
  constructor(
    @InjectPersistenceManager()
    readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'allUsers')
    readonly allUsers: CypherStatement,
  ) {}

  @Transactional()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.persistenceManager.query(
      new QuerySpecification<UserEntity>()
        .withStatement(this.allUsers)
        .transform(UserEntity),
    );
  }
}
