import HeaderLink from "./header-link";

export default function Nav() {
  return (
    <header className="nav bg-neutral-950/90 w-full fixed z-10 flex flex-col items-center h-[3rem] backdrop-blur-md border-b border-neutral-800/60">
      <div className="px-6 lg:px-20 w-full h-full flex items-center max-w-[80rem] grid md:grid-cols-2 lg:gap-8">
        <div>
          <img src="../signature.svg" className="h-6"></img>
        </div>
        <div>
          <nav className="flex flex-col md:flex-row items-center h-full w-full gap-4 justify-end pb-6 md:pb-0">
            <a href="/" className="link">
              Home
            </a>
            <a href="" className="link">
              Projects
            </a>
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Awards
            </a>
            <a href="#" className="link">
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
