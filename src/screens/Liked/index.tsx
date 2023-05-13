import LikedContainer from "../../components/LikedContainer";
import TitleLiked from "../../components/TitleLiked";

const Liked = () => {
  return (
    <div className="p-3 rounded-lg border border-borderLiked">
      <TitleLiked />

      <LikedContainer />
    </div>
  );
};

export default Liked;
