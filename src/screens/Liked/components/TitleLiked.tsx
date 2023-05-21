const TitleLiked = () => {
    return (
        <div className="flex justify-between mb-3">
            <div className="flex  items-center ">
                <img
                    className="rounded-full bg-likedHeartColor p-3 w-10 h-10"
                    src="src\assets\medium-heart\medium-heart.svg"
                    alt="Medium filled heart"
                />
                <span className="text-3xl md:text-xl	 ml-2 font-semibold">
                    Liked
                </span>
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
