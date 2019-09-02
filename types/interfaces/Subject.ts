export interface ISubject{
  id: string
  name: string
  url: string
}

export interface ISubjectFromApi extends ISubject{
  created: string
  edited: string
}