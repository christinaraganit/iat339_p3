import Link from "@/components/link";

export default function About2() {
  return (
    <main className="grid xl:grid-cols-2">
      <div className="grid gap-3">
        <h1 className="title-1 mb-1">Hi, Christina here.</h1>
        <div>
          <h2 className="title-4">Who I am</h2>
          <p className="xl:text-lg">
            I'm a product designer currently calling rainy Vancouver my home.
            I've lived in the sprawling urban city of Manila (where I was born)
            and the sunny deserts of Dubai, so I guess you can say I'm adaptable
            to any weather. Or any challenge.
          </p>
        </div>
        <div>
          <h2 className="title-4">What I used to do before design</h2>
          <p className="xl:text-lg">
            No, seriously. I mean it. I've folded clothes at the mall, served
            ice cold A&W root beer, waded knee-deep into mud to remove invasive
            species with the riparian team of the{" "}
            <Link
              text="Salmon Habitat Restoration
            Program"
              link=""
            ></Link>
            , and beta-tested a AAA game. I even have my name on the credits.
            I've resolved buggy code and <em>wrote</em> buggy code, and then I
            fell in love with design.
          </p>
        </div>
        <div>
          <h2 className="title-4">What I do now</h2>
          <p className="xl:text-lg">
            After graduating from British Columbia Institute of Technology's{" "}
            <Link text="Computer Systems Technology" link=""></Link> program, I
            enrolled into Simon Fraser University's{" "}
            <Link text="Interactive Arts and Technology" link=""></Link>{" "}
            program, where I'm currently in my third year, pursuing a Bachelor's
            Degree in Science. I miss coding sometimes, so I attend all the
            hackathons I can. <Link text="SFU Surge" link=""></Link> reached out
            to me after I won the Best UI/UX Design Award and 2nd place at
            StormHacks 2023, and ever since September, I've been their Director
            of Design.
          </p>
        </div>
        <div>
          <h2 className="title-4">What I've done as a designer</h2>
          <p className="xl:text-lg">
            Previously, I was a UX Design Intern at Felix Payment Systems before
            accepting an offer to work part-time during my studies. At Felix, I
            established their design system and collaborated with their
            development and product teams in redesigning Felix.Terminal and some
            of their internal products. Before that, I was a UX Designer at
            Karma Well Health Technologies, where I wrote their design
            guidelines and also coded frontend with Next.js and SASS.
          </p>
        </div>
        <div>
          <h2 className="title-4">What I'm looking for now</h2>
          <p className="xl:text-lg">
            I'm seeking an internship for the summer of 2024, specifically at a
            sizable organization with a mature design team and well-established
            design processes and workflows. I've only ever designed at startups,
            and I want to get a taste of a larger company before I graduate. If
            you think that's with you, send me an email.
          </p>
        </div>
      </div>
    </main>
  );
}
