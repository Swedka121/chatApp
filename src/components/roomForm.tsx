"use client";
import React, { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "@/store/chatStore";
import { useRouter } from "next/navigation";

export default observer(function RoomForm() {
  const [roomId, useRoomId] = useState<string>("");
  const store = useStore();
  const router = useRouter();

  function onSubmitForm(): void {
    store.setRoomId(roomId);
    router.push("/chat/user");
    useRoomId("");
  }

  return (
    <form
      style={{ marginTop: "50px" }}
      action=""
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmitForm();
      }}
    >
      <input
        type="text"
        placeholder="Enter room code"
        value={roomId}
        required
        className="textInput"
        onChange={(ev) => {
          useRoomId(ev.target.value);
        }}
      ></input>
      <input className="submitInput" type="submit" value="Next"></input>
    </form>
  );
});
