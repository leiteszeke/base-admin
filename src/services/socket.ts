import { Manager, Socket } from "socket.io-client";
import { AppVersion, UserWithToken } from "src/types";
import { logEvent } from "src/helpers/analytics";
import Config from "src/config";

export type ServerToClientEvents = {
  PRODUCT_UPDATED: () => void;
};

export type ClientToServerEvents = {};

const newSocketClient = (user: UserWithToken | null) => {
  if (!Config.socketEnabled) {
    return null;
  }

  const manager = new Manager<ServerToClientEvents, ClientToServerEvents>(
    Config.wsUrl
  );
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    manager.socket("/", {
      auth: {
        Authorization: `Bearer ${user?.accessToken}`,
        userId: user?.id,
        appVersion: AppVersion,
        referrer: "admin",
      },
    });

  socket.on("connect", () => {
    logEvent("socket.connection", {
      socketId: socket.id,
      userId: user?.id,
      AppVersion: AppVersion,
      referrer: "admin",
    });
  });

  socket.on("disconnect", () => {
    logEvent("socket.disconnection", {
      socketId: socket.id,
      userId: user?.id,
      AppVersion: AppVersion,
      referrer: "admin",
    });
  });

  return socket;
};

export default newSocketClient;
