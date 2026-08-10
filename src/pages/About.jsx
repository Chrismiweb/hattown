import Skyline from "../components/ui/Skyline";
import Tag from "../components/ui/Tag";

const VALUES = [
  { title: "Hand-Finished", body: "Every patch is placed and stitched within the city, not shipped in pre-made." },
  { title: "Small-Batch", body: "Drops are cut in limited runs. When a colorway sells out, it doesn't come back." },
  { title: "Built to Last", body: "Structured buckram fronts, reinforced eyelets — hats made to survive a decade of wear." },
];

export default function About() {
  return (
    <>
      <section className="relative bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
          <Tag className="!border-paper !text-paper mb-8">Our Story</Tag>
          <h1 className="text-[14vw] md:text-[6vw] leading-[0.9] lg:text-[88px]">
            A City Built
            <br />
            on Caps
          </h1>
        </div>
        <div className="relative h-[40vh] md:h-[54vh] w-full">
          <img
            src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1600&auto=format&fit=crop"
            alt="Hattown workshop, caps in production"
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/10 to-ink/60" />
        </div>
        <Skyline fill="#F5F4EF" height={40} />
      </section>

      <section className="max-w-[900px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <p className="text-[18px] md:text-[22px] leading-relaxed mb-6 normal-case font-sans">
          Hattown started as a market stall two blocks from the harbor — one
          folding table, a stack of blanks, and a hand-cut patch of the
          skyline. No investors, no factory contract, just a founder who
          couldn't find a cap that looked like where they were from.
        </p>
        <p className="text-[15px] leading-relaxed text-concrete normal-case font-sans">
          Ten years later, every cap is still finished within city limits. We
          keep runs small on purpose — when a colorway is gone, it stays
          gone. The lighthouse on our mark points back to the harbor where it
          all started, and the skyline is a reminder that this brand belongs
          to the block, not a boardroom.
        </p>
      </section>

      <section className="bg-paper-dim border-t border-line">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <h2 className="text-[28px] md:text-[36px] leading-none mb-10">What We Stand On</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-ink pt-5">
                <h3 className="text-[18px] mb-2">{v.title}</h3>
                <p className="text-[14px] leading-relaxed text-concrete normal-case font-sans">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
