import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Pause } from "lucide-react";

/**
 * Brand statement — full-bleed autoplaying video background with
 * a bottom-left copy block and a play/pause toggle in the corner.
 * Modeled on the Goorin Bros "Since 1895" homepage hero.
 *
 * Swap VIDEO_SRC / POSTER_SRC for real brand footage when it's ready.
 */
const VIDEO_SRC = "/video/hattowen.mp4";
const POSTER_SRC = "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1600&auto=format&fit=crop";

export default function BrandStatement() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden bg-ink text-paper">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-ink/10" />

      <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-8 flex flex-col justify-end pb-12 md:pb-16">
        <p className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-signal mb-3">
          Hattown Hits Different
        </p>
        <h2 className="font-display leading-[0.9] text-[14vw] sm:text-[9vw] md:text-[5vw] lg:text-[64px] mb-8">
          Since 2019
        </h2>
        <Link
          to="/about"
          className="inline-flex items-center gap-3 border border-paper text-paper font-mono text-[12px] tracking-widest uppercase px-6 py-4 w-fit transition-colors duration-200 hover:bg-paper hover:text-ink focus-ring"
        >
          Watch Our Story <ArrowRight size={14} />
        </Link>
      </div>

      <button
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-11 h-11 rounded-full bg-paper/90 text-ink flex items-center justify-center focus-ring hover:bg-paper transition-colors"
      >
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>
    </section>
  );
}