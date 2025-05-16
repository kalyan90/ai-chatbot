type Role = 'User' | 'Assistant';

export type Message = {
  role: Role;
  content: string;
};