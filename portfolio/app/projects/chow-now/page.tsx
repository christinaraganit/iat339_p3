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
          Designing a mobile app that offers a discreet way for victims of
          domestic violence to confidentially report incidents of abuse to local
          authorities, ensuring their safety while avoiding suspicion from their
          abusers.
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
          ></img>
        </picture>
      </section>
      <section>
        <div className="grid lg:grid-cols-5 -mt-8 gap-8 lg:gap-16">
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
              <p>
                1st Place Winner (out of 44 teams) and Best UI/UX Design Award
              </p>
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
      <section>
        <h2 className="headline pb-3">Content warning</h2>
        <div className="grid lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="title-3">
              The following content may contain mentions of domestic abuse and
              violence, which may be distressing or triggering for some
              individuals.
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
              <li>VictimLinkBC: +1 (800) 563-0808</li>
              <li>Battered Women's Support Services: +1 (604) 687-1867</li>
              <li>BC Society of Transition Houses: +1 (604) 669-6943</li>
              <li>
                Domestic Violence and Abuse Support Services: +1 (604) 640-7549
              </li>
              <li>South Asian Women's Centre: +1 (604)-326-3000</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="headline pb-3">Background</h2>
        <p className="title-2">
          In 2019, a woman in Ohio reported an incident of domestic abuse by
          pretending to order a pizza.
        </p>
        <p className="pb-0">
          In the presence of her abuser, she had to be discreet. Although the
          situation ended well, my research revealed the absence of a universal
          code language for callers in distress, leading me to wonder…
        </p>
      </section>
      <section>
        <div className="bg-neutral-900/60  rounded-2xl">
          <div className="bg-gradient-to-r from-neutral-950 via-amber-500 to-neutral-950 h-[0.0625rem] opacity-60 rounded-2xl"></div>
          <div className="p-4 lg:p-6 lg:p-12 flex flex-col items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/[9%] to-neutral-950/60 rounded-2xl">
            <div className="rounded-full p-[0.125rem] bg-gradient-to-b from-amber-500 to-amber-500/0 w-fit mb-3">
              <div className="bg-neutral-900 p-1.5 rounded-full">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C9.238 4 7 6.238 7 9a1 1 0 0 0 2 0c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .816-.199 1.294-.438 1.629-.262.365-.625.638-1.128.985l-.116.078c-.447.306-1.023.699-1.469 1.247-.527.648-.849 1.467-.849 2.561v.5a1 1 0 1 0 2 0v-.5c0-.656.178-1.024.4-1.299.257-.314.603-.552 1.114-.903l.053-.037c.496-.34 1.133-.786 1.62-1.468C16.7 11.081 17 10.183 17 9c0-2.762-2.238-5-5-5ZM12 21.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                    fill="#f59e0b"
                  />
                </svg>
              </div>
            </div>
            <h2 className="headline pb-3 text-amber-500 mb-4">Framing</h2>
            <p className="title-1-no-gradient text-white opacity-90 pb-0 text-center max-w-full">
              How might we offer victims of domestic violence a{" "}
              <em>discreet</em> way to report incidents of abuse and facilitate
              their access to the necessary aid?
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="headline pb-3">Secondary research</h2>
        <p className="title-2 mb-1">
          The goal was to design an app that can ask for the victim's location
          without being suspicious.
        </p>
        <p className="mb-2">
          From my research, I surfaced the following insights that might help me
          design a solution:
        </p>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
            <h3 className="title-3">
              There's a disturbing relationship between domestic violence and
              sports.
            </h3>
            <div className="rounded-full p-[0.0625rem] bg-gradient-to-b from-neutral-600 to-neutral-600/30 w-fit mb-5 order-first">
              <div className="bg-neutral-900 p-3 rounded-full">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.926 1.72a8.526 8.526 0 0 1 3.852 0l-1.924 1.153-1.928-1.154Zm-1.83.653 3.008 1.8v2.193l-2.791 2.028-2.044-.707-.587-3.534a8.526 8.526 0 0 1 2.414-1.78ZM4.59 7.835l.358 2.157-1.428 1.428a8.449 8.449 0 0 1 1.07-3.585Zm-.968 5.604 2.327-2.327 2.04.705L9.07 15.15l-.97 1.575-3.293-.194a8.448 8.448 0 0 1-1.186-3.092Zm2.47 4.67 1.904.112.675 1.602a8.51 8.51 0 0 1-2.58-1.714Zm4.439 2.264-1.184-2.809.963-1.567h3.372l.912 1.581-1.04 2.78a8.554 8.554 0 0 1-3.023.015Zm4.83-.563.567-1.517 1.67.105a8.502 8.502 0 0 1-2.238 1.412Zm3.532-2.834-3.024-.19-.938-1.624 1.087-3.345 2.013-.696 2.312 2.52a8.459 8.459 0 0 1-1.45 3.335Zm1.598-5.391-1.44-1.57.362-2.178a8.45 8.45 0 0 1 1.078 3.748Zm-2.318-5.43-.589 3.534-2.04.705-2.791-2.028V6.172l3.002-1.8a8.528 8.528 0 0 1 2.418 1.784Zm-8.705 5.362 2.535-1.842 2.535 1.842-.968 2.98h-3.134l-.968-2.98Z"
                    fill="#d4d4d4"
                  />
                </svg>
              </div>
            </div>
            <p className="pb-0">
              Research conducted by Lancaster University revealed that domestic
              violence reports rose after soccer matches, whether the English
              team lost <em>or</em> won.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
            <h3 className="title-3">
              Sports fans typically order food during games.
            </h3>
            <div className="rounded-full p-[0.0625rem] bg-gradient-to-b from-neutral-600 to-neutral-600/30 w-fit mb-5 order-first">
              <div className="bg-neutral-900 p-3 rounded-full">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 10.99a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 1.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 3.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 4.66c0-1.497 1.23-2.805 2.82-2.648A20.782 20.782 0 0 1 21.262 8.84c1.07 1.193.737 2.964-.479 3.845-1.582 1.148-3.94 2.857-5.283 3.833-.002.437-.002.721-.001 1.092v.628a1.75 1.75 0 0 1-2.056 1.724c-.204.826-.932 1.527-1.944 1.527-.7 0-1.262-.335-1.609-.815l-1.325.957c-1.488 1.074-3.57.011-3.569-1.826L5 4.661Zm2.673-1.155c-.609-.06-1.174.443-1.174 1.155v.52c5.254.221 9.911 2.749 12.985 6.594l.419-.304c.578-.42.652-1.173.242-1.63A19.282 19.282 0 0 0 7.673 3.506Zm-1.177 16.3c0 .612.694.967 1.19.608l2.128-1.534a.75.75 0 0 1 1.188.61c0 .27.209.5.497.5a.497.497 0 0 0 .502-.5v-1.252a.75.75 0 0 1 1.5 0c0 .14.111.25.248.25a.25.25 0 0 0 .25-.25v-.622c-.001-.47-.002-.808.005-1.489a.75.75 0 0 1 .308-.6c.902-.656 2.496-1.812 3.956-2.87a16.04 16.04 0 0 0-11.77-5.974l-.002 13.123Z"
                    fill="#d4d4d4"
                  />
                </svg>
              </div>
            </div>
            <p className="pb-0">
              I investigated sports fans' behaviors and found that ordering food
              was a common aspect of watching sports. Takeout app Deliveroo
              reported a 25% surge in app orders before major games.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="headline pb-3">Defining the MVP</h2>
        <p className="title-2 mb-2">
          Based on my findings, I decided that the app was to be disguised as a
          typical takeout mobile app.
        </p>
        <p className="mb-2">
          Before we started coding, Eunsaem and I had to get on the same page
          about how we would achieve the MVP.
        </p>

        <div className="grid gap-4 lg:gap-6">
          <div className="border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6 rounded-xl">
            <h3 className="title-3 mb-2">User flow</h3>
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
          <div className="grid gap-4 lg:gap-8 lg:grid-cols-2">
            <div className="hidden lg:flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
              <h3 className="title-3 mb-2">Functionalities (all)</h3>

              <ul className="list grid gap-3">
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can create an account
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can add emergency contacts
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can learn how to use the app through an onboarding flow
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can share their location
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can see restaurants near them (fetching restaurant data
                    from the Google Maps API)
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can submit an alert
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></CheckCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can send an alert, sending a phone call to a phone
                    number with an automated voice reading out the alert details
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
              <h3 className="title-3 pb-1.5">Functionalities (core)</h3>
              <p className="text-base text-neutral-400 mb-2">
                Must be completed by the end of the hackathon
              </p>

              <ul className="list grid gap-3">
                <li className="flex gap-3">
                  <ExclamationCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></ExclamationCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can create an account
                  </span>
                </li>
                <li className="flex gap-3">
                  <ExclamationCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></ExclamationCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can learn how to use the app through an onboarding flow
                  </span>
                </li>
                <li className="flex gap-3">
                  <ExclamationCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></ExclamationCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can share their location
                  </span>
                </li>
                <li className="flex gap-3">
                  <ExclamationCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></ExclamationCircleIcon>
                  <span className="w-full leading-6 text-lg">
                    User can submit an alert
                  </span>
                </li>
                <li className="flex gap-3">
                  <ExclamationCircleIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 text-neutral-200"
                  ></ExclamationCircleIcon>
                  <div className="w-full">
                    <span className="w-full leading-6 text-lg">
                      User can send an alert, sending a text message to a phone
                      number with an automated voice reading out the alert
                      details
                    </span>
                    <p className="mt-2 pb-0 leading-5 text-neutral-400">
                      We were concerned about the feasibility of sending the
                      phone call.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="flex flex-col rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6">
              <h3 className="title-3 pb-1.5">My deliverables</h3>
              <p className="text-base text-neutral-400 mb-1 lg:mb-2">
                Must be completed by the end of the hackathon
              </p>

              <ul className="inline-flex flex-wrap gap-3">
                <li className="chip lg:text-lg">Figma prototype</li>
                <li className="chip lg:text-lg">Frontend code</li>
                <li className="chip lg:text-lg">Design guidelines</li>
                <li className="chip lg:text-lg">Slide deck</li>
                <li className="chip lg:text-lg">Presentation</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-4 lg:p-6  flex flex-col">
              <h3 className="title-3 pb-1.5">Tech stack</h3>
              <p className="text-base text-neutral-400 mb-1 lg:mb-2">
                For design and development
              </p>
              <ul className="inline-flex flex-wrap gap-3">
                <li className="chip lg:text-lg">React Native</li>
                <li className="chip lg:text-lg">Google Firebase</li>
                <li className="chip lg:text-lg">Twilio API</li>
                <li className="chip lg:text-lg">JavaScript</li>
                <li className="chip lg:text-lg">Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-full">
        <h2 className="headline pb-3">Solution</h2>
        <p className="title-2 mb-3">
          Chow Now enables victims of domestic violence to confidentially report
          incidents of abuse to local authorities with discretion.
        </p>
        <div className="grid gap-6 lg:gap-8">
          <div className="grid gap-2 lg:gap-0">
            <img
              width={1920}
              height={1080}
              src="/projects/chow-now/highlight-2-1920x1080.png"
              alt="Chow Now asking permission to access user's location"
              className="rounded-lg"
            ></img>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 my-2 lg:items-center">
              <div className="-ml-3 lg:ml-0 chip h-fit">
                <h3>Location services</h3>
              </div>
              <p className="pb-0">
                Enhancing the efficiency of reporting incidents with location
                services.
              </p>
            </div>
          </div>
          <div className="grid gap-2 lg:gap-0">
            <img
              width={1920}
              height={1080}
              src="/projects/chow-now/highlight-1-1920x1080.png"
              alt="Feature to add an emergency contact in Chow Now"
              className="rounded-lg"
            ></img>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 my-2 lg:items-center">
              <div className="-ml-3 lg:ml-0 chip h-fit">
                <h3>Emergency contacts</h3>
              </div>
              <p className="pb-0">
                Assisting users in preparing for emergencies by including
                emergency contacts.
              </p>
            </div>
          </div>
          <div className="grid gap-2 lg:gap-0">
            <img
              width={1920}
              height={1080}
              src="/projects/chow-now/highlight-3-1920x1080.png"
              alt="Chow Now looking like a typical takeout app, nothing suspicious here"
              className="rounded-lg"
            ></img>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 my-2 lg:items-center">
              <div className="-ml-3 lg:ml-0 chip h-fit">
                <h3>Standard interface</h3>
              </div>
              <p className="pb-0">
                Avoiding suspicion through the user interface of a standard food
                delivery application.
              </p>
            </div>
          </div>
          <div className="grid gap-2 lg:gap-0">
            <img
              width={1920}
              height={1080}
              alt="Toggling between different views on Chow Now"
              src="/projects/chow-now/highlight-4-1920x1080.png"
              className="rounded-lg"
            ></img>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 my-2 lg:items-center">
              <div className="-ml-3 lg:ml-0 chip h-fit">
                <h3>Toggling</h3>
              </div>
              <p className="pb-0">
                Providing discretion by allowing toggling between different
                views.
              </p>
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
              Chow Now won 1st place and the Best UI/UX Design Award at cmd-f
              2023.
            </p>
            <p>
              This idea sparked after I learned that domestic violence incidents
              rise after major sporting events. As a designer, I strive to
              design meaningful solutions that address real user needs, so I
              teamed up with Eunsaem to take action.
            </p>
            <p className="pb-0">
              After 23 hours of design and development, I am thrilled to share
              that our team was announced the first place winner of cmd-f 2023
              and we were also awarded Iris Labs' Best UI/UX Design Award.
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
                  Rapid prototyping is the way to go for testing ideas
                  quickly—especially in a fast-paced hackathon environment.
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
                  significant time constraint, you have to communicate{" "}
                  <em>efficiently</em> too.
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
          </div>{" "}
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
                  Native app, and I never figured it out. Next time, I need to
                  prioritize better!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h2 className="headline pb-3">Feedback and Reviews</h2>
        <p className="title-2 mb-3">
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
              firstName="Kelly"
              lastName="Jiang"
              title="Full-Stack Software Developer"
              imgLink="../kelly-jiang.jpg"
            >
              Congratulations you guys!! Your app and idea were both super
              awesome :))
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
              imgLink="../vandy-liu.jpg"
              firstName="Vandy"
              lastName="Liu"
              title="Software Engineer at Astronomer"
            >
              👍 😁 👍 congrats! amazing project!!
            </Testimonial>
          </div>
        </div>
      </section>
    </main>
  );
}
