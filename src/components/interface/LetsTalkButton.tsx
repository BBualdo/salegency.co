const LetsTalkButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href="/apply"
      className={`border-greencell font-medium border-2 rounded-md hover:bg-greencell transition-all uppercase duration-200 text-white hover:text-black xs:max-lg:text-sm px-8 py-2 ${className}`}
    >
      {children}
    </a>
  );
};

export default LetsTalkButton;
