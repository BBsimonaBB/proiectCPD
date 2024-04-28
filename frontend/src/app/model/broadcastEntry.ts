import {User} from './user';

export class BroadcastEntry {

  name!: string;
  time!: string;
  type!: string;
  users!: User[];
  owner!: string;
}
