import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Link from "@/components/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@/components/button";
import ProjectLink from "@/components/project-link";

export default function Home() {
  return (
    <main id="landing">
      <header className="max-h-screen h-screen lg:h-[calc(100vh-18rem)] mt-0 pt-0 flex flex-col items-center justify-center justify-between">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="large-title mb-2">
            I'm Christina Raganit, a user experience designer who writes code
            and creates design systems.
          </h1>
          <p className="lead text-neutral-400 mb-4">
            Pursuing a BSci in Interactive Arts and Technology at{" "}
            <Link text="Simon Fraser University" link=""></Link> and leading the
            design team at <Link text="SFU Surge" link=""></Link>. Currently
            seeking a UX Design internship for Summer 2024.
          </p>

          <Button text="View my projects" link="#projects"></Button>
        </div>
      </header>
      <section id="projects" className="scroll-mt-40">
        <h2 className="title-1 mb-2.5">Projects</h2>
        <div className="grid gap-4 lg:gap-8">
          <ProjectLink
            title="Cheeky's Cannabis Merchants"
            imgLink="cheekys.png"
            link="projects/cheekys"
            chips={["Interface Designer", "Interaction Designer"]}
          >
            Offering novice online cannabis shoppers at Cheeky’s Cannabis
            Merchants a digital shopping journey that's as approachable and
            inviting as the in-store experience.
          </ProjectLink>
          <ProjectLink
            title="Chow Now"
            imgLink="cheekys.png"
            link="projects/cheekys"
            chips={["Interface Designer", "Frontend Developer"]}
          >
            Offering novice online cannabis shoppers at Cheeky’s Cannabis
            Merchants a digital shopping journey that's as approachable and
            inviting as the in-store experience.
          </ProjectLink>
        </div>
      </section>

      <section id="testimonials">
        <h2 className="title-1 mb-2">Testimonials</h2>
        <div
          id="testimonials-container"
          className="grid md:grid-cols-3 gap-4 lg:gap-6"
        >
          <div className="testimonial-column">
            <Testimonial
              firstName="Devon"
              lastName="Friend"
              title="Student at University of British Columbia"
            >
              What does it take to bring your platform to the next level by
              leveraging exceptional UI/UX design? Whatever the answer might be,
              Christina will certainly have one for you.
            </Testimonial>
            <Testimonial
              firstName="Ray"
              lastName="Gong"
              title="Software Developer Intern at Blackberry"
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
            >
              Christina is among the best UI/UX designers I know. Her designs
              are very intuitive, visually pleasing and make sense.
            </Testimonial>
            <Testimonial
              firstName="Jason"
              lastName="Lee"
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
              firstName="Simon"
              lastName="Wong"
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
