import HeaderLink from "./header-link";

export default function Nav() {
  return (
    <header className="nav bg-neutral-950/80 w-full fixed backdrop-blur-3xl">
      <nav className="px-6 lg:px-20 flex flex-row gap-4">
        <HeaderLink text="Home" link=""></HeaderLink>
        <HeaderLink text="Projects" link=""></HeaderLink>
        <HeaderLink text="About" link=""></HeaderLink>
        <HeaderLink text="Resume" link=""></HeaderLink>
      </nav>
      <div className="h-[1px] w-full bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950"></div>
    </header>
  );
}
