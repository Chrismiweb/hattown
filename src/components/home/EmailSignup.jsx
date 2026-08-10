import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section className="bg-ink-soft text-paper border-t border-line-dark">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[28px] md:text-[38px] leading-none mb-3">Get the Next Drop First</h2>
            <p className="text-[14px] text-concrete">
              City Series releases go fast. Join the list — no spam, just caps.
            </p>
          </div>
          <form className="flex items-end gap-4" onSubmit={handleSubmit}>
            <div className="flex-1">
              <label htmlFor="email" className="font-mono text-[11px] tracking-widest uppercase block mb-2 text-concrete">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@hattown.com"
                className="underline-input focus-ring"
              />
            </div>
            <button type="submit" className="btn btn-on-dark focus-ring">
              {sent ? "Joined" : "Join"} <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
