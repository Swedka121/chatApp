"use client";
import React, { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "@/store/chatStore";

export default observer(function SendMessageFrom() {
  const [message, useMessage] = useState<string>("");
  const store = useStore();

  function onSubmit() {
    store.sendMessage(message);
    useMessage("");
  }

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit();
      }}
      className="sendMessageForm"
    >
      <input
        className="messageFromText"
        type="text"
        placeholder="Enter your message!"
        required
        value={message}
        onChange={(ev) => useMessage(ev.target.value)}
      ></input>
      <input type="submit" value="Send" className="messageFormSubmit"></input>
    </form>
  );
});
