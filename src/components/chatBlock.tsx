"use client";
import React from "react";
import { useStore } from "@/store/chatStore";
import { observer } from "mobx-react";

export default observer(function ChatBlock() {
  const store = useStore();
  const messages = store.getMessages();

  return (
    <section className="messageBlock">
      {messages.map((message) => (
        <div
          className={
            message.type == "USER"
              ? message.author.userId == store.userId
                ? "userMessage message"
                : "otherUserMessage message"
              : "systemMessage"
          }
        >
          <h5 className="authorMessage">
            {message.author.userId == store.userId ||
            message.author.userId == "0"
              ? null
              : message.author.username}
          </h5>
          <p className="textWrap">{message.content}</p>
        </div>
      ))}
    </section>
  );
});
