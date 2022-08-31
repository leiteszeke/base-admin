import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import createVanilla from "zustand/vanilla";
import { State, Set, GenericState } from "./store.types";
import { layoutState } from "./layout";
import { usersInitialState, userStore } from "./users";

const Storage = localStorage;

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
  name: process.env.REACT_APP_STORE_KEY ?? "",
  getStorage: () => Storage,
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

export const AdminStore = createVanilla<
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
