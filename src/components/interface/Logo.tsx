const Logo = ({ href, className }: { href: string; className: string }) => {
  return (
    <a href={href} className={className}>
      <img
        src="/img/logo-light.png"
        alt="Salegency Logo"
        className="cursor-pointer"
      />
    </a>
  );
};

export default Logo;
