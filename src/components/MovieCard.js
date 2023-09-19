import { IMG_CDN } from "../utils/util";

const MovieCard = ({ postrePath }) => {
  return (
    <div className="w-36 md:w-48 m-1 rounded-sm cursor-pointer ">
      <img alt="movie card" src={IMG_CDN + postrePath} />
    </div>
  );
};

export default MovieCard;
