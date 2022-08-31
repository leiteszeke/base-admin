import { User, UserWithToken } from "src/types";

import { Set, UserState } from "./store.types";

export const usersInitialState = {
  user: null,
  users: [],
};

export const userStore = (set: Set<UserState>): UserState => ({
  ...usersInitialState,

  setUser: (user: UserWithToken | null) => set((state) => ({ ...state, user })),
  setUsers: (users: User[]) => set((state) => ({ ...state, users })),
});
