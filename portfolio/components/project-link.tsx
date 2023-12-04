import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface Props {
  title: string;
  chips: string[];
  children: any;
  link: string;
  imgLink: string;
  smImgLink: string;
}

export default function ProjectLink(props: Props) {
  return (
    <a
      href={props.link}
      className="group/project-link transition-color block pt-[0.075rem] px-[0.1rem] rounded-lg lg:rounded-3xl bg-gradient-to-r from-neutral-700/30 via-neutral-600 to-neutral-700/30 
      hover:from-neutral-700/30 hover:via-neutral-400 hover:to-neutral-700/30
      focus:from-neutral-700/30 focus:via-neutral-400 focus:to-neutral-700/30 focus:scale-1025 transition-transform"
    >
      <div className="text-left p-4 lg:p-8 xl:p-10 rounded-lg lg:rounded-3xl bg-neutral-900 group-hover/project-link:bg-neutral-900/90">
        <div className="relative float-right lg:hidden">
          <ArrowLongRightIcon
            width={24}
            height={24}
            className="group-hover/project-link:translate-x-1.5 group-focus/project-link:translate-x-1.5 transition-transform text-neutral-300"
          ></ArrowLongRightIcon>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-4">
          <div className="w-full">
            <h3 className="title-2">{props.title}</h3>
            <div className="mt-1 flex gap-2 flex-wrap">
              {props.chips.map((chip) => (
                <div className="chip">{chip}</div>
              ))}
            </div>
          </div>
          <div className="pt-4 lg:pt-0 w-full flex flex-col justify-end text-neutral-200">
            <p className="text-neutral-200 pb-3 lg:pb-4 text-base lg:lead">
              {props.children}
            </p>
            <span className="text-neutral-400 flex-row items-center gap-2 hidden lg:flex">
              <span className="text-sm">Read case study</span>
              <ArrowLongRightIcon
                width={20}
                height={20}
                className="group-hover/project-link:translate-x-1.5 group-focus/project-link:translate-x-1.5   transition-transform"
              ></ArrowLongRightIcon>
            </span>
          </div>
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8">
          <picture>
            <source media="(min-width: 48rem)" srcSet={props.imgLink}></source>

            <img
              src={props.smImgLink}
              className="rounded-md"
              alt={`Mockups of the project ${props.title}`}
            ></img>
          </picture>
        </div>
      </div>
    </a>
  );
}
