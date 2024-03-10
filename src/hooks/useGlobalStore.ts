import { UserInformation } from "../types";
import { create } from "zustand";

export type GlobalStoreProps = {
  // Define your props here
  user?: UserInformation;
  setGlobalState: (fieldName: string, payload: unknown) => void;
};

export const useGlobalStore = create<GlobalStoreProps>((set) => ({
  user: undefined,
  setGlobalState: (fieldName: string, payload: unknown) => {
    set(() => {
      return { [fieldName]: payload };
    });
  },
}));
