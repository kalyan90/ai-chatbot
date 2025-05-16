export enum RoleEnum {
  User = 'User',
  Assistant = 'Assistant',
}

export type Message = {
  role: RoleEnum;
  content: string;
};