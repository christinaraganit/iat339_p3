import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Link from "@/components/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@/components/button";
import Experience from "@/components/experience";
import ProjectLink from "@/components/project-link";

export default function Home() {
  return (
    <main id="landing">
      <section className="mt-0 pt-0 flex flex-col">
        <div className="flex flex-col h-full">
          <h1 className="large-title mb-2 lg:mb-0 max-w-4xl">
            I’m Christina Raganit, a product designer who writes code.
          </h1>
          <img
            width={200}
            height={200}
            src="headshot.png"
            alt="Christina Raganit wearing round glasses, her bangs are curled"
            className="h-16 w-16 lg:h-20 lg:w-20 mb-6 lg:mb-8 grayscale rounded-full order-first outline outline-neutral-700 outline-offset-4 outline-1"
          ></img>

          <p className="text-base leading-relaxed lg:text-xl lg:leading-8 text-neutral-400 pb-0">
            Vancouver-based designer with a diploma in computer science and 2+
            years of experience as a UX Designer. 3rd year Interactive Arts and
            Technology student at Simon Fraser University.{" "}
            <span className="text-neutral-200">
              Seeking a full-time internship for Summer 2024.
            </span>
          </p>
        </div>
      </section>
      <section id="projects" className="scroll-mt-40">
        <h2 className="title-1 lg:mb-2">Featured projects</h2>
        <div className="grid gap-4 lg:gap-8">
          <ProjectLink
            title="Chow Now"
            imgLink="/projects/chow-now/chow-now-1600x900.png"
            smImgLink="/projects/chow-now/chow-now-800.png"
            link="projects/chow-now"
            chips={["Interface Design", "Frontend Development", "Hackathon"]}
          >
            Designed and developed a mobile app that offers a discreet way for
            victims of domestic violence to confidentially report incidents of
            abuse to local authorities.
          </ProjectLink>
        </div>
      </section>

      <section className="text-left grid lg:grid-cols-2 gap-16 lg:gap-32">
        <div id="experience" className="scroll-mt-40">
          <h2 className="title-1 lg:mb-2">Experience</h2>
          <div className="flex flex-col gap-5">
            <Experience
              role="UX Designer"
              company="Felix Payment Systems"
              startDate="Sep 2022"
              endDate="Sep 2023"
            >
              Wrote design system documentation and guidelines to be used across
              product, development, and QA teams.
            </Experience>
            <Experience
              role="UX Design Intern"
              company="Felix Payment Systems"
              startDate="May 2022"
              endDate="Sep 2022"
            >
              Redesigned Felix.Portal and Felix.Terminal. Established the design
              system for Felix Payment Systems.
            </Experience>
            <Experience
              role="UI Designer"
              company="Karma Well Health Technologies"
              startDate="Aug 2021"
              endDate="May 2022"
            >
              Established user interface guidelines and wrote frontend code
              using Next.js and SASS.
            </Experience>
            <Experience
              role="QA Tester"
              company="Keywords Studios"
              startDate="May 2020"
              endDate="Sep 2020"
            >
              Performed stability testing for FIFA 21 Pro Clubs. Identified
              gameplay issues and wrote bug reports.
            </Experience>
          </div>
        </div>
        <div id="awards" className="scroll-mt-40">
          <h2 className="title-1 lg:mb-2">Awards</h2>
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

      <section id="testimonials" className="scroll-mt-40">
        <h2 className="title-1 lg:mb-2">Testimonials</h2>
        <div
          id="testimonials-container"
          className="grid md:grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8"
        >
          <div className="testimonial-column">
            <Testimonial
              firstName="Devon"
              lastName="Friend"
              title="Student at University of British Columbia"
              imgLink="devon-friend.jpg"
            >
              What does it take to bring your platform to the next level by
              leveraging exceptional UI/UX design? Whatever the answer might be,
              Christina will certainly have one for you.
            </Testimonial>
            <Testimonial
              firstName="Ray"
              lastName="Gong"
              title="Software Developer Intern at Blackberry"
              imgLink="ray-gong-100x100.png"
            >
              Christina is a very talented designer with a vast skillset. She
              excels at rapidly producing prototypes to present her ideas, both
              in design platforms such as Figma or in code. I am confident that
              Christina will be a valuable member to any team.
            </Testimonial>
          </div>
          <div className="testimonial-column">
            <Testimonial
              firstName="Eric"
              lastName="Dam"
              title="Software Developer at Harris Computers"
              imgLink="eric-dam.jpg"
            >
              Christina is a designer-developer powerhouse. She designed and
              developed my portfolio website, and I can attest to her endless
              creativity and technical skills.
            </Testimonial>
            <Testimonial
              firstName="Jason"
              lastName="Lee"
              imgLink="jason-lee.jpg"
              title="Team Lead at Felix Payment Systems"
            >
              Christina has always brought a new perspective to the product team
              with her designs. She has always gone out of her way to research
              new ways to accomodate both the developers and the stakeholder
              requirements.
            </Testimonial>
          </div>
          <div className="testimonial-column">
            <Testimonial
              imgLink="kurt-milan.jpg"
              firstName="Kurt"
              lastName="Milan"
              title="Team Lead at Felix Payment Systems"
            >
              Christina is an excellent communicator and collaborator. She has a
              proven track record of effectively communicating design concepts
              to both the technical development team and non-technical
              stakeholders, fostering a culture of collaboration within the
              team.
            </Testimonial>
            <Testimonial
              imgLink="simon-wong-chung.jpg"
              firstName="Simon"
              lastName="Wong Chung"
              title="Student at Simon Fraser University"
            >
              One of Christina’s standout quality is her meticulous attention to
              detail. Every element of her designs, from layout and typography
              to interactions and microinteractions, is meticulously crafted.
            </Testimonial>
          </div>
        </div>
      </section>
    </main>
  );
}
