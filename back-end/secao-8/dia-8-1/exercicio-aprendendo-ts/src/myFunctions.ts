import { User } from './types/User';

export const getUserName = (userList: User[]): string[] => userList.map((user: User) => user.name);

export const getUserByRepo = (users: User[], repo: number): string[] => users
.filter((user) => user.repositories >= repo).map((user) => user.name);

export const IsMostActive = (name: string, users: User[]): boolean => {
  const mostActive = users.reduce(
    (prev, curr) => 
      (prev.repositories > curr.repositories ? prev : curr),
  );
  return IsMostActive.name === name;
};