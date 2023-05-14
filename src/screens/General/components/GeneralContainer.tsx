import { useContext, useEffect } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import HeroCard from "../../../components/HeroCard";

import { heroType, herosType } from "../../../types/herosType";
import { HerosContext } from "../../../context/HerosContext";
const URL = "https://akabab.github.io/superhero-api/api/all.json";

const GeneralContainer = () => {
  const { state, data } = useFetch<herosType[]>(URL);
  const { herosState, loadHeros } = useContext(HerosContext);

  useEffect(() => {
    let favoriteAddedData = data?.map((element: herosType) => {
      if (element.id < 6) {
        let newObj: heroType = { ...element, favorite: true };
        return newObj;
      }
      let newObj: heroType = { ...element, favorite: false };
      return newObj;
    });
    loadHeros(favoriteAddedData as heroType[]);
    console.log("favorited==>", favoriteAddedData);
  }, []);
  console.log("HerosState=>", herosState);

  if (state === "loading" || state === "idle") {
    return <div>Loading</div>;
  }
  if (state === "error" || !data) {
    return <div>Error</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg max-h-screen-lg">
      {data?.map((hero: herosType) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default GeneralContainer;
