// const ITEMS = ["Structured Fits", "Hand-Finished Patches", "Small-Batch Drops", "Since 2019", "Made for the City"];
const ITEMS = [
  "Be Yourself",
  "Stay Humble",
  "Move Different",
  "Wear Your Identity",
  "Made for Expression",
];
export default function MarqueeStrip() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-[black] border-y border-ink">
      <div className="flex whitespace-nowrap animate-marquee py-3">
        {track.map((t, i) => (
          <span key={i} className="font-mono text-[12px] tracking-widest uppercase flex items-center text-white">
            {t}
            <span className="mx-6">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
