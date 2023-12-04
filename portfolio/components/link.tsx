interface Props {
  link: string;
  text: string;
}

export default function Link(props: Props) {
  return (
    <a
      href={props.link}
      className="inline flex-wrap hover:text-orange-300 focus:text-orange-300 group/link underline-offset-4"
    >
      <span className="underline">{props.text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline w-4 h-4 -translate-y-1.5 group-hover/link:-translate-y-2 group-hover/link:translate-x-0.5 transition-transform"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  );
}
