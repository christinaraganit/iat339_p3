export default function Footer() {
  return (
    <footer className="bg-neutral-900/18 w-full flex flex-col items-center">
      <div className="h-[1px] w-full bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950"></div>
      <div className="p-6 lg:px-20 max-w-[100rem] grid lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="max-w-xl text-sm text-neutral-400">
            This website is powered by Chatime's royal milk tea with pearls,
            less ice, 120% sugar.
          </p>
        </div>
        <div>
          <nav>
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Resume</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
