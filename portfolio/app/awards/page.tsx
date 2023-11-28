export default function Awards() {
  return (
    <main className="mt-0 px-0">
      <section className="grid grid-cols-5 grid-rows-4 gap-4 gap-20 overflow-hidden px-0">
        <div>
          <img
            src="/awards/1.png"
            className="rounded-xl relative right-40 scale-125"
          ></img>
        </div>
        <div>
          <img
            src="/awards/2.png"
            className="rounded-xl relative top-12 scale-125"
          ></img>
        </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div className="row-span-2">
          <img src="/awards/3.png" className="rounded-xl relative"></img>
        </div>
        <div className="col-span-3 row-span-2">
          <div className="flex h-full items-center flex-col justify-center">
            <h1 className="headline">Awards</h1>
            <p className="large-title">Celebrating moments of excellence.</p>
          </div>
        </div>
        <div className="row-span-2 col-start-5">
          <img
            src="/awards/5.png"
            className="rounded-xl relative left-12 scale-150"
          ></img>
        </div>
        <div className="row-start-4">22</div>
        <div className="row-start-4">23</div>
        <div className="row-start-4">24</div>
        <div className="row-start-4">25</div>
        <div className="row-start-4">
          <img
            src="/awards/4.png"
            className="rounded-xl relative scale-150"
          ></img>
        </div>
      </section>
    </main>
  );
}
