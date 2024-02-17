import { useState } from "react";
import opinions from "../../constants/opinions";
import TextOpinion from "./TextOpinion";
import VideoOpinion from "./VideoOpinion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const OpinionList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextOpinion = () => {
    if (currentIndex >= opinions.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevOpinion = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(opinions.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="flex xs:mt-4 lg:mt-20 w-full p-6 overflow-x-hidden">
        {opinions.map((opinion, index) => {
          if (opinion.type === "text") {
            return (
              <TextOpinion
                key={index}
                image={opinion.image}
                author={opinion.author}
                company={opinion.company}
                content={opinion.content}
                index={index}
                currentIndex={currentIndex}
              />
            );
          } else if (opinion.type === "video") {
            return (
              <VideoOpinion
                key={index}
                videoURL={opinion.videoURL}
                title={opinion.title}
                index={index}
                currentIndex={currentIndex}
              />
            );
          }
        })}
      </div>
      <button
        onClick={prevOpinion}
        className="text-greencell text-2xl p-2 bg-black rounded-full border-2 border-greencell absolute xs:left-0 lg:-left-8 opacity-50 hover:opacity-100 transition-all duration-300"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextOpinion}
        className="text-greencell text-2xl p-2 bg-black rounded-full border-2 border-greencell absolute xs:right-0 lg:-right-8 opacity-50 hover:opacity-100 transition-all duration-300"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default OpinionList;
