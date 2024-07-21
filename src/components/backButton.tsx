"use client";
import { store } from "@/store/chatStoreProvider";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="backButton"
      onClick={(ev) => {
        store.disconnectFromRoom()
        router.push("/");
      }}
    >
      Back
    </button>
  );
}
