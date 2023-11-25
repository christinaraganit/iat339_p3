import HeaderLink from "./header-link";

export default function Nav() {
  return (
    <header className="nav bg-neutral-800/[72%] fixed mt-6 backdrop-blur-md z-[100] rounded-full">
      <div className="h-[1px] w-full bg-gradient-to-r from-neutral-950/0 via-neutral-600 to-neutral-950/0"></div>
      <nav className="px-4 flex flex-row justify-center">
        <HeaderLink text="Home" link="/"></HeaderLink>
        <HeaderLink text="About" link=""></HeaderLink>
        <HeaderLink text="Projects" link=""></HeaderLink>
        <HeaderLink text="Awards" link=""></HeaderLink>
        <HeaderLink text="Resume" link=""></HeaderLink>
      </nav>
    </header>
  );
}
