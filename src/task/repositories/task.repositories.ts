import { Injectable } from '@nestjs/common';
import {
  InjectPersistenceManager,
  PersistenceManager,
  InjectCypher,
  Transactional,
  QuerySpecification,
} from '@liberation-data/drivine';
import { CypherStatement } from '@liberation-data/drivine';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectPersistenceManager()
    readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'allTasks')
    readonly allUsers: CypherStatement,
  ) {}

  @Transactional()
  async getAllTasks(): Promise<any[]> {
    return this.persistenceManager.query(
      new QuerySpecification<any>().withStatement(this.allUsers),
    );
  }

  @Transactional()
  async getAllTasks2(): Promise<any[]> {
    return this.persistenceManager.query(
      new QuerySpecification(
        'match (n:TASK)-[r:THEN]->(m:TASK) return {type:type(r), start:startNode(r), end:endNode(r), m:m ,n:n}',
      ).bind(),
    );
  }
}
