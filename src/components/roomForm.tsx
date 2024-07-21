"use client";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useStore } from "@/store/chatStoreProvider";
import { useRouter } from "next/navigation";

export default observer(function RoomForm() {
  const [roomId, useRoomId] = useState<string>("");
  const store = useStore();
  const router = useRouter();

  function onSubmitForm() {
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
