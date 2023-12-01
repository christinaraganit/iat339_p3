interface Props {
  children?: any;
  firstName: string;
  lastName: string;
  title: string;
}

export default function Testimonial(props: Props) {
  return (
    <div className="testimonial border border-neutral-800/60 bg-neutral-900/30 rounded-xl p-4 lg:px-7 lg:py-6 text-left mb-4 md:mb-0 xl:mb-6 last:mb-0 flex flex-col">
      <div className="flex gap-4 order-last">
        <div className="w-[2.75rem] pt-1">
          <img src="placeholder.png" className="w-full rounded-full"></img>
        </div>
        <div>
          <h3 className="pb-1 text-neutral-200">
            {props.firstName} {props.lastName}
          </h3>
          <p className="text-sm text-neutral-400 pb-0">{props.title}</p>
        </div>
      </div>
      <p className="pb-5 lg:pb-6 leading-relaxed text-neutral-300">
        {props.children}
      </p>
    </div>
  );
}
