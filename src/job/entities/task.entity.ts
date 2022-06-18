import { Expose } from 'class-transformer';
import { TrackEntity } from '@/job/entities/track.entity';

export class TaskEntity {
  readonly id: string;
  readonly name: string;
  readonly status: 'SUCCESS' | 'PENDING';
  readonly track: TrackEntity;

  constructor(
    id: string,
    name: string,
    status: 'SUCCESS' | 'PENDING',
    track: TrackEntity,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.track = track;
  }
}
