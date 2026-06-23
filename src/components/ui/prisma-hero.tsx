import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.15em] -right-[0.32em] text-[0.32em]" style={{ color: "#E1E0CC" }}>*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- PrismaHero ---------------- */
interface PrismaHeroProps {
  onEstimatorClick?: () => void;
}

const PrismaHero = ({ onEstimatorClick }: PrismaHeroProps) => {
  const handleEstimatorClick = () => {
    if (onEstimatorClick) {
      onEstimatorClick();
    } else {
      const el = document.getElementById("estimator");
      if (el) {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };


  return (
    <section className="h-screen w-full relative">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] border-[3px] border-white/5 shadow-2xl">
        
        {/* Background image container with subtle slow-pan animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes heroPan {
              0% { transform: scale(1.06) translate(0, 0); }
              100% { transform: scale(1.1) translate(-1%, -0.5%); }
            }
            .animate-hero-pan {
              animation: heroPan 30s ease-in-out infinite alternate;
            }
          `}} />
          <div 
            className="absolute inset-0 bg-cover bg-center animate-hero-pan"
            style={{ backgroundImage: `url('https://img1.wsimg.com/isteam/ip/426ef587-78bb-4986-95b4-3c780d59c7a8/IMG_9470.jpeg')` }}
          />
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay bg-black/15" />

        {/* Gradient overlays to ensure high text contrast and seamless design flow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

        {/* Responsive Hero content area */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 sm:px-10 sm:pb-16 md:px-14 md:pb-20 z-10">
          <div className="grid grid-cols-12 items-end gap-6 sm:gap-8">
            
            {/* Massive visual display header (Col span 12 to 8) */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[25vw] sm:text-[23vw] md:text-[21vw] lg:text-[18vw] xl:text-[17vw] 2xl:text-[16vw] uppercase text-left selection:bg-brand-accent/30"
                style={{ color: "#E1E0CC", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <WordsPullUp text="ELITE" showAsterisk />
              </h1>
            </div>

            {/* Information card and pill call to action (Col span 12 to 4) */}
            <div className="col-span-12 flex flex-col gap-6 pb-2 lg:col-span-4 lg:pb-6">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs text-[#E1E0CC]/80 sm:text-sm md:text-base font-light text-left leading-[1.25]"
                style={{ color: "rgba(225, 224, 204, 0.8)", lineHeight: 1.25, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Elite Pour Dynamics is Melbourne's premium crew of concrete specialists, pouring perfection. We craft high-quality residential slabs, premium exposed aggregate driveways, and structural block retaining walls engineered to last.
              </motion.p>

              {/* Pill Button precisely aligned to the layout design */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center"
              >
                <button
                  onClick={handleEstimatorClick}
                  className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Free Estimator
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </span>
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
