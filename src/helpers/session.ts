const { REACT_APP_SESSION_KEY: SESSION_KEY } = process.env;

export const getSession = () => {
  const session = localStorage.getItem(SESSION_KEY ?? "");
  const sessionUser =
    session !== "undefined" && session !== null ? JSON.parse(session) : null;

  return sessionUser;
};

export const setSession = (data: unknown) => {
  localStorage.setItem(SESSION_KEY ?? "", JSON.stringify(data));
};

export const removeSession = () => {
  localStorage.removeItem(SESSION_KEY ?? "");
};
