import Mixpanel, { OverridedMixpanel } from "mixpanel-browser";

import { MutableRefObject } from "react";
import { AdminStore } from "src/store";
import { AppVersion, EventKey, Generic, MixPanel, User } from "src/types";

const useMixpanelAnalytics =
  process.env.REACT_APP_USE_MIXPANEL_ANALYITCS ?? false;
const mixpanelToken = process.env.REACT_APP_MIXPANEL_TOKEN ?? "";

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
    env: process.env.NODE_ENV,
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

  if (useMixpanelAnalytics && mixpanelToken) {
    const peopleConfig = {
      ...userProps,
      ...extraProps,
    };

    Mixpanel?.init(mixpanelToken);

    if (peopleConfig.id) {
      Mixpanel?.identify(peopleConfig.id);
    }

    Mixpanel?.register(peopleConfig);
  }
};

export const logEvent = (eventName: string, eventData: Generic) => {
  mixpanelEvent(eventName, eventData);
};

export const logScreenView = async (screenName: string) => {
  mixpanelEvent(EventKey.ScreenView, { screenName });
};

export const mixpanelEvent = (eventName: string, props?: Generic) => {
  if (useMixpanelAnalytics) {
    initAnalytics();
    Mixpanel?.track(eventName, props);
  }
};

export const clearMixpanel = (
  _: MutableRefObject<OverridedMixpanel | undefined>
) => {
  if (useMixpanelAnalytics) {
    initAnalytics();
    Mixpanel?.reset();
  }
};
