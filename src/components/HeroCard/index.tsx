import { herosType } from "../../types/herosType";

const HeroCard = (data: herosType) => {
  const powerstatsValues = Object.values(data.powerstats);
  const score = Math.trunc(
    powerstatsValues.reduce((acc, current) => acc + current, 0) /
      powerstatsValues.length
  );

  return (
    <div
      className=" cursor-pointer w-80 h-48  rounded-lg flex p-4 bg-bgRowColor"
      // style={{
      //   backgroundImage:
      //     "url('https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      // }}
    >
      <div className="relative w-1/2">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images.sm}
          alt="Hero Image"
        />
        <img
          className="rounded-full bg-likedHeartColor p-3 w-12 h-12 absolute -right-2 -bottom-1"
          src="src\assets\medium-heart\medium-heart.svg"
          alt="Medium filled heart"
        />
      </div>
      <div className="pl-3">
        <p className="text-2xl font-bold">{data.name}</p>
        <p className="font-light">{`Real Name: ${data.biography.fullName}`}</p>
        <div>
          <span className="text-lg font-semibold">{score}</span>
          <span className=" font-light"> / 10</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
