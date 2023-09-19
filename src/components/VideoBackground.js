import useBackgroundTrailer from "../hooks/useBackgroundTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  useBackgroundTrailer(movieId);

  const trailer = useSelector((store) => store.movies?.videoBackground);
  if (!trailer) return;

  return (
    <div className="md:w-full w-screen  aspect-video">
      <iframe
        className="md:w-full w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&iv_load_policy=3`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
