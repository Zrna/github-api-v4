export interface IRepository {
  node: {
    description: string;
    isPrivate: boolean;
    name: string;
    url: string;
  }
}

export interface IRepositories {
  edges: IRepository[];
}

export interface IUser {
  avatarUrl: string;
  email: string;
  id: string;
  login: string;
  repositories: IRepositories;
  url: string;
}
