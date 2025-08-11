import { create } from "zustand";

export const useGameStore = create((set) => ({
  characterState: "Idle",
  setCharacter: (characterState) => set({ characterState }),

  activeMenuItem: null,
  showMenuText: false,

  // Actions for menu interactions
  setActiveMenuItem: (menuItem) => {
    set({
      activeMenuItem: menuItem,
      showMenuText: !!menuItem,
    });
  },

  clearActiveMenuItem: () => {
    set({
      activeMenuItem: null,
      showMenuText: false,
    });
  },
}));
