import { createContext } from "react";
import { HerosContextProps } from "../types/herosType";

export const HerosContext = createContext<HerosContextProps>(
  {} as HerosContextProps
);
