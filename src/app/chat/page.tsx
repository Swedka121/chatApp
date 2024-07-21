import React from "react";
import BackButton from "@/components/backButton";
import ChatBlock from "@/components/chatBlock";
import SendMessageFrom from "@/components/sendMessageFrom";

export default function Page() {
  return (
    <div className="centred">
      <div className="topPanel">
        <BackButton />
      </div>
      <ChatBlock />
      <SendMessageFrom />
    </div>
  );
}
