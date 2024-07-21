export const metadata = {
  title: "Chat app",
  description: "ChatApp by Swedka121",
};
import "../style/global.css";
import { PropsWithChildren } from "react";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1 className="header-title">Chat app</h1>
        </header>
        <main className="container">{props.children}</main>
      </body>
    </html>
  );
}
