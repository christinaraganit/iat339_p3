export default function ChowNow() {
  return (
    <main className="project">
      <section className="flex items-center flex-col">
        <h1 className="large-title pb-4">Chow Now</h1>
        <p className="lead text-neutral-400 pb-0">
          Designing a mobile app that offers a discreet way for victims of
          domestic violence to confidentially report incidents of abuse to local
          authorities, ensuring their safety while avoiding suspicion from their
          abusers.
        </p>
        <img
          src="/projects/chow-now/chow-now-header.png"
          className="mt-12"
        ></img>
      </section>
      <section className="text-left">
        <h2 className="title-3 mb-2">Overview</h2>
        <div className="grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h3 className="headline pb-1.5">Summary</h3>
            <p className="text-neutral-300">
              In the span of 23 hours, Eunsaem and I designed and developed a
              minimum viable product (MVP) for Chow Now. Though it might look
              like your typical food delivery app, the app actually offers a
              discreet way for victims of domestic violence to report incidents
              of abuse while avoiding suspicion from their abusers.
            </p>
            <p>
              I designed the visual language of the app, creating all
              wireframes, mockups, prototypes, and presentation material.
              Additionally, I also coded the frontend with React Native and
              worked with Eunsaem to integrate UI components into the backend.
            </p>
            <p>
              After presenting our project to the panel of judges at cmd-f,
              Eunsaem and I were awarded the Best UI/UX Design Award and the 1st
              place prize at cmd-f 2023.
            </p>
          </div>
          <div className="grid">
            <div>
              <h3 className="headline pb-1.5">My roles</h3>
              <p>User Interface Designer, Frontend Developer</p>
            </div>
            <div>
              <h3 className="headline pb-1.5">Teammates</h3>
              <p>Eunsaem Lee (Backend Developer)</p>
            </div>
            <div>
              <h3 className="headline pb-1.5">Event</h3>
              <p>March 11–12, 2023 (23 hours) | cmd-f 2023</p>
            </div>
            <div>
              <h3 className="headline pb-1.5">Achievements</h3>
              <p>
                1st Place Winner (out of 44 teams) and Best UI/UX Design Award
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-left">
        <h2 className="headline pb-3">Content warning</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="title-4">
              The following content may contain mentions of domestic abuse and
              violence, which may be distressing or triggering for some
              individuals.
            </p>
            <p className="text-neutral-300">
              Please proceed with caution and prioritize your well-being while
              reading. If you or someone you know is experiencing abuse, please
              reach out to the appropriate hotline or support service for
              assistance.
            </p>
          </div>
          <div>
            <ul className="list-disc leading-relaxed text-neutral-300">
              <li>VictimLinkBC: +1 (800) 563-0808</li>
              <li>Battered Women's Support Services: +1 (604) 687-1867</li>
              <li>BC Society of Transition Houses: +1 (604) 669-6943</li>
              <li>
                Domestic Violence and Abuse Support Services: +1 (604) 640-7549
              </li>
              <li> South Asian Women's Centre: +1 (604)-326-3000</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-left">
        <h2 className="headline pb-3">Problem statement</h2>
        <p className="title-2">
          In 2019, a woman in Ohio reported an incident of domestic abuse by
          pretending to order a pizza.
        </p>
        <p className="text-neutral-300">
          Her abuser was in the same room as her, so she had to be discreet.
          Fortunately, the situation ended well for the caller, but what I
          learned from my research was that there was “no universal code
          language to let dispatchers know you’re in trouble”, leading me to
          wonder…
        </p>
      </section>
      <section className="text-left">
        <h2 className="headline pb-3">Framing</h2>
        <p className="title-1">
          How might we offer victims of domestic violence a <em>discreet</em>{" "}
          way to report incidents of abuse and facilitate their access to the
          necessary aid?
        </p>
      </section>
    </main>
  );
}
