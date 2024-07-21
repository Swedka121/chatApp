import { socket } from "@/other/network";
import { makeAutoObservable } from "mobx";
import { IUser, IMessage } from "@/other/interfaces";

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

  reset(): void {
    this.roomId = "";
    this.username = "";
    this.userId = "";
    this.userColor = "";
    this.messages = [];
  }

  initUser(username: string): void {
    socket.emit("systemEvent_getUserInfo", username, (user: IUser) => {
      this.username = user.username;
      this.userId = user.userId;
    });
  }

  connectToRoom(): void {
    socket.emit("userEvent_connectToRoom", this.roomId);
  }

  disconnectFromRoom(): void {
    socket.emit("userEvent_disconnectFromRoom");
    this.reset();
  }

  getUser(): IUser {
    return { username: this.username, userId: this.userId };
  }

  getMessages(): Array<IMessage> {
    return this.messages;
  }

  setRoomId(roomId: string): void {
    console.log(this);
    if (!roomId) return;
    this.roomId = roomId;
  }

  sendMessage(content: string): void {
    socket.emit("userEvent_sendMessage", content);
  }
}

export const store = new chatStore();
export const useStore = () => store;
