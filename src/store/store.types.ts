import { StoreApi } from "zustand";

import { User, UserWithToken } from "src/types";

export type GenericState = {
  resetStore: () => void;
};

export type UserState = {
  user: UserWithToken | null;
  users: User[];

  setUser: (user: UserWithToken | null) => void;
  setUsers: (user: User[]) => void;
};

export type LayoutState = {
  visibleAside: boolean;
  visibleSidebar: boolean;

  toggleAside: (newState?: boolean) => void;
  toggleSidebar: (newState?: boolean) => void;
};

export type State = UserState & LayoutState & GenericState;

export type Set<T extends object = State> = StoreApi<T>["setState"];
