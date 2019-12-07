export const getToken = () => {
  const storage = localStorage.getItem('base-admin');
  if (!storage) return null;
  return JSON.parse(storage).access_token || null;
};

export const getUser = () => {
  const storage = localStorage.getItem('base-admin');
  if (!storage) return {};
  return JSON.parse(storage).user || {};
};
