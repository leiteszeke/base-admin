const parseEmptyString = (value: string | undefined): string => {
  if (!value) {
    return "";
  }

  return value.toString();
};

const parseString = (value: string | undefined): string => {
  return (value ?? "").toString();
};

export const parseNumber = (value: string | undefined): number => {
  return Number(value ?? 0);
};

const parseBoolean = (value: string | boolean | undefined): boolean => {
  if (!value) {
    return false;
  }

  if (value === "true" || value === true) {
    return true;
  }

  return false;
};

const Config = {
  sessionKey: parseEmptyString(process.env.VITE_SESSION_KEY),

  apiUrl: parseEmptyString(process.env.VITE_API_URL),
  wsUrl: parseEmptyString(process.env.VITE_WS_API_URL),

  useMixpanelAnalytics: parseBoolean(process.env.VITE_USE_MIXPANEL_ANALYITCS),
  mixpanelToken: parseString(process.env.VITE_MIXPANEL_TOKEN),

  socketEnabled: parseBoolean(process.env.VITE_SOCKET_ENABLED),

  env: parseString(process.env.NODE_ENV),
  publicUrl: parseString(process.env.PUBLIC_URL),
};

export default Config;
