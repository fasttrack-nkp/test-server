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
      MATCH (user:USER)-[:HAS_ROLE]->(role:ROLE)
      WITH user, collect(role{.*}) AS rolePropsList
      RETURN user{.*, role: rolePropsList}
      `).transform(UserEntity),
    );
  }

  @Transactional()
  async getUserInfo(userId: string): Promise<UserEntity> {
    return this.persistenceManager.getOne(
      new QuerySpecification<UserEntity>(`
      MATCH (user:USER)-[:HAS_ROLE]->(role:ROLE)
      WHERE user.id = $1
      WITH user, collect(role{.*}) AS rolePropsList
      RETURN user{.*, role: rolePropsList}
      `)
        .bind([userId])
        .transform(UserEntity),
    );
  }
}
