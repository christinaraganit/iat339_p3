interface Props {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  children: any;
  skills: string[];
}

export default function Experience(props: Props) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col pt-1.5 gap-0 items-center w-6">
        <div className="w-2 h-2 bg-neutral-700 rounded-full"></div>
        <div className="w-[0.063rem] block rounded-full h-full bg-neutral-800"></div>
      </div>
      <div className="flex flex-col">
        <h3 className="title-5">
          {props.role} at {props.company}
        </h3>
        <span className="text-sm text-neutral-400 block order-first mb-1.5 font-light">
          {props.startDate}–{props.endDate}
        </span>
        <p className="text-neutral-400 mt-1">{props.children}</p>
        <div className="flex inline-flex gap-2 flex-wrap">
          {props.skills.map((skill) => (
            <div className="chip">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
