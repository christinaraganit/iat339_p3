interface Props {
  text: string;
  link: string;
}

export default function HeaderLink(props: Props) {
  return (
    <a
      href={props.link}
      className="w-fit group/link pointer-events-auto block"
      tabIndex={0}
    >
      <span className="p-2 block text-neutral-300 font-medium text-sm group-hover/link:text-orange-300 transition-colors">
        {props.text}
      </span>
      <div className="h-[0.125rem] opacity-0 w-full bg-gradient-to-r from-neutral-950 via-blue-400 to-neutral-950 group-hover/link:opacity-50 transition-opacity"></div>
    </a>
  );
}
