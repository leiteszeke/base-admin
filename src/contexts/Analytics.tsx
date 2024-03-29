import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Config from "src/config";
import { clearMixpanel, initAnalytics } from "src/helpers/analytics";

import { AdminStore } from "src/store";
import { MixPanel } from "src/types";

const useMixpanelAnalytics = Config.useMixpanelAnalytics;
const mixpanelToken = Config.mixpanelToken;

type AnalyticsContextProps = {
  mixpanel: MutableRefObject<MixPanel | undefined>;
};

export const AnalyticsContext = createContext<Partial<AnalyticsContextProps>>(
  {}
);

export const AnalyticsProvider = ({ children }: PropsWithChildren<{}>) => {
  const mixpanelRef = useRef<MixPanel>();

  const init = useCallback(async () => {
    if (useMixpanelAnalytics && mixpanelToken) {
      const { user } = AdminStore.getState();

      if (user?.id) {
        initAnalytics(user, mixpanelRef as MutableRefObject<MixPanel>);
      }
    }
  }, []);

  useEffect(() => {
    init();

    return () => {
      if (mixpanelRef) {
        clearMixpanel(mixpanelRef as MutableRefObject<MixPanel>);
      }
    };
  }, [init]);

  return (
    <AnalyticsContext.Provider
      value={{
        mixpanel: mixpanelRef,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
