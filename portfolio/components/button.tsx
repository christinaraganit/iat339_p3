interface Props {
  text: string;
  link: string;
}

export default function Button(props: Props) {
  return (
    <a
      href={props.link}
      className="group-hover/button block w-fit py-[0.0625rem] pt-[0.0625rem] pb-0 rounded-lg 
      bg-gradient-to-r from-neutral-900 via-neutral-400/60 to-neutral-900
      hover/button:from-neutral-800/60 hover/button:via-neutral-500 hover/button:to-neutral-800/60"
    >
      <div className="text-neutral-200 block px-4 py-2 bg-neutral-800/90 hover/button:bg-neutral-800/60 rounded-md transition-colors">
        {props.text}
      </div>
    </a>
  );
}
