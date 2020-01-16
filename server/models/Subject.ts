import { IEntity } from './Entity';

export interface ISubject extends IEntity {
  name: string;
  url: string;
}

export interface ISubjectFromApi extends ISubject {
  created: string;
  edited: string;
}
