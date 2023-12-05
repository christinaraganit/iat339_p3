export default function HighlightedSection() {
  return (
    <section>
      <div className="bg-neutral-900/60  rounded-2xl">
        <div className="bg-gradient-to-r from-neutral-950 via-amber-500 to-neutral-950 h-[0.0625rem] opacity-60 rounded-2xl"></div>
        <div className="p-4 lg:p-6 lg:p-12 flex flex-col items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/[9%] to-neutral-950/60 rounded-2xl">
          <div className="rounded-full p-[0.125rem] bg-gradient-to-b from-amber-500 to-amber-500/0 w-fit mb-3">
            <div className="bg-neutral-900 p-1.5 rounded-full">
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C9.238 4 7 6.238 7 9a1 1 0 0 0 2 0c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .816-.199 1.294-.438 1.629-.262.365-.625.638-1.128.985l-.116.078c-.447.306-1.023.699-1.469 1.247-.527.648-.849 1.467-.849 2.561v.5a1 1 0 1 0 2 0v-.5c0-.656.178-1.024.4-1.299.257-.314.603-.552 1.114-.903l.053-.037c.496-.34 1.133-.786 1.62-1.468C16.7 11.081 17 10.183 17 9c0-2.762-2.238-5-5-5ZM12 21.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                  fill="#f59e0b"
                />
              </svg>
            </div>
          </div>
          <h2 className="headline pb-3 text-amber-500 mb-4">Framing</h2>
          <p className="title-1-no-gradient text-white opacity-90 pb-0 text-center max-w-full">
            How might we offer victims of domestic violence a <em>discreet</em>{" "}
            way to report incidents of abuse and facilitate their access to the
            necessary aid?
          </p>
        </div>
      </div>
    </section>
  );
}
