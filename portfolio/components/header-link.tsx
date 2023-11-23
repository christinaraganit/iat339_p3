interface Props {
  text: string;
  link: string;
}

export default function HeaderLink(props: Props) {
  return (
    <a href={props.link} className="block w-fit group/link">
      <span className="py-3 block text-neutral-50 font-medium text-sm group-hover/link:text-orange-400 transition-colors transition-opacity transition-all">
        {props.text}
      </span>
      <div className="h-[1px] opacity-0 w-full bg-gradient-to-r from-neutral-950 via-orange-400 to-neutral-950 group-hover/link:opacity-50"></div>
    </a>
  );
}
