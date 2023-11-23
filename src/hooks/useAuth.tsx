import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { User } from "src/types";

export const useAuth = (): {
  isLogged: boolean;
  user: User | null;
} => {
  const { user = null, isLogged } = useContext(AuthContext);

  return {
    isLogged,
    user,
  };
};

export const useAuthActions = () => {
  const { hasPermission, onLogin, onLogout } = useContext(AuthContext);

  return {
    hasPermission,
    onLogin,
    onLogout,
  };
};
