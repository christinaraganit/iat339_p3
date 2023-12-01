interface Props {
  link: string;
  text: string;
}

export default function Link(props: Props) {
  return (
    <a
      href={props.link}
      className="inline-flex flex-wrap hover:text-teal-300 focus:text-teal-300 group/link"
    >
      <span className="underline break-normal">{props.text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
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
