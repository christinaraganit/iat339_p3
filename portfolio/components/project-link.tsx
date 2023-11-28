import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  chips: string[];
  children: any;
  link: string;
  imgLink: string;
}

export default function ProjectLink(props: Props) {
  return (
    <a
      href={props.link}
      className="group/project-link transition-color block py-[0.075rem] px-[0.1rem] rounded-lg lg:rounded-3xl bg-gradient-to-r from-neutral-700/30 via-neutral-700 to-neutral-700/30 hover:from-neutral-700/30 hover:via-neutral-400 hover:to-neutral-700/30 hover:scale-1025 transition-transform"
    >
      <div className="text-left p-6 pb-0 lg:p-8 xl:p-10 lg:pb-0 xl:pb-0 rounded-lg lg:rounded-3xl bg-neutral-900 group-hover/project-link:bg-neutral-900/90">
        <div className="grid lg:grid-cols-2 lg:gap-4">
          <div className="w-full">
            <h2 className="title-1">{props.title}</h2>
            <div className="mt-1 flex gap-2 flex-wrap">
              {props.chips.map((chip) => (
                <div className="chip">{chip}</div>
              ))}
            </div>
          </div>
          <div className="pt-6 lg:pt-0 w-full lg:pl-6 flex flex-col justify-end text-neutral-200">
            <p className="text-neutral-200 pb-4 text-base lg:lead">
              {props.children}
            </p>
            <span className="flex text-neutral-400 flex-row items-center gap-2">
              <span className="text-sm">Read case study</span>
              <ArrowLongRightIcon width={20} height={20}></ArrowLongRightIcon>
            </span>
          </div>
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8">
          <img src={props.imgLink}></img>
        </div>
      </div>
    </a>
  );
}
