import { useContext, useEffect } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import HeroCard from "../../../components/HeroCard";

import { herosType } from "../../../types/herosType";
import { HeroContext } from "../../../context/HeroContext";
const URL = "https://akabab.github.io/superhero-api/api/all.json";

const GeneralContainer = () => {
  const { state, data } = useFetch<herosType[]>(URL);
  const { heroState, loadHeros } = useContext(HeroContext);

  useEffect(() => {
    loadHeros(data as herosType[]);
  }, []);

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
