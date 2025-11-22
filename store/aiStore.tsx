import { create } from "zustand";

export const useAIStore = create((set) => ({
  result: "",                     // global state
  setResult: (value) => set({ result: value }), // function to update it
}));
