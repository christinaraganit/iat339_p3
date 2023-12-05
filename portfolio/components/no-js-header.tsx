import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export default function NoJSHeader() {
  return (
    <header className="sm:hidden flex flex-col w-full p-6 pb-0 gap-4">
      <div className="flex justify-between w-full items-center">
        <a
          href="/"
          aria-label="Home page"
          className="hover:scale-150 focus:scale-150 transition-transform"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.664 15.735c.245.173.537.265.836.264v-.004a1.442 1.442 0 0 0 1.327-.872l.613-1.864a2.872 2.872 0 0 1 1.817-1.812l1.778-.578a1.443 1.443 0 0 0-.052-2.74l-1.755-.57a2.876 2.876 0 0 1-1.822-1.823l-.578-1.777a1.446 1.446 0 0 0-2.732.022l-.583 1.792a2.877 2.877 0 0 1-1.77 1.786l-1.777.571a1.444 1.444 0 0 0 .017 2.734l1.754.569a2.887 2.887 0 0 1 1.822 1.826l.578 1.775c.099.283.283.528.527.7Zm7.667 5.047a1.123 1.123 0 0 1-.41-.549l-.328-1.007a1.293 1.293 0 0 0-.821-.823l-.991-.323A1.148 1.148 0 0 1 13 16.997a1.143 1.143 0 0 1 .771-1.08l1.006-.326a1.3 1.3 0 0 0 .8-.819l.324-.992a1.143 1.143 0 0 1 2.157-.021l.329 1.014a1.3 1.3 0 0 0 .82.816l.992.323a1.141 1.141 0 0 1 .039 2.165l-1.014.329a1.3 1.3 0 0 0-.818.822l-.322.989c-.078.23-.226.43-.425.57a1.14 1.14 0 0 1-1.328-.005Z"
              fill="#ffffff"
            />
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/1XdjiOlwxWced9ZCvzwyLcPiZANGwptAV/view"
          className="block h-fit p-[0.0625rem] pb-0 bg-gradient-to-r from-neutral-700/30 via-neutral-600 to-neutral-700/30 rounded-full group/link
          hover:from-neutral-700/30 hover:via-neutral-400 hover:to-neutral-700/30
      focus:from-neutral-700/30 focus:via-neutral-400 focus:to-neutral-700/30 focus:scale-105 transition-transform"
        >
          <div className="px-4 py-1.5 flex gap-1.5 items-center font-medium text-sm rounded-full bg-neutral-800/60 background-blur">
            Resume
            <ArrowLongRightIcon
              width={20}
              height={20}
              className="group-hover/link:translate-x-1 group-focus/link:translate-x-1 transition-transform text-neutral-50"
            ></ArrowLongRightIcon>
          </div>
        </a>
      </div>

      <div className="h-[0.0625rem] w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"></div>
      <nav className="text-sm font-medium text-neutral-400 flex gap-4">
        <a
          href="/"
          className="transition-colors hover:text-neutral-200 focus:text-neutral-200"
        >
          Home
        </a>
        <a
          href="/about"
          className="transition-colors hover:text-neutral-200 focus:text-neutral-200"
        >
          About
        </a>
        <a
          href="/#projects"
          className="transition-colors hover:text-neutral-200 focus:text-neutral-200"
        >
          Projects
        </a>
      </nav>
      <div className="h-[0.0625rem] w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"></div>
    </header>
  );
}
