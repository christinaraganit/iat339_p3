import HeaderLink from "./header-link";

export default function Nav() {
  return (
    <header className="nav bg-neutral-800/60 fixed mt-6 backdrop-blur z-[100] rounded-full">
      <div className="h-[1px] w-full bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950"></div>
      <nav className="px-4 flex flex-row justify-center">
        <HeaderLink text="Home" link=""></HeaderLink>
        <HeaderLink text="About" link=""></HeaderLink>
        <HeaderLink text="Projects" link=""></HeaderLink>
        <HeaderLink text="Awards" link=""></HeaderLink>
        <HeaderLink text="Resume" link=""></HeaderLink>
      </nav>
    </header>
  );
}
