import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" bg-gradient-to-r from-slate-800 md:p-16 p-6  w-full aspect-video absolute">
      <div className="md:mt-96 mt-10">
        <h3 className="text-white font-bold text-xl md:text-3xl pt-4 pb-1 md:pb-9 uppercase">
          {title}
        </h3>
        <p className="w-1/4 text-justify text-white  text-md pb-9 font-serif hidden md:inline-block">
          {overview}
        </p>
        <div className="md:py-6 py-2 flex items-center">
          <button className="md:px-10 px-3 py-2 md:py-4 text-sm bg-slate-300 rounded-md flex items-center">
            <FontAwesomeIcon icon={faPlay} className="me-2" />
            Play
          </button>
          <button className="md:px-10 px-3 py-2 md:py-4 text-sm bg-slate-300 ms-3 rounded-md flex items-center">
            <FontAwesomeIcon icon={faInfo} className="me-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
