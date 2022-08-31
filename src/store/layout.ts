import { Set, LayoutState } from "./store.types";

export const layoutInitialState = {
  visibleAside: false,
  visibleSidebar: true,
};

export const layoutState = (set: Set<LayoutState>): LayoutState => ({
  ...layoutInitialState,

  toggleSidebar: (newState?: boolean) =>
    set((state) => ({
      ...state,
      visibleSidebar: newState ?? !state.visibleSidebar,
    })),
  toggleAside: (newState?: boolean) =>
    set((state) => ({
      ...state,
      visibleAside: newState ?? !state.visibleAside,
    })),
});
