import { Expose } from 'class-transformer';

export class TrackEntity {
  readonly id: string;
  readonly HN: string;

  constructor(id: string, HN: string) {
    this.id = id;
    this.HN = HN;
  }
}
