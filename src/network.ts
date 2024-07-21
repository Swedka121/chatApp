const io = require("socket.io-client");
export const socket = io("http://localhost:9000", {
  reconnectionDelayMax: 1000,
});
