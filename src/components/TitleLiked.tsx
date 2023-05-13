const TitleLiked = () => {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <img
          className="rounded-full bg-likedHeartColor p-3 w-10 h-10"
          src="src\assets\medium-heart\medium-heart.svg"
          alt="Medium filled heart"
        />
        <span className="text-3xl ml-2">Liked</span>
      </div>
      <img
        className="cursor-pointer bg-bgRowColor rounded-full w-10 h-10"
        src="src\assets\arrow-up\arrow-up.svg"
        alt="Arrow up"
      />
    </div>
  );
};

export default TitleLiked;
