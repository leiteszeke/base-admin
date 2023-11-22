import { createContext, PropsWithChildren, useEffect, useState } from "react";
import newSocketClient, {
  ClientToServerEvents,
  ServerToClientEvents,
} from "src/services/socket";
import { Socket } from "socket.io-client";

import { UserWithToken } from "src/types";
import Config from "src/config";

type SocketContextProps = {
  client: Socket<ServerToClientEvents, ClientToServerEvents> | null;
};

export const SocketContext = createContext<Partial<SocketContextProps>>({});

export const SocketProvider = ({
  children,
  user,
}: PropsWithChildren<{ user: UserWithToken }>) => {
  const [client] = useState<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(Config.socketEnabled ? newSocketClient(user) : null);

  useEffect(() => {
    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{ client }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
