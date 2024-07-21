export interface IUser {
  username: string;
  userId: string;
}
export interface IMessage {
  author: IUser;
  content: string;
  type: "SYSTEM" | "USER";
}
