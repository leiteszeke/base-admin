import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { State, Set, GenericState } from "./store.types";
import { layoutState } from "./layout";
import { usersInitialState, userStore } from "./users";
import Config from "src/config";

export const genericState = (set: Set<GenericState>): GenericState => ({
  resetStore: () =>
    set((state) => ({
      ...state,
      ...usersInitialState,
    })),
});

const storeObject = (set: Set<State>): State => ({
  ...genericState(set),
  ...layoutState(set),
  ...userStore(set),
});

const storeConfig = {
  name: Config.sessionKey,
};

export const useAdminStore = create<
  State,
  [["zustand/devtools", never], ["zustand/persist", State]]
>(
  devtools(
    persist(
      (set) => ({
        ...storeObject(set),
      }),
      storeConfig
    )
  )
);

export const AdminStore = createStore<
  State,
  [["zustand/devtools", never], ["zustand/persist", State]]
>(
  devtools(
    persist(
      (set) => ({
        ...storeObject(set),
      }),
      storeConfig
    )
  )
);
