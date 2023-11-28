import Button from "@/components/button";
import Experience from "@/components/experience";
import Link from "@/components/link";

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
          <p className="text-neutral-400">
            I write code, design visually compelling interfaces, and build
            design systems.
          </p>
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
            Interactive Arts and Technology program at Simon Fraser University,
            where I am currently sharpening my skills in interface design and
            leading the design team at{" "}
            <Link text="SFU Surge" link="https://sfusurge.com/"></Link>.
          </p>
          <p className="text-neutral-400 pb-2">
            When I am not tinkering away on Figma, I am...
          </p>
          <ul className="text-neutral-400 list-disc list-inside leading-relaxed">
            <li>Eating the free pizza at a hackathon</li>
            <li>Losing all my League of Legends games</li>
            <li>Jamming to my favorite blink-182 songs</li>
            <li>Reading stories about magic and dragons</li>
          </ul>
        </section>
      </section>
      <section className="text-left grid lg:grid-cols-2 gap-16 lg:gap-32">
        <div>
          <h2 className="title-2 mb-1">Experience</h2>
          <div className="flex flex-col gap-5">
            <Experience
              role="UX Designer"
              company="Felix Payment Systems"
              startDate="Sep 2022"
              endDate="Sep 2023"
              skills={["Figma", "Adobe XD", "JIRA", "Confluence"]}
            >
              Created and maintained the company design system. Wrote
              documentation and created component libraries to enhance
              efficiency in design, development, and quality assurance
              workflows.
            </Experience>
            <Experience
              role="UX Design Intern"
              company="Felix Payment Systems"
              startDate="May 2022"
              endDate="Sep 2022"
              skills={[
                "Adobe XD",
                "Adobe Photoshop",
                "Adobe Animate",
                "React",
                "HTML",
                "CSS",
              ]}
            >
              Produced wireframes, prototypes, and high-fidelity mockups for
              Felix.Terminal and Felix.Portal.
            </Experience>
            <Experience
              role="UI Designer"
              company="Karma Well Health Technologies"
              startDate="Aug 2021"
              endDate="May 2022"
              skills={["Next.js", "SASS", "Figma", "Adobe Illustrator"]}
            >
              Established user interface guidelines and developed and maintained
              frontend code for a web application using Next.js and SASS.
            </Experience>
          </div>
        </div>
        <div>
          <h2 className="title-2 mb-1">Awards</h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col pt-0.5 gap-1.5 items-center w-8">
                <h3 className="text-sm text-neutral-500">2023</h3>
                <div className="w-[0.063rem] block rounded-full h-full bg-neutral-800"></div>
              </div>
              <ul className="list-none text-neutral-400 flex flex-col gap-2.5">
                <li className="award">
                  Nancy Morrison and Fraser Green Special Abilities Award
                </li>
                <li>
                  <span className="award">Undergraduate Open Scholarship</span>,
                  Simon Fraser University
                </li>
                <li>
                  <span className="award">2nd Place</span>, StormHacks
                </li>
                <li>
                  <span className="award">Best UI/UX Design</span>, StormHacks
                </li>
                <li>
                  <span className="award">1st Place</span>, Eunoia UX Hackathon
                </li>
                <li>
                  <span className="award">1st Place</span>, cmd-f
                </li>
                <li>
                  <span className="award">Best Design</span>, cmd-f
                </li>
                <li>
                  <span className="award">Judges' Choice Award</span>, RootHacks
                </li>
                <li>
                  <span className="award">2nd Place</span>, HackED
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col pt-0.5 gap-1.5 items-center w-8">
                <h3 className="text-sm text-neutral-500">2021</h3>
                <div className="w-[0.063rem] block rounded-full h-full bg-neutral-800"></div>
              </div>
              <ul className="list-none text-neutral-400 flex flex-col gap-2.5">
                <li>
                  <span className="award">
                    Computer Systems Award in Tech Entrepreneurship
                  </span>
                  , British Columbia Institute of Technology
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col pt-0.5 gap-1.5 items-center w-8">
                <h3 className="text-sm text-neutral-500">2019</h3>
                <div className="w-[0.063rem] block rounded-full h-full bg-neutral-800"></div>
              </div>
              <ul className="list-none text-neutral-400 flex flex-col gap-2.5">
                <li>
                  <span className="award">President's Entrance Award</span>,
                  British Columbia Institute of Technology
                </li>
                <li className="award">BC Excellence Award</li>
                <li className="award">District Authority Award</li>
              </ul>
            </div>
          </div>
        </div>
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
