export default function Footer() {
  return (
    <footer className="bg-neutral-900/60 w-full flex flex-col items-center mt-40">
      <div className="divider"></div>
      <div className="p-6 lg:px-20 w-full max-w-[80rem] grid md:grid-cols-2 lg:gap-8">
        <p className="max-w-full md:max-w-sm text-sm text-center md:text-left text-neutral-400 order-last md:order-first pb-0">
          Crafted with Tailwind and NextJS by Christina Raganit.
        </p>
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
    </footer>
  );
}
