"use client";
import React, { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "@/store/chatStore";
import { useRouter } from "next/navigation";

export default observer(function UserFrom() {
  const store = useStore();
  const [username, useUsername] = useState<string>("");
  const router = useRouter();

  function onSubmit(): void {
    store.initUser(username);
    store.connectToRoom();
    useUsername("");
    router.push("/chat");
  }

  return (
    <form
      style={{ marginTop: "50px" }}
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit();
      }}
    >
      <input
        className="textInput"
        placeholder="Enter your username"
        type="text"
        value={username}
        required
        onChange={(ev) => {
          useUsername(ev.target.value);
          console.log(store);
        }}
      ></input>
      <input className="submitInput" value="Connect" type="submit"></input>
    </form>
  );
});
