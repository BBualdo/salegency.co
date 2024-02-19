import clsx from "clsx";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TextOpinion = ({
  image,
  author,
  company,
  content,
  index,
  currentIndex,
}: {
  image?: string;
  author?: string;
  company?: string;
  content?: string;
  index: number;
  currentIndex: number;
}) => {
  const translation = currentIndex * 100;

  return (
    <div
      style={{ translate: -translation + "%" }}
      className={clsx(
        "bg-zinc-900 rounded-lg xs:min-w-full lg:min-w-[33%] lg:min-h-[460px] p-4 flex flex-col items-center gap-4 transition-all duration-300 lg:translate-x-full",
        {
          "opacity-50 scale-75": index !== currentIndex,
          "opacity-100 scale-100 hover:scale-105": index === currentIndex,
        }
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src={image}
          alt={`${author}`}
          className="rounded-full lg:w-[100px] lg:h-[100px] xs:max-lg:w-[60px] xs:max-lg:h-[60px] object-cover object-top"
        />
        <div className="flex flex-col items-center">
          <p className="text-lg">{author}</p>
          <p className="text-sm text-white/50">{company}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FaQuoteLeft className="text-greencell inline" />
        <p className="text-center xs:text-md lg:text-lg">{content}</p>
        <FaQuoteRight className="text-greencell inline" />
      </div>
    </div>
  );
};

export default TextOpinion;
