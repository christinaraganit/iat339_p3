import Image from "next/image";
import Testimonial from "@/components/testimonial";
import Link from "@/components/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@/components/button";
import ProjectLink from "@/components/project-link";

export default function Home() {
  return (
    <main id="landing">
      <header className="grid text-left align-bottom lg:grid-cols-2 lg:gap-16">
        <h1 className="large-title">
          I'm Christina Raganit, a user experience designer who writes code and
          excels in designing interactions.
        </h1>
        <div className="flex flex-col justify-baseline hidden md:flex">
          <p className="lead pb-4 lg:max-w-xl">
            I have two years of experience in leveraging my skills in visual
            design and frontend development to collaborate with teams in
            crafting cross-platform products.
          </p>
          <p className="lead-2 lg:max-w-xl text-neutral-400 pb-6">
            I’m currently pursuing a BSci in Interactive Arts and Technology at{" "}
            <Link
              text="Simon Fraser University"
              link="https://www.sfu.ca/siat.html"
            ></Link>{" "}
            and leading the design team as the Director of Design at{" "}
            <Link text="SFU Surge" link="https://sfusurge.com/"></Link>.
          </p>
          <img
            src="signature.svg"
            className="w-3/4 lg:w-1/2 max-w-[16rem]"
          ></img>
        </div>
      </header>
      <section id="projects">
        <h2 className="headline pb-1">Projects</h2>
        <p className="title-1 mb-2 lg:mb-4">
          I transform concepts into intuitive and visually compelling
          interfaces. Here's some of my projects to prove it.
        </p>
        <ProjectLink
          title="Cheeky's Cannabis Merchants"
          imgLink="cheekys.png"
          link="projects/cheekys"
          chips={["Interface Design", "Interaction Design"]}
        >
          Offering novice online cannabis shoppers at Cheeky’s Cannabis
          Merchants a digital shopping journey that's as approachable and
          inviting as the in-store experience.
        </ProjectLink>
      </section>

      <section id="testimonials">
        <h2 className="headline pb-1">Testimonials</h2>
        <p className="title-1 mb-2 lg:mb-4">
          I collaborate seamlessly with design and development teams to{" "}
          <a href="/awards">win hackathons</a> and ship projects. Here's what
          some of my teammates are saying about me.
        </p>
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
