import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

interface Props {
  children?: any;
  firstName: string;
  lastName: string;
  title: string;
  heading?: string;
  imgLink: string;
  comment?: boolean;
  commentLink?: string;
}

export default function Testimonial(props: Props) {
  return (
    <div className="testimonial border border-neutral-800/60 bg-neutral-900/30 rounded-xl p-4 lg:px-7 lg:py-6 text-left mb-4 md:mb-0 xl:mb-6 last:mb-0 flex flex-col">
      <div className="flex gap-4 order-last">
        <div className="w-[2.75rem] pt-1">
          <img
            src={props.imgLink}
            className="w-full rounded-full"
            alt={`LinkedIn profile picture of ${props.firstName} ${props.lastName}`}
            width={100}
            height={100}
          ></img>
        </div>

        <div>
          <h3 className="pb-0 text-neutral-200">
            {props.firstName} {props.lastName}
          </h3>
          {props.comment === undefined && props.commentLink === undefined ? (
            <p className="text-sm text-neutral-400 pt-1 pb-0">{props.title}</p>
          ) : (
            <a
              href={props.commentLink}
              className="inline-flex gap-1.5 items-center underline underline-offset-4 decoration-neutral-400 text-xs
               focus:decoration-blue-400
               hover:decoration-blue-400 group/link transition-colors"
            >
              <span className="text-sm text-neutral-400 pb-0 group-hover/link:text-orange-400 transition-colors">
                View comment on LinkedIn
              </span>
              <ArrowTopRightOnSquareIcon
                width={20}
                height={20}
                className="text-neutral-400 group-hover/link:text-orange-400 group-focus/link:text-orange-400 transition-colors"
              ></ArrowTopRightOnSquareIcon>
            </a>
          )}
        </div>
      </div>
      <p className="pb-4 lg:pb-6 leading-relaxed text-neutral-300">
        {props.children}
      </p>
    </div>
  );
}
