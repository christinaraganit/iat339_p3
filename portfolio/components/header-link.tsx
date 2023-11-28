interface Props {
  text: string;
  link: string;
}

export default function HeaderLink(props: Props) {
  return (
    <a
      href={props.link}
      className="w-fit group/link pointer-events-auto"
      tabIndex={0}
    >
      <span className="py-3 px-2 block text-neutral-50 font-medium text-sm group-hover/link:text-purple-300 transition-colors">
        {props.text}
      </span>
      <div className="h-[2px] opacity-0 w-full bg-gradient-to-r from-neutral-950/0 via-purple-400 to-neutral-950/0 group-hover/link:opacity-50 transition-opacity"></div>
    </a>
  );
}
