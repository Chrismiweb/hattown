import { useEffect, useState } from "react";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    src: "/video/photo_2026-08-10_19-14-42.jpg",
    alt: "Model wearing a black Hattown structured cap",
  },
  {
    src: "/video/photo_2026-08-10_19-14-39.jpg",
    alt: "Hattown fitted cap, studio detail shot",
  },
  {
    src: "/video/photo_2026-08-10_19-14-40.jpg",
    alt: "Model wearing a Hattown snapback on the street",
  },
];

const SLIDE_DURATION = 5000; // ms between auto-advances

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink text-paper">
      {/* Crossfading, slow-zooming slideshow */}
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-[1.05]
            transition-opacity duration-[1500ms] ease-in-out
            ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{
            transform: i === index ? "scale(1.06)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: i === index ? "7000ms, 7000ms" : "1500ms, 0ms",
            transitionTimingFunction: "ease-out",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/90" />

      {/* Eyebrow + CTA, top of frame */}
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 pt-8 md:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Tag variant="signal">New Drop</Tag>
          <span className="font-mono text-[11px] tracking-widest uppercase text-paper/70">
            City Series — Vol. 04
          </span>
        </div>
        <Button to="/shop" variant="onDark" className="hidden sm:inline-flex">
          Shop the Drop <ArrowRight size={15} />
        </Button>
      </div>

      {/* Slide indicators */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 mt-6 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className="group py-2 focus-ring"
          >
            <span
              className={`block h-[2px] transition-all duration-300 ${
                i === index ? "w-8 bg-signal" : "w-4 bg-paper/40 group-hover:bg-paper/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Oversized headline, bleeding off the bottom edge — echoes the
          Goorin "BLACK OUT" reference: huge cropped type anchored low */}
      <div className="absolute -bottom-[3.5vw] left-0 right-0 overflow-hidden pointer-events-none select-none">
        <h1 className="font-display leading-[0.82] text-[19vw] md:text-[15vw] pl-4 md:pl-8 whitespace-nowrap">
          HATTOWN
        </h1>
      </div>
    </section>
  );
}