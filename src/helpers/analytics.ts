import Mixpanel, { OverridedMixpanel } from "mixpanel-browser";

import { MutableRefObject } from "react";
import Config from "src/config";
import { AdminStore } from "src/store";
import { AppVersion, EventKey, Generic, MixPanel, User } from "src/types";

type UserData = Pick<User, "id" | "name" | "email" | "lastname">;

const getUserData = (user?: User | null) => {
  let innerUser = user;

  if (!user) {
    innerUser = AdminStore.getState().user;
  }

  const userProps: Partial<UserData> = {};
  const deviceData = {
    currentVersion: AppVersion,
    deviceMeta: {
      OS: "web",
    },
  };

  if (innerUser) {
    userProps.id = innerUser.id;
    userProps.email = innerUser.email;
    userProps.name = innerUser.name;
    userProps.lastname = innerUser.lastname;
  }

  const extraProps = {
    env: Config.env,
    currentVersion: deviceData.currentVersion,
    OS: deviceData.deviceMeta.OS,
    appVersion: AppVersion,
  };

  return {
    userProps,
    extraProps,
  };
};

export const initAnalytics = (user?: User, _?: MutableRefObject<MixPanel>) => {
  const { userProps, extraProps } = getUserData(user);

  if (Config.useMixpanelAnalytics && Config.mixpanelToken) {
    const peopleConfig = {
      ...userProps,
      ...extraProps,
    };

    Mixpanel?.init(Config.mixpanelToken);

    if (peopleConfig.id) {
      Mixpanel?.identify(peopleConfig.id.toString());
    }

    Mixpanel?.register(peopleConfig);
  }
};

export const logEvent = (eventName: string, eventData?: Generic) => {
  mixpanelEvent(eventName, eventData);
};

export const logScreenView = async (
  screenName: string,
  restProps?: Generic
) => {
  mixpanelEvent(EventKey.ScreenView, { screenName, ...restProps });
};

export const mixpanelEvent = (eventName: string, props?: Generic) => {
  if (Config.useMixpanelAnalytics) {
    initAnalytics();
    Mixpanel?.track(eventName, props);
  }
};

export const clearMixpanel = (_: MutableRefObject<OverridedMixpanel>) => {
  if (Config.useMixpanelAnalytics) {
    initAnalytics();
    Mixpanel?.reset();
  }
};
