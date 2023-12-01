interface Props {
  text: string;
  link: string;
  isPrimary?: boolean;
}

export default function Button(props: Props) {
  if (!props.isPrimary) {
    return (
      <a
        href={props.link}
        className="group-hover/button block w-fit py-[0.0625rem] pt-[0.0625rem] pb-0 rounded-lg 
      bg-gradient-to-r from-neutral-900 via-neutral-500/60 to-neutral-900
      hover/button:from-neutral-800/60 hover/button:via-neutral-500 hover/button:to-neutral-800/60  focus/button:from-neutral-800/60 focus/button:via-neutral-500 focus/button:to-neutral-800/60 transition-transform focus/button:scale-1025 border-l border-r border-neutral-700/[18%]"
      >
        <div className="text-neutral-300/90 font-medium tracking-tight block px-4 py-2 bg-neutral-800/90 hover/button:bg-neutral-800/60 hover/button:cursor-pointer rounded-md transition-colors">
          {props.text}
        </div>
      </a>
    );
  } else {
    return (
      <a
        href={props.link}
        className="group-hover/button block w-fit py-[0.0625rem] pt-[0.0625rem] pb-0 rounded-lg 
                  bg-gradient-to-r from-neutral-800/60 via-blue-500 to-neutral-800/60 hover/button:cursor-pointer hover/button:via-blue-400"
      >
        <div className="text-blue-50 tracking-tight block px-4 py-2 bg-blue-800/60 hover/button:bg-blue-800/60 hover/button:cursor-pointer rounded-md transition-colors hover/button:shadow-lg hover/button:shadow-blue-400/[18%] transition-shadow">
          {props.text}
        </div>
      </a>
    );
  }
}
