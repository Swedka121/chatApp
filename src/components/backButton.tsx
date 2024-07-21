"use client";
import React from "react";
import { useStore } from "@/store/chatStore";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";

export default observer(function BackButton() {
  const router = useRouter();
  const store = useStore();
  return (
    <button
      className="backButton"
      onClick={(ev) => {
        store.disconnectFromRoom();
        router.push("/");
      }}
    >
      Back
    </button>
  );
});
