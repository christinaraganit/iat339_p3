import Button from "@/components/button";
import Experience from "@/components/experience";
import Link from "@/components/link";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <main id="about" className="">
      <section className="grid lg:grid-cols-2 text-left gap-16 lg:gap-32">
        <section>
          <img
            src="placeholder.png"
            className="w-16 lg:w-20 aspect-square rounded-full mb-6 lg:mb-8 outline outline-1 outline-neutral-700 outline-offset-4 shadow-neutral-800 shadow-lg"
          ></img>
          <h1 className="large-title mb-1.5 lg:mb-0 lg:pb-5 block">
            Christina Raganit
          </h1>
          <p className="title-4">User Experience Designer</p>
          <p className="text-neutral-400 mb-4">
            I write code, design visually compelling interfaces, and build
            design systems.
          </p>

          <div className="flex flex-row gap-4">
            <a href="" className="icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
            <a href="" className="icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                />
              </svg>
            </a>
            <a href="" className="icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853Z"
                />
              </svg>
            </a>
            <a href="" className="icon-link">
              <EnvelopeOpenIcon width={24} height={24}></EnvelopeOpenIcon>
            </a>
          </div>
        </section>
        <section className="hello">
          <h2 className="title-2 mb-1">My story</h2>
          <p className="title-4 mb-1">
            I fell in love with design in the lecture halls of my computer
            science classes at{" "}
            <abbr title="British Columbia Institute of Technology">BCIT</abbr>.
          </p>
          <p className="text-neutral-400 mb-0.5">
            But as much as I liked resolving merge conflicts and writing proof
            statements, I liked designing interfaces more. After graduating with
            my diploma in Computer Systems Technology, I enrolled into the
            Interactive Arts and Technology program at{" "}
            <Link
              text="Simon Fraser University"
              link="https://www.sfu.ca/siat.html"
            ></Link>
            , where I am currently sharpening my skills in interface design and
            leading the design team at{" "}
            <Link text="SFU Surge" link="https://sfusurge.com/"></Link>.
          </p>
          <p className="text-neutral-400 pb-2">
            When I am not tinkering away on Figma, I am...
          </p>
          <ul className="text-neutral-400 list-disc list-inside leading-relaxed">
            <li className="text-neutral-400">
              Eating the free pizza at a hackathon
            </li>
            <li className="text-neutral-400">
              Losing all my League of Legends games
            </li>
            <li className="text-neutral-400">
              Jamming to my favorite blink-182 songs
            </li>
            <li className="text-neutral-400">
              Reading stories about magic and dragons
            </li>
          </ul>
        </section>
      </section>

      <section>
        <h2 className="title-1 max-w-4xl mb-4">
          Do you want to work on something cool with me or do you simply just
          want to say hi?
        </h2>
        <div className="flex justify-center items-center w-full flex-wrap gap-4">
          <Button link="" text="Connect on LinkedIn"></Button>
          <Button link="" text="Send me an email"></Button>
        </div>
      </section>
    </main>
  );
}
