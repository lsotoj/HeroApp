const HeroCard = () => {
  return (
    <div className=" cursor-pointer w-96 h-64 bg-black  rounded-lg flex p-6">
      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero Image"
        />
        <img
          className="rounded-full bg-likedHeartColor p-3 w-12 h-12 absolute -right-2 -bottom-1"
          src="src\assets\medium-heart\medium-heart.svg"
          alt="Medium filled heart"
        />
      </div>
      <div className="p-3">
        <p className="text-2xl font-bold">A-Bomb</p>
        <p className="font-light">Real Name: Richard Milhouse Jones</p>
        <div>
          <span className="text-lg font-semibold">8.4</span>
          <span className=" font-light"> / 10</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
