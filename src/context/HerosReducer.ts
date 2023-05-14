import { HeroActions, heroType } from "../types/herosType";

export const herosReducer = (
  state: heroType[],
  action: HeroActions
): heroType[] => {
  switch (action.type) {
    case "addHero":
      return [...state, action.payload];
    case "loadHeros":
      console.log("Loading data ...", action.payload.data);

      return action.payload.data;

    default:
      return state;
  }
};
