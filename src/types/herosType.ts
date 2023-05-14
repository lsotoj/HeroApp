export type herosType = {
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  id: number;
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  slug: string;
  work: {
    occupation: string;
    base: string;
  };
};
