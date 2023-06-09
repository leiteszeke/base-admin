import Config from "src/config";

export const getSession = () => {
  const session = localStorage.getItem(Config.sessionKey);
  const sessionUser =
    session !== "undefined" && session !== null ? JSON.parse(session) : null;

  return sessionUser;
};

export const setSession = (data: unknown) => {
  localStorage.setItem(Config.sessionKey, JSON.stringify(data));
};

export const removeSession = () => {
  localStorage.removeItem(Config.sessionKey);
};
