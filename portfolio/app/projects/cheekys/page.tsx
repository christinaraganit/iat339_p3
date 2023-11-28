export default function Cheekys() {
  return (
    <main className="project">
      <section
        id="table-of-contents"
        className="fixed m-0 p-0 h-[80vh] top-0 right-0 w-[15%] hidden"
      >
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <a href="#overview" className="document-link" tabIndex={0}>
            Overview
          </a>
          <a href="#solution" className="document-link" tabIndex={0}>
            Intervention
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center pb-0">
        <h1 className="large-title pb-4">Cheeky's Cannabis Merchants</h1>
        <p className="lead text-neutral-400 pb-0">
          Offering novice online cannabis shoppers at Cheeky’s Cannabis
          Merchants a digital shopping journey that's as approachable and
          inviting as the in-store experience.
        </p>
        <img
          src="/projects/cheekys/cheekys-desktop.png"
          className="mt-12"
        ></img>
      </section>

      <section id="overview" className="text-left">
        <h2 className="title-4">Overview</h2>

        <div className="grid gap-5 lg:gap-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="headline pb-1">Project goal</h3>
            <p className="pb-5">
              During the course of this 4-week project, our team was tasked with
              discovering an opportunity for an intervention for a company of
              our choice. The intervention must be supported with evidence
              demonstrating that it fulfills a user need and adds value for the
              business.
            </p>
            <h3 className="headline pb-1">Client</h3>
            <p>
              Cheeky’s Cannabis Merchants is a dispensary with retail stores in
              Maple Ridge and Kitsilano. Their mission is to eliminate
              cannabis-related stigma and offer an accessible and welcoming
              shopping experience for their customers.
            </p>
          </div>
          <div className="grid lg:col-span-2">
            <div>
              <h3 className="headline">My roles</h3>
              <p>Interaction Designer, User Interface Designer</p>
            </div>
            <div>
              <h3 className="headline">Team</h3>
              <p>Christina, Michael, Madeline, Simon, and Bri</p>
            </div>
            <div>
              <h3 className="headline">Course</h3>
              <p>IAT 235 – Information Design</p>
            </div>
            <div>
              <h3 className="headline">Project</h3>
              <p>February 7–8, 2023 (4 weeks)</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="problem-statement" className="text-left">
        <h2 className="headline pb-1">Problem statement</h2>{" "}
        <p className="title-2">
          Budtenders can help novice cannabis consumers feel more confident
          about their purchasing decisions in-store, but what about online
          shoppers?
        </p>
        <div className="grid lg:grid-cols-2 lg:gap-8">
          <p>
            From the secondary research we performed, we learned that novice
            cannabis consumers often felt lost in the absence of guidance from
            their doctors, but when they visited a dispensary, they were able to
            receive help from the staff.
          </p>
          <p>
            Online shoppers would not have this experience. Further research
            revealed that 67% of Ontarians believe retailers should educate
            consumers on local cannabis, both in-store <em>and</em> online,
            which leads us to our intervention.
          </p>
        </div>
      </section>
      <div className="divider"></div>
      <section className="text-left">
        <h2 className="headline pb-1">Framing</h2>
        <p className="title-1">
          How might we provide <em>novice cannabis consumers</em> that prefer to
          shop online with a digital shopping experience that is as equally
          <em>accessible and inviting</em> as it is for those who shop in-store?
        </p>
      </section>

      <div className="divider"></div>

      <section id="solution" className="text-left">
        <h2 className="headline pb-1">Solution</h2>
        <p className="title-3">Everything you need to know about cannabis</p>
        <p>
          This educational platform provides novice cannabis consumers the
          ability to learn about cannabis by addressing common questions about
          cannabis use.
        </p>
        <img src="/projects/cheekys/learn.png" className="pt-2"></img>
      </section>
      <section className="text-left">
        <p className="title-3">Connecting consumers with budtenders</p>
        <p>
          This messaging platform provides the consumer with options of chatting
          virtually with an AI chatbot or an employee, or booking an in-store
          appointment with an employee to learn more about cannabis.
        </p>
        <img src="/projects/cheekys/cheekys-desktop.png" className="pt-2"></img>
      </section>
      <section className="text-left">
        <p className="title-3">Providing additional information on hover</p>
        <p>
          This redesigned product page provides the consumer with information
          such as a recommended usage and dosage as well as the side effects of
          the product.
        </p>
        <img src="/projects/cheekys/product.png" className="pt-2"></img>
      </section>

      <div className="divider"></div>

      <section id="contributions" className="text-left">
        <h2 className="headline pb-1">Contributions</h2>
        <p className="title-2">I worked together with content strategists.</p>
        <p>
          This redesigned product page provides the consumer with information
          such as a recommended usage and dosage as well as the side effects of
          the product.
        </p>
      </section>

      <div className="divider"></div>

      <section id="reflection" className="text-left">
        <h2 className="headline pb-1">Reflection</h2>
        <p className="title-2">I got a taste of design thinking.</p>
        <p>
          This redesigned product page provides the consumer with information
          such as a recommended usage and dosage as well as the side effects of
          the product.
        </p>
      </section>
    </main>
  );
}
