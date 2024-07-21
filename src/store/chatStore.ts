import { socket } from "@/network";
import { makeAutoObservable } from "mobx";

export interface IUser {
  username: string;
  userId: string;
}
export interface IMessage {
  author: IUser;
  content: string;
  type: "SYSTEM" | "USER";
}

class chatStore {
  roomId: string;
  username: string;
  userId: string;
  userColor: string;
  messages: Array<IMessage>;
  constructor() {
    this.roomId = "";
    this.username = "";
    this.userId = "";
    this.userColor = "";
    this.messages = [];
    socket.on("userEvent_sendMessageClient", (messages: Array<IMessage>) => {
      this.messages = messages;
    });
    makeAutoObservable(this);
  }
  initUser(username: string) {
    socket.emit("systemEvent_getUserInfo", username, (user: IUser) => {
      this.username = user.username;
      this.userId = user.userId;
    });
    return;
  }
  connectToRoom() {
    console.log(this);
    socket.emit("userEvent_connectToRoom", this.roomId);
  }
  disconnectFromRoom() {
    socket.emit("userEvent_disconnectFromRoom");
    this.messages = [];
    this.roomId = "";
    this.userId = "";
    this.username = "";
  }
  getUser(): IUser {
    return { username: this.username, userId: this.userId };
  }
  getMessages(): Array<IMessage> {
    return this.messages;
  }
  setRoomId(roomId: string) {
    console.log(this);
    if (!roomId) return;
    this.roomId = roomId;
  }
  sendMessage(content: string) {
    socket.emit("userEvent_sendMessage", content);
  }
}

export default chatStore;
