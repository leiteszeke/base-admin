import { useContext } from "react";
import { SocketContext } from "src/contexts/Socket";
import { Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "src/services/socket";

export const useSocket = () => {
  return useContext(SocketContext).client as Socket<
    ServerToClientEvents,
    ClientToServerEvents
  >;
};
