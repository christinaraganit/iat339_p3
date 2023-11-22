import Link from "@/components/link";

export default function Style() {
  return (
    <main className="w-full max-w-5xl p-6">
      <h1 className="large-title">Hi, I'm Christina Raganit.</h1>
      <p className="lead pb-4 text-white/75">
        I'm a developer-turned-designer who crafts interfaces that satisfy
        technical requirements and achieve business goals.
      </p>

      <p className="lead-2 text-white/75">
        I'm currently pursuing a BSci in Interactive Arts and Technology at{" "}
        <Link
          text="Simon Fraser University"
          link="https://www.sfu.ca/siat.html"
        ></Link>{" "}
        and leading the design team as the Director of Design at{" "}
        <Link text="SFU Surge" link="https://sfusurge.com/"></Link>. I graduated
        with distinction from Computer Systems Technology at{" "}
        <Link
          text="British Columbia Institute of Technology"
          link="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/"
        ></Link>
        .
      </p>
      <a
        href=""
        className="block w-fit py-[0.0625rem] px-[0.0625rem] rounded-md bg-gradient-to-b from-neutral-700 to-neutral-800 hover:from-neutral-600 hover:to-neutral-800"
      >
        <div className="tracking-tight text-white/90 block px-3 py-1 bg-neutral-900 hover:bg-neutral-800 rounded-md font-medium">
          This is a secondary button
        </div>
      </a>
    </main>
  );
}
