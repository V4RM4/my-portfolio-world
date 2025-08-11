import { create } from "zustand";

export const useGameStore = create((set) => ({
  characterState: "Idle",
  setCharacter: (characterState) => set({ characterState }),
}));
