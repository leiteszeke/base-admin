import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getSession, removeSession, setSession } from "src/helpers/session";
import { AppVersion, User } from "src/types";

export const AuthContext = createContext<{
  user?: User | null;
  isLogged: boolean;
  hasPermission?: (key: string) => boolean;
  onLogin?: (user: User) => void;
  onLogout?: VoidFunction;
}>({
  isLogged: false,
  user: undefined,
});

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>();

  const isLogged = useMemo(() => {
    if (typeof user === "undefined") {
      return false;
    }

    return user !== null;
  }, [user]);

  const init = useCallback(() => {
    const session = getSession();

    if (session) {
      if (session.version !== AppVersion) {
        return onLogout();
      }
    }

    setUser(session);
  }, []);

  const onLogin = (data: User) => {
    setSession(data);
    window.location.href = "/";
  };

  const onLogout = () => {
    removeSession();
    setUser(null);

    window.location.href = window.location.origin + "/#/login";
  };

  useEffect(() => {
    init();
  }, [init]);

  return (
    <AuthContext.Provider value={{ isLogged, onLogin, onLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
