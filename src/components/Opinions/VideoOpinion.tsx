import clsx from "clsx";

const VideoOpinion = ({
  videoURL,
  title,
  index,
  currentIndex,
}: {
  videoURL?: string;
  title?: string;
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
      <iframe
        title={title}
        src={videoURL}
        allow="autoplay; fullscreen; picture-in-picture"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoOpinion;
