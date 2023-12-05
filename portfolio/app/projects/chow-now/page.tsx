import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import Testimonial from "@/components/testimonial";
import { CheckIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function ChowNow() {
  return (
    <main className="project">
      <section className="flex items-center flex-col text-center">
        <h1 className="large-title pb-4">Chow Now</h1>
        <p className="lead text-neutral-400 pb-0">
          Designed and developed a mobile app that offers victims of domestic
          violence a way to discreetly report abuse to local authorities.
        </p>

        <picture className="mt-8 px-4">
          <source
            media="(min-width: 64rem)"
            srcSet="/projects/chow-now/header-1800w.png"
          ></source>

          <source
            media="(min-width: 32rem)"
            srcSet="/projects/chow-now/header-800w.png"
          ></source>

          <img
            src="/projects/chow-now/header.png"
            alt="Screens from Chow Now app"
            width={800}
            height={1621}
          ></img>
        </picture>
      </section>

      <section>
        <div className="grid lg:grid-cols-5 -mt-4 gap-8 lg:gap-16">
          <div className="grid gap-1 lg:gap-2 lg:col-span-2">
            <div>
              <h2 className="headline pb-1">My roles</h2>
              <p>User Interface Designer, Frontend Developer</p>
            </div>
            <div>
              <h2 className="headline pb-1">Teammates</h2>
              <p>Eunsaem Lee (Backend Developer)</p>
            </div>
            <div>
              <h2 className="headline pb-1">Timeline</h2>
              <p>March 11–12, 2023 (23 hours) | cmd-f 2023</p>
            </div>
            <div>
              <h3 className="headline pb-1">Achievements</h3>
              <p>1st Place Winner (out of 44 teams) and Best Design Award</p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h2 className="title-4 mb-1">Summary</h2>
            <p>
              In 23 hours, I designed and developed a minimum viable product
              (MVP) with Eunsaem for cmd-f 2023. We created Chow Now, which
              might look like your typical delivery app, but it's actually a way
              for victims of domestic violence to report incidents abuse without
              raising suspicion.
            </p>
            <p>
              As the product designer and frontend developer, I designed the
              visual language of Chow Now, creating all wireframes, mockups, and
              prototypes and also coded its frontend with React Native.
            </p>
            <p className="pb-0 text-lg lg:text-xl">
              Chow Now received the 1st place prize and the Best UI/UX Design
              Award at cmd-f 2023.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="headline pb-3">Content warning</h2>
        <div className="grid lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="title-3">
              The following content contains mentions of domestic violence,
              which may triggering for some individuals.
            </p>
            <p>
              Please proceed with caution and prioritize your well-being while
              reading. If you or someone you know is experiencing abuse, please
              reach out to the appropriate hotline or support service for
              assistance.
            </p>
          </div>
          <div>
            <ul className="list-disc leading-relaxed list-inside">
              <li>
                VictimLinkBC:{" "}
                <a href="tel:+18005630808" className="phone-link">
                  +1 (800) 563-0808
                </a>
              </li>
              <li>
                Battered Women's Support Services:{" "}
                <a href="tel:+16046871867" className="phone-link">
                  +1 (604) 687-1867
                </a>
              </li>
              <li>
                BC Society of Transition Houses:{" "}
                <a href="tel:+16046696943" className="phone-link">
                  +1 (604) 669-6943
                </a>
              </li>
              <li>
                Domestic Violence and Abuse Support Services:{" "}
                <a href="tel:+16046407549" className="phone-link">
                  +1 (604) 640-7549
                </a>
              </li>
              <li>
                South Asian Women's Centre:{" "}
                <a href="tel:+16043263000" className="phone-link">
                  +1 (604)-326-3000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      <div className="lg:px-20 flex flex-col lg:items-center">
        <div className="h-16 w-16 bg-gradient-to-b from-yellow-400 to-yellow-700 rounded-lg mb-6">
          <div className="m-[0.0625rem] bg-gradient-to-b from-neutral-900 to-neutral-950 w-[calc(100%-0.125rem)] h-[calc(100%-0.125rem)] rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-yellow-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>
        </div>

        <h2 className="title-1">Highlights</h2>
        <p className="lg:text-center text-neutral-400 mb-4">
          In just 23 hours, Eunsaem and I developed the MVP for Chow Now, an app
          that provides victims of domestic violence a way to report incidents
          of abuse, getting them access to the support they need without raising
          suspicion.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <picture>
            <source
              media="(min-width: 40rem)"
              srcSet="/projects/chow-now/highlight-2-1920x1080.png"
            ></source>

            <img
              width={800}
              height={953}
              src="/projects/chow-now/location-services-800.png"
              alt="Chow Now asking permission to access user's location"
              className="rounded-lg w-full"
            ></img>
          </picture>

          <picture>
            <source
              media="(min-width: 40rem)"
              srcSet="/projects/chow-now/highlight-1-1920x1080.png"
            ></source>

            <img
              width={800}
              height={880}
              src="/projects/chow-now/add-emergency-contact-800.png"
              alt="Feature to add an emergency contact in Chow Now"
              className="rounded-lg"
            ></img>
          </picture>

          <picture>
            <source
              media="(min-width: 40rem)"
              srcSet="/projects/chow-now/highlight-4-1920x1080.png"
            ></source>

            <img
              width={800}
              height={1058}
              alt="Sending an alert on Chow Now Chow Now"
              src="/projects/chow-now/send-alert-800.png"
              className="rounded-lg"
            ></img>
          </picture>

          <picture>
            <source
              media="(min-width: 40rem)"
              srcSet="/projects/chow-now/highlight-3-1920x1080.png"
            ></source>

            <img
              width={800}
              height={1478}
              src="/projects/chow-now/interface-800.png"
              alt="Chow Now looking like a typical takeout app, nothing suspicious here"
              className="rounded-lg"
            ></img>
          </picture>
        </div>
      </div>

      <div className="divider"></div>
      <section>
        <h2 className="headline pb-3">Background</h2>
        <p className="title-2">
          In 2019, a woman in Ohio reported an incident of domestic abuse by
          pretending to order a pizza.
        </p>
        <p>
          Her abuser was around, so she had to be discreet. Although the
          situation ended well for her, I learned that there wasn’t a universal
          code for callers in the same boat as her.
        </p>
        <p className="pb-0 text-lg lg:text-xl">
          This led me to wonder how we can help victims of domestic violence
          report incidents of abuse without raising the suspicion of their
          abusers.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="headline pb-3">Secondary research</h2>
        <div className="grid gap-4 lg:gap-16 lg:grid-cols-2">
          <div>
            <p className="title-2">
              The goal was to design an app that can ask for the victim's
              location without being suspicious.
            </p>
          </div>
          <div>
            <p>Here's what I learned:</p>
            <ol className="pl-2 flex flex-col gap-2">
              <li className="flex gap-3">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 fill-amber-400"
                >
                  <path d="M11.25 6.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM16.28 8.216a.75.75 0 0 0-1.06 0l-1.061 1.06a.75.75 0 1 0 1.06 1.061l1.061-1.06a.75.75 0 0 0 0-1.06ZM8.78 8.216a.75.75 0 0 0-1.06 1.06l1.06 1.061a.75.75 0 1 0 1.061-1.06l-1.06-1.06Z" />
                  <path d="M12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.096-.9 4.02-2.663 5.742a.75.75 0 0 0-.175.265l-.032.103-1.13 4.895a2.25 2.25 0 0 1-2.02 1.737l-.173.007h-2.114a2.25 2.25 0 0 1-2.147-1.577l-.045-.167-1.13-4.895a.75.75 0 0 0-.206-.368c-1.68-1.64-2.577-3.463-2.659-5.444l-.006-.298.004-.24A7.25 7.25 0 0 1 12 2.002Zm2.115 16.498H9.884l.329 1.42a.75.75 0 0 0 .627.573l.103.008h2.114a.75.75 0 0 0 .7-.483l.03-.099.328-1.419ZM12 3.501a5.75 5.75 0 0 0-5.746 5.53l-.004.22.007.277c.076 1.563.8 3.02 2.206 4.392.264.258.46.576.571.926l.049.178.455 1.975h1.712V10.75a.75.75 0 0 1 1.5 0V17h1.711l.458-1.976a2.25 2.25 0 0 1 .493-.97l.127-.133c1.404-1.373 2.128-2.828 2.204-4.392l.007-.277-.004-.22A5.75 5.75 0 0 0 12 3.5Z" />
                </svg>
                <h3 className="w-full text-lg lg:text-xl text-neutral-200">
                  Domestic violence reports commonly rise after major sporting
                  events.
                </h3>
              </li>
              <li className="flex gap-3">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 fill-amber-400"
                >
                  <path d="M11.25 6.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM16.28 8.216a.75.75 0 0 0-1.06 0l-1.061 1.06a.75.75 0 1 0 1.06 1.061l1.061-1.06a.75.75 0 0 0 0-1.06ZM8.78 8.216a.75.75 0 0 0-1.06 1.06l1.06 1.061a.75.75 0 1 0 1.061-1.06l-1.06-1.06Z" />
                  <path d="M12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.096-.9 4.02-2.663 5.742a.75.75 0 0 0-.175.265l-.032.103-1.13 4.895a2.25 2.25 0 0 1-2.02 1.737l-.173.007h-2.114a2.25 2.25 0 0 1-2.147-1.577l-.045-.167-1.13-4.895a.75.75 0 0 0-.206-.368c-1.68-1.64-2.577-3.463-2.659-5.444l-.006-.298.004-.24A7.25 7.25 0 0 1 12 2.002Zm2.115 16.498H9.884l.329 1.42a.75.75 0 0 0 .627.573l.103.008h2.114a.75.75 0 0 0 .7-.483l.03-.099.328-1.419ZM12 3.501a5.75 5.75 0 0 0-5.746 5.53l-.004.22.007.277c.076 1.563.8 3.02 2.206 4.392.264.258.46.576.571.926l.049.178.455 1.975h1.712V10.75a.75.75 0 0 1 1.5 0V17h1.711l.458-1.976a2.25 2.25 0 0 1 .493-.97l.127-.133c1.404-1.373 2.128-2.828 2.204-4.392l.007-.277-.004-.22A5.75 5.75 0 0 0 12 3.5Z" />
                </svg>
                <h3 className="w-full text-lg lg:text-xl text-neutral-200">
                  Sports fans typically enjoy food during games.
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="headline pb-3">Defining the MVP</h2>
        <p className="title-2 mb-2">
          Based on my findings, I designed the solution to be disguised as a
          typical food delivery app.
        </p>
        <p className="mb-2">
          But before we started coding, Eunsaem and I had to get on the same
          page about how we would achieve the MVP, and we had to do it{" "}
          <em>fast</em>. This meant quickly sketching out the screens and
          defining the main user flow as well as agreeing on the core
          functionalities we needed for our MVP and the tech stack we would use
          to create it.
        </p>

        <div className="grid gap-4 lg:gap-6">
          <div className="border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6 rounded-xl">
            <h3 className="title-3 pb-2">Low-fidelity wireframes</h3>
            <p className="mb-4 lg:mb-6 text-neutral-400">
              I started off with rough sketches and basic wireframes to outline
              the layout and structure of the UI.
            </p>
            <picture>
              <source
                media="(min-width: 64rem)"
                srcSet="/projects/chow-now/low-fidelity-wireframes.png"
              ></source>
              <source
                media="(min-width: 40rem)"
                srcSet="/projects/chow-now/low-fidelity-wireframes-sm.png"
              ></source>
              <img
                width={1372}
                height={1630}
                src="/projects/chow-now/low-fidelity-wireframes-xs.png"
                alt="Low-fidelity wireframes of Chow Now"
              ></img>
            </picture>
          </div>
          <div className="border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6 rounded-xl">
            <h3 className="title-3 pb-2">User flow</h3>
            <p className="mb-4 lg:mb-6 text-neutral-400">
              We mapped out the user flow to understand what screens we needed
              to design and functionalities we needed to develop.
            </p>
            <picture>
              <source
                media="(min-width: 64rem)"
                srcSet="/projects/chow-now/user-flow.png"
              ></source>
              <source
                media="(min-width: 40rem)"
                srcSet="/projects/chow-now/user-flow-tablet.png"
              ></source>
              <img
                width={1372}
                height={1630}
                src="/projects/chow-now/user-flow-mobile.png"
                alt="The main user flow of Chow Now."
              ></img>
            </picture>
          </div>
          <div className="grid gap-4 lg:gap-8 lg:grid-cols-5">
            <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6 lg:col-span-3">
              <h3 className="title-3 pb-1.5">Core functionalities</h3>
              <p className="mb-2 text-neutral-400">
                We knew we realistically couldn't finish all the
                functionalities, so we narrowed down which ones we <em>had</em>{" "}
                to complete by the end of the hackathon.
              </p>

              <ul className="pl-2 list grid gap-3">
                <li className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 fill-green-400"
                  >
                    <path d="M17.03 11.03a.75.75 0 1 0-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Zm-1.036-6.946A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084Zm0 .012L16 4.25c0-.052-.002-.103-.005-.154ZM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                  <span className="w-full lg:text-lg text-neutral-200">
                    User can create an account
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 fill-green-400"
                  >
                    <path d="M17.03 11.03a.75.75 0 1 0-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Zm-1.036-6.946A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084Zm0 .012L16 4.25c0-.052-.002-.103-.005-.154ZM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                  <span className="w-full lg:text-lg text-neutral-200">
                    User can learn how to use the app through onboarding or
                    tutorial
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 fill-green-400"
                  >
                    <path d="M17.03 11.03a.75.75 0 1 0-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Zm-1.036-6.946A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084Zm0 .012L16 4.25c0-.052-.002-.103-.005-.154ZM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                  <span className="w-full lg:text-lg text-neutral-200">
                    User can share their location
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 fill-green-400"
                  >
                    <path d="M17.03 11.03a.75.75 0 1 0-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Zm-1.036-6.946A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084Zm0 .012L16 4.25c0-.052-.002-.103-.005-.154ZM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                  <span className="w-full lg:text-lg text-neutral-200">
                    User can create an alert and fill out alert details
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 fill-green-400"
                  >
                    <path d="M17.03 11.03a.75.75 0 1 0-1.06-1.06L11 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Zm-1.036-6.946A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084Zm0 .012L16 4.25c0-.052-.002-.103-.005-.154ZM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1Zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                  <span className="w-full lg:text-lg text-neutral-200">
                    User can submit an alert, sending a text message or a phone
                    call to a phone number
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6 flex flex-col lg:col-span-2">
              <h3 className="title-3 pb-1.5">Tech stack</h3>
              <p className="text-base text-neutral-400 mb-1 lg:mb-2">
                Eunsaem and I knew that the app needed to be available for both
                Android and iOS, which is why we used React Native.
              </p>
              <ul className="inline-flex flex-wrap gap-3">
                <li className="chip-with-img lg:text-lg font-mono">
                  <img
                    src="/projects/chow-now/react-native-logo.png"
                    width={100}
                    height={87}
                    alt="React Native logo"
                    className="h-full w-auto max-h-5 max-w-5"
                  ></img>
                  React Native
                </li>
                <li className="chip-with-img lg:text-lg font-mono">
                  <img
                    src="/projects/chow-now/firebase-logo.png"
                    width={74}
                    height={100}
                    alt="Google Firebase logo"
                    className="h-full w-auto max-h-5 max-w-5"
                  ></img>
                  Google Firebase
                </li>
                <li className="chip-with-img lg:text-lg font-mono">
                  <img
                    src="/projects/chow-now/twilio-logo.png"
                    width={100}
                    height={100}
                    alt="Twilio logo"
                    className="h-full w-auto max-h-5 max-w-5"
                  ></img>
                  Twilio API
                </li>
                <li className="chip-with-img lg:text-lg font-mono">
                  <img
                    src="/projects/chow-now/javascript-logo.png"
                    width={89}
                    height={100}
                    alt="JavaScript logo"
                    className="h-full w-auto max-h-5 max-w-5"
                  ></img>
                  JavaScript
                </li>
                <li className="chip-with-img lg:text-lg font-mono">
                  <img
                    src="/projects/chow-now/github-logo.png"
                    width={100}
                    height={100}
                    alt="Figma logo"
                    className="h-full w-auto max-h-5 max-w-5"
                  ></img>
                  GitHub
                </li>
                <li className="chip-with-img lg:text-lg font-mono">
                  <img
                    src="/projects/chow-now/figma-logo.png"
                    width={67}
                    height={100}
                    alt="Figma logo"
                    className="h-full w-auto max-h-5 max-w-5"
                  ></img>
                  Figma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="headline pb-3">Results and Reflection</h2>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 mb-8">
          <div>
            <p className="title-2 mb-3">
              Chow Now won 1st place and the Best Design Award at cmd-f 2023.
            </p>
            <p>
              As a designer, I strive to create meaningful solutions that
              address real user needs, and cmd-f was the perfect place for
              Eunsaem and I to challenge ourselves.
            </p>
            <p>
              I learned so much in the 23 hours of design and development that
              Eunsaem and I performed and we achieved even more than I ever
              dreamed of achieving, so we were honored to accept both the 1st
              place prize of cmd-f 2023 as well as Iris Labs' Best Design Award.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/projects/chow-now/demo.png"
              alt="Christina and Eunsaem presentng at cmd-f"
              className="rounded-lg"
              width={800}
              height={451}
            ></img>
            <div className="flex flex-row gap-2 my-2 items-center">
              <div className="chip h-fit">
                <h3>Image</h3>
              </div>
              <p className="pb-0 text-sm">
                Christina (left) and Eunsaem (right) presenting Chow Now at
                cmd-f 2023.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
            <h3 className="title-4 mb-2">What I learned</h3>

            <ul className="list grid gap-3">
              <li className="flex gap-3">
                <MagnifyingGlassCircleIcon
                  width={20}
                  height={20}
                  className="w-7 h-7 text-blue-400"
                ></MagnifyingGlassCircleIcon>
                <span className="w-full leading-6">
                  Taking the time to define a user flow, even in a fast-paced
                  hackathon environment, is worth it if it means everyone
                  getting on the same page.
                </span>
              </li>
              <li className="flex gap-3">
                <MagnifyingGlassCircleIcon
                  width={20}
                  height={20}
                  className="w-7 h-7 text-blue-400"
                ></MagnifyingGlassCircleIcon>
                <span className="w-full leading-6">
                  It's not enough to communicate effectively when you have a
                  significant time constraint, you also have to communicate{" "}
                  <em>efficiently</em>.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
            <h3 className="title-4 mb-2">What I did well</h3>

            <ul className="list grid gap-3">
              <li className="flex gap-3">
                <CheckCircleIcon
                  width={20}
                  height={20}
                  className="w-7 h-7 text-green-400"
                ></CheckCircleIcon>
                <span className="w-full leading-6">
                  The way I justified my design decisions and backed it up with
                  research. It's something I should strive towards for all of my
                  projects.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon
                  width={20}
                  height={20}
                  className="w-7 h-7  text-green-400"
                ></CheckCircleIcon>
                <span className="w-full leading-6">
                  I proved my ability to learn new skills <em>fast</em> when I
                  picked up React Native for the first time and managed to ship
                  an MVP in less than 24 hours.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
            <h3 className="title-4 mb-2">What I could have improved</h3>

            <ul className="list grid gap-3">
              <li className="flex gap-3">
                <ExclamationCircleIcon
                  width={20}
                  height={20}
                  className="w-7 h-7 text-red-400"
                ></ExclamationCircleIcon>
                <span className="w-full leading-6">
                  The readability of the text in some UI components can be
                  improved. White text on an orange background tends not to be
                  readable.
                </span>
              </li>
              <li className="flex gap-3">
                <ExclamationCircleIcon
                  width={20}
                  height={20}
                  className="w-7 h-7 text-red-400"
                ></ExclamationCircleIcon>
                <span className="w-full leading-6">
                  I spent 4 hours trying to change the default font of our React
                  Native app, and I never figured it out. I'll have to
                  prioritize better next time!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="testimonials" className="flex flex-col items-center">
        <div className="h-16 w-16 bg-gradient-to-b from-emerald-400 to-emerald-700 rounded-lg mb-6">
          <div className="m-[0.0625rem] bg-gradient-to-b from-neutral-800 to-neutral-950 w-[calc(100%-0.125rem)] h-[calc(100%-0.125rem)] rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-emerald-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
        </div>

        <h2 className="title-1">Feedback and Reviews</h2>
        <p className="text-center text-neutral-400 mb-4">
          Here's what people are saying about Chow Now.
        </p>

        <div
          id="testimonials-container"
          className="grid md:grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6"
        >
          <div className="testimonial-column">
            <Testimonial
              firstName="Jonathan"
              lastName="Chao"
              title="Mentor and Judge at cmd-f 2023"
              imgLink="../jonathan-chao.jpg"
            >
              Huge congratulations Christina Raganit and Eunsaem Lee on first
              place 🥇 I love your overall design, product idea, and Figma
              mockup!
            </Testimonial>
            <Testimonial
              imgLink="../vandy-liu.jpg"
              firstName="Vandy"
              lastName="Liu"
              title="Software Engineer at Astronomer"
            >
              👍 😁 👍 congrats! amazing project!!
            </Testimonial>
          </div>
          <div className="testimonial-column">
            <Testimonial
              firstName="Jasvir"
              lastName="Sandhu"
              title="External Director at UBC Women in Computing Science"
              imgLink="../jasvir-sandhu.jpg"
            >
              Congratulations on the win! Such an important cause!
            </Testimonial>
            <Testimonial
              firstName="Austin"
              lastName="Leung"
              imgLink="../austin-leung.jpg"
              title="Co-Founding Product Designer at Iris Labs"
            >
              This is awesome! Congratulations, I love the design and idea 🎉
            </Testimonial>
          </div>
          <div className="testimonial-column">
            <Testimonial
              imgLink="../elizabeth-g-ehebald.jpg"
              firstName="Elizabeth"
              lastName="G. Ehebald"
              title="Participant at cmd-f 2023"
            >
              Congratulations! You guys did wonderfully and your project idea
              was so cool!
            </Testimonial>
            <Testimonial
              firstName="Kelly"
              lastName="Jiang"
              title="Full-Stack Software Developer"
              imgLink="../kelly-jiang.jpg"
            >
              Congratulations you guys!! Your app and idea were both super
              awesome :))
            </Testimonial>
          </div>
        </div>
      </section>
    </main>
  );
}
