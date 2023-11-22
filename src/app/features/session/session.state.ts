import { Brand, User } from "src/graphql/client";
import { create } from "zustand";

export type SessionState = {
  user: User | null | undefined;
  currentBrand: Brand | undefined;
  sessionId: string | null | undefined;
  setUser: (user: User | undefined) => void;
  selectBrand: (brand: Brand) => void;
  setSessionId: (sessionId: string) => void;
  removeUser: () => void;
};

export const useSessionState = create<SessionState>((set) => ({
  user: undefined,
  sessionId: undefined,
  currentBrand: undefined,
  selectBrand: (brand: Brand) => set({ currentBrand: brand }),
  setSessionId: (sessionId: string) => set({ sessionId }),
  setUser: (user: User | undefined) => set({ user }),
  removeUser: () => set({ user: null }),
}));
