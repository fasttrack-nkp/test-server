import { Injectable } from '@nestjs/common';
import {
  InjectPersistenceManager,
  PersistenceManager,
  InjectCypher,
  Transactional,
  QuerySpecification,
} from '@liberation-data/drivine';
import { Route } from './entities/route.entities';
import { CypherStatement } from '@liberation-data/drivine';
import { Cursor } from '@liberation-data/drivine';
import { CursorSpecification } from '@liberation-data/drivine';

@Injectable()
export class RouteRepository {
  constructor(
    @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'routesBetween')
    readonly routesBetween: CypherStatement,
  ) {}

  @Transactional()
  async findFastestBetween(start: string, destination: string): Promise<Route> {
    return this.persistenceManager.getOne(
      new QuerySpecification<Route>()
        .withStatement(this.routesBetween)
        .bind([start, destination])
        .limit(1)
        .transform(Route),
    );
  }

  @Transactional()
  async findRoutesBetween(
    start: string,
    destination: string,
  ): Promise<Route[]> {
    return this.persistenceManager.query(
      new QuerySpecification<Route>()
        .withStatement(this.routesBetween)
        .bind([start, destination])
        .transform(Route),
    );
  }

  @Transactional()
  async asyncRoutesBetween(
    start: string,
    destination: string,
  ): Promise<Cursor<Route>> {
    return this.persistenceManager.openCursor(
      new CursorSpecification<Route>()
        .withStatement(this.routesBetween)
        .bind([start, destination])
        .batchSize(5)
        .transform(Route),
    );
  }
}
