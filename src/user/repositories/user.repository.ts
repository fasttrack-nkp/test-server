import { Injectable } from '@nestjs/common';
import {
  InjectPersistenceManager,
  PersistenceManager,
  InjectCypher,
  Transactional,
  QuerySpecification,
} from '@liberation-data/drivine';

import { UserEntity } from '../entities/user.entity';
import { CypherStatement } from '@liberation-data/drivine';
import { Cursor } from '@liberation-data/drivine';
import { CursorSpecification } from '@liberation-data/drivine';

@Injectable()
export class UserRepository {
  constructor(
    @InjectPersistenceManager()
    readonly persistenceManager: PersistenceManager,
  ) {}

  @Transactional()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.persistenceManager.query(
      new QuerySpecification<UserEntity>(`
      match (user:USER)-[:HAS_ROLE]->(role:ROLE)
      with user,  collect(role{.*}) as rolePropsList
      return user{.*, role: rolePropsList}`).transform(UserEntity),
    );
  }

  @Transactional()
  async getUserInfo(userId: string): Promise<UserEntity> {
    return this.persistenceManager.getOne(
      new QuerySpecification<UserEntity>(`
      match (user:USER)-[:HAS_ROLE]->(role:ROLE)
      where user.id = $1
      with user,  collect(role{.*}) as rolePropsList
      return user{.*, role: rolePropsList}`)
        .bind([userId])
        .transform(UserEntity),
    );
  }
}
