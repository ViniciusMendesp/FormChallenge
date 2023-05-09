export interface IUser {
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface ILogIn {
  email: string;
  password: string;
}

export interface IAuthContext {
  logIn: (email: string, password: string) => Promise<IUser | undefined>;
}
