import { Children, createContext } from "react";

export const HeroContext = createContext({});

interface ChildrenProp {
  children: JSX.Element | JSX.Element[];
}

export const HeroProvider = ({ children }: ChildrenProp) => {
  return (
    <HeroContext.Provider
      value={{
        name: "nombre hero hola",
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};
