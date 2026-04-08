import React, { useState, useRef, useEffect, useCallback } from "react";
import { useGetSlidesQuery } from "../../redux/features/SiteSlice.js";
import Button from "../ButtonComponent.jsx";
import ErrorMessage from "../shared/ErrorMessage";
import { HomeSkeleton } from "../skeleton/HomeSkeleton.jsx";

/* ─── Keyframes ─────────────────────────────────────────────────────────── */
const STYLE = `
  @keyframes imgWipeIn {
    0%   { clip-path: inset(0 100% 0 0); transform: scale(1.15) translateX(-5%); filter: blur(2px); }
    100% { clip-path: inset(0 0%   0 0); transform: scale(1.05) translateX(0); filter: blur(0px); }
  }
  @keyframes imgWipeOut {
    0%   { clip-path: inset(0 0% 0 0); transform: scale(1.05) translateX(0); filter: blur(0px); }
    100% { clip-path: inset(0 0% 0 100%); transform: scale(1.00) translateX(5%); filter: blur(1px); }
  }
  @keyframes kenBurns {
    0%   { transform: scale(1.05) translate(0, 0) rotate(0deg); }
    25%  { transform: scale(1.08) translate(-1%, -0.5%) rotate(0.2deg); }
    50%  { transform: scale(1.12) translate(-1.5%, -1%) rotate(-0.1deg); }
    75%  { transform: scale(1.09) translate(-0.5%, -0.8%) rotate(0.1deg); }
    100% { transform: scale(1.05) translate(0, 0) rotate(0deg); }
  }
  @keyframes curtainLeft {
    0%   { left: -100%; opacity: 0.8; }
    30%  { left: 0%; opacity: 0.9; }
    70%  { left: 0%; opacity: 0.9; }
    100% { left: 110%; opacity: 0.6; }
  }
  @keyframes barDrop {
    0%   { height: 0; opacity: 0; transform: scaleY(0); }
    50%  { height: 50%; opacity: 0.7; transform: scaleY(0.5); }
    100% { height: 100%; opacity: 1; transform: scaleY(1); }
  }
  @keyframes revealUp {
    0%   { opacity: 0; transform: translateY(40px) scale(0.95); filter: blur(8px); }
    60%  { opacity: 0.8; transform: translateY(10px) scale(0.98); filter: blur(2px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  @keyframes revealRight {
    0%   { opacity: 0; transform: translateX(-50px) scale(0.9); filter: blur(5px); }
    100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
  }
  @keyframes clipLeft {
    0%   { clip-path: inset(0 100% 0 0); opacity: 0; transform: scale(0.95); }
    100% { clip-path: inset(0 0% 0 0); opacity: 1; transform: scale(1); }
  }
  @keyframes counterPop {
    0%   { opacity: 0; transform: translateX(30px) scale(0.7) rotate(10deg); }
    70%  { opacity: 0.9; transform: translateX(5px) scale(1.05) rotate(-2deg); }
    100% { opacity: 1; transform: translateX(0) scale(1) rotate(0deg); }
  }
  @keyframes bracketTL {
    0%   { opacity: 0; transform: translate(-20px, -20px) scale(0.8) rotate(-5deg); }
    100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
  }
  @keyframes bracketBR {
    0%   { opacity: 0; transform: translate(20px, 20px) scale(0.8) rotate(5deg); }
    100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
  }
  @keyframes progFill {
    0%   { width: 0%; transform: scaleX(0); }
    20%  { width: 30%; transform: scaleX(1.1); }
    100% { width: 100%; transform: scaleX(1); }
  }
  @keyframes scanLine {
    0%   { top: -3px; opacity: 0.3; }
    50%  { opacity: 0.8; }
    100% { top: 100%; opacity: 0.2; }
  }
  @keyframes floatUp {
    0%   { opacity: 0; transform: translateY(20px) scale(0.9); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes pulse {
    0%   { transform: scale(1); opacity: 1; }
    50%  { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  /* Triggered by .hs-active class */
  .hs-active .hs-img {
    animation:
      imgWipeIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards,
      kenBurns 12s ease-in-out 1.3s infinite;
  }
  .hs-leaving .hs-img {
    animation: imgWipeOut 1.0s cubic-bezier(0.7, 0, 0.3, 1) forwards;
  }
  .hs-active .hs-bar   { animation: barDrop 1.0s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
  .hs-active .hs-btl   { animation: bracketTL 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.3s both; }
  .hs-active .hs-bbr   { animation: bracketBR 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s both; }
  .hs-active .hs-count { animation: counterPop 1.0s cubic-bezier(0.34,1.56,0.64,1) 0.5s both; }
  .hs-active .hs-label { animation: revealRight 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
  .hs-active .hs-line  { animation: revealUp 1.0s cubic-bezier(0.16,1,0.3,1) both; }
  .hs-active .hs-line:nth-child(1) { animation-delay: 0.5s; }
  .hs-active .hs-line:nth-child(2) { animation-delay: 0.65s; }
  .hs-active .hs-line:nth-child(3) { animation-delay: 0.8s; }
  .hs-active .hs-divider { animation: clipLeft 1.0s cubic-bezier(0.16,1,0.3,1) 0.85s both; }
  .hs-active .hs-btn1    { animation: floatUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.0s both; }
  .hs-active .hs-btn2    { animation: floatUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.15s both; }

  .hs-curtain { animation: curtainLeft 1.2s cubic-bezier(0.7,0,0.3,1) both; }
  .hs-scan    { animation: scanLine 8s linear infinite; }
  .hs-prog    { animation: progFill 5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }

  .hs-nav { 
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  }
  .hs-nav:hover {
    background: rgba(34,63,162,0.2) !important;
    border-color: var(--color-third, #223fa2) !important;
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(34,63,162,0.3);
  }
  .hs-nav:active {
    transform: scale(0.95);
  }

  /* Enhanced dot animations */
  .hs-dot {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .hs-dot:hover {
    transform: scale(1.2);
  }
  .hs-dot.active {
    animation: pulse 2s ease-in-out infinite;
  }
  .hs-dot.active::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s ease-in-out infinite;
  }

  /* Vertical track enhancements */
  .hs-track-dot {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }
  .hs-track-dot:hover {
    transform: scale(1.3);
  }
  .hs-track-dot.active {
    animation: pulse 1.5s ease-in-out infinite;
  }

  /* Text shimmer effect */
  .hs-title-shimmer {
    background: linear-gradient(90deg, currentColor 0%, rgba(255,255,255,0.8) 50%, currentColor 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }
`;

/* ─── Title split into lines with stagger ──────────────────────────────── */
const SplitTitle = ({ text }) => {
  const words = text.split(" ");
  const perLine = Math.ceil(words.length / Math.min(3, words.length));
  const lines = [];
  for (let i = 0; i < words.length; i += perLine)
    lines.push(words.slice(i, i + perLine).join(" "));

  return (
    <>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden leading-[1.06]">
          <span
            className="hs-line block text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl xl:text-[4.2rem] font-black tracking-tight hs-title-shimmer"
            style={{
              color: i === 0 ? "#fdf100" : "rgba(253,241,0,0.82)",
              opacity: 0,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            {line}
          </span>
        </div>
      ))}
    </>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────── */
const HeroSlider = () => {
  const { data: slidesData, isLoading, error } = useGetSlidesQuery();
  const slides = slidesData?.data || [];
  const img_url = import.meta.env.VITE_IMG_URL;

  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [curtain, setCurtain] = useState(false);
  const [progKey, setProgKey] = useState(0);
  const lockRef = useRef(false);
  const timerRef = useRef(null);

  const SLIDE_MS = 1100;
  const AUTOPLAY = 4500;

  const goTo = useCallback(
    (next) => {
      if (lockRef.current || next === current || slides.length < 2) return;
      lockRef.current = true;
      clearTimeout(timerRef.current);

      setLeaving(current);
      setCurtain(true);

      // new slide appears mid-curtain
      setTimeout(() => {
        setCurrent(next);
        setProgKey((k) => k + 1);
        setCurtain(false);
      }, SLIDE_MS * 0.42);

      setTimeout(() => {
        setLeaving(null);
        lockRef.current = false;
      }, SLIDE_MS + 120);
    },
    [current, slides.length],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [goTo, current, slides.length],
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [goTo, current, slides.length],
  );

  useEffect(() => {
    if (slides.length < 2) return;
    timerRef.current = setTimeout(next, AUTOPLAY);
    return () => clearTimeout(timerRef.current);
  }, [current, next, slides.length]);

  if (isLoading) return <HomeSkeleton />;
  if (error) return <ErrorMessage message="Failed to load slides." />;
  if (!slides.length) return null;

  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-slate-950"
    >
      <style>{STYLE}</style>

      {/* Enhanced Grain with animated particles */}
      <div
        className="absolute inset-0 z-5 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
          animation: "shimmer 20s linear infinite",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-4 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-third-color/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `floatUp ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced scan line with glow */}
      <div
        className="hs-scan absolute inset-x-0 h-0.5 z-6 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(34,63,162,0.4),rgba(253,241,0,0.6),rgba(34,63,162,0.4),transparent)",
          boxShadow: "0 0 20px rgba(34,63,162,0.3)",
        }}
      />

      {/* Enhanced curtain with gradient */}
      {curtain && (
        <div
          key={`curtain-${progKey}`}
          className="hs-curtain absolute top-0 bottom-0 z-40 pointer-events-none"
          style={{
            width: "60%",
            left: "-100%",
            background: "linear-gradient(90deg, var(--color-third,#223fa2) 0%, rgba(34,63,162,0.8) 40%, rgba(253,241,0,0.3) 70%, transparent 100%)",
            opacity: 0.35,
            filter: "blur(1px)",
          }}
        />
      )}

      {/* Slides */}
      {slides.map((slide, i) => {
        const isAct = i === current;
        const isLeav = i === leaving;
        if (!isAct && !isLeav) return null;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center overflow-hidden ${
              isAct ? "hs-active z-10" : "hs-leaving z-9"
            }`}
          >
            {/* ── Image: clip-path wipe from LEFT → RIGHT ── */}
            <div
              className="hs-img absolute inset-0 will-change-transform"
              style={{
                backgroundImage: `url(${img_url}/${slide.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: isLeav ? undefined : "inset(0 100% 0 0)",
              }}
            />

            {/* Enhanced overlays with better gradients */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(120deg,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.7) 35%,rgba(34,63,162,0.1) 60%,rgba(0,0,0,0.2) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,0.6) 0%,transparent 25%,transparent 70%,rgba(0,0,0,0.9) 100%)",
              }}
            />

            {/* Enhanced left accent bar with glow */}
            <div
              className="hs-bar absolute left-0 top-0 w-1 z-10"
              style={{
                background: "var(--color-third,#223fa2)",
                boxShadow: "3px 0 30px rgba(34,63,162,0.7), 6px 0 60px rgba(34,63,162,0.4)",
                height: "100%",
                opacity: 0,
              }}
            />

            {/* Enhanced corner brackets with glow */}
            <div
              className="hs-btl absolute top-6 left-6 sm:top-10 sm:left-8 z-10"
              style={{ opacity: 0 }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 border-t-3 border-l-3"
                style={{ 
                  borderColor: "var(--color-third,#223fa2)",
                  filter: "drop-shadow(0 0 10px rgba(34,63,162,0.6))",
                }}
              />
            </div>

            {/* Corner BR */}
            <div
              className="hs-bbr absolute bottom-14 right-6 sm:bottom-20 sm:right-10 z-10"
              style={{ opacity: 0 }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 border-b-3 border-r-3"
                style={{ 
                  borderColor: "var(--color-third,#223fa2)",
                  filter: "drop-shadow(0 0 10px rgba(34,63,162,0.6))",
                }}
              />
            </div>

            {/* Slide counter */}
            <div
              className="hs-count absolute top-8 right-8 sm:top-12 sm:right-16 z-10 flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span
                className="font-black text-3xl sm:text-5xl tabular-nums leading-none"
                style={{
                  color: "var(--color-third,#223fa2)",
                  filter: "drop-shadow(0 0 20px rgba(34,63,162,0.58))",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                <div
                  className="h-px w-10 sm:w-14"
                  style={{
                    background:
                      "linear-gradient(90deg,rgba(255,255,255,0.42),transparent)",
                  }}
                />
                <span className="text-white/30 text-xs tabular-nums tracking-widest font-light">
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 sm:px-14 md:px-20 lg:px-28 max-w-4xl">
              {/* Label */}
              <div
                className="hs-label flex items-center gap-3 mb-5"
                style={{ opacity: 0 }}
              >
                <div
                  className="h-0.5 w-8 sm:w-14 shrink-0 rounded-full"
                  style={{ background: "var(--color-third,#223fa2)" }}
                />
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em]"
                  style={{ color: "var(--color-third,#223fa2)" }}
                >
                  Namuna Vidhya Sadan
                </span>
                <div
                  className="h-0.5 w-4 shrink-0 rounded-full"
                  style={{ background: "rgba(34,63,162,0.3)" }}
                />
              </div>

              {/* Title */}
              <div className="mb-6 sm:mb-8">
                <SplitTitle text={slide.title} />
              </div>

              {/* Divider */}
              <div
                className="hs-divider flex items-center gap-3 mb-8 sm:mb-11"
                style={{ opacity: 0 }}
              >
                <div
                  className="h-0.5 w-16 sm:w-24 rounded-full"
                  style={{ background: "var(--color-third,#223fa2)" }}
                />
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    background: "var(--color-third,#223fa2)",
                    boxShadow: "0 0 14px var(--color-third,#223fa2)",
                  }}
                />
                <div
                  className="h-0.5 w-8 sm:w-12 rounded-full"
                  style={{ background: "rgba(34,63,162,0.22)" }}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="hs-btn1" style={{ opacity: 0 }}>
                  <Button 
                    to="/about" 
                    size="lg" 
                    className="bg-third-color hover:bg-third-color/90 text-white shadow-lg hover:shadow-xl focus:ring-third-color tracking-widest uppercase"
                  >
                    About Us
                  </Button>
                </div>
                <div className="hs-btn2" style={{ opacity: 0 }}>
                  <Button 
                    to="/gallery" 
                    size="lg" 
                    className="border border-third-color text-third-color hover:bg-third-color hover:text-white shadow-lg hover:shadow-xl focus:ring-third-color tracking-widest uppercase bg-transparent"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.75 z-20"
              style={{
                background: "var(--color-third,#223fa2)",
              }}
            />
          </div>
        );
      })}

      {/* Enhanced pagination dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) => {
          const isAct = i === current;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`hs-dot relative overflow-hidden rounded-full transition-all duration-500 ${isAct ? 'active' : ''}`}
              style={{
                width: isAct ? 35 : 10,
                height: 10,
                background: isAct
                  ? "var(--color-third,#223fa2)"
                  : "rgba(255,255,255,0.3)",
                boxShadow: isAct ? "0 0 15px rgba(34,63,162,0.7), 0 0 30px rgba(34,63,162,0.4)" : "0 2px 8px rgba(0,0,0,0.2)",
                border: isAct ? "2px solid rgba(253,241,0,0.3)" : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {isAct && (
                <div
                  key={progKey}
                  className="hs-prog absolute inset-y-0 left-0 h-full rounded-full"
                  style={{ 
                    background: "linear-gradient(90deg, rgba(253,241,0,0.8), rgba(255,255,255,0.6))", 
                    width: 0,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Enhanced vertical track */}
      <div className="absolute right-4 sm:right-6 bottom-20 z-20 flex flex-col items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`hs-track-dot rounded-full transition-all duration-400 ${i === current ? 'active' : ''}`}
            style={{
              width: i === current ? 4 : 3,
              height: i === current ? 28 : 12,
              background:
                i === current
                  ? "var(--color-third,#223fa2)"
                  : "rgba(255,255,255,0.25)",
              boxShadow:
                i === current ? "0 0 12px rgba(34,63,162,0.8), 0 0 24px rgba(34,63,162,0.4)" : "0 1px 4px rgba(0,0,0,0.2)",
              border: i === current ? "1px solid rgba(253,241,0,0.3)" : "1px solid rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>

      {/* Enhanced nav buttons */}
      <button
        className="hs-nav absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 sm:w-14 sm:h-14 rounded-full
          text-white flex items-center justify-center group"
        style={{
          background: "rgba(34,63,162,0.15)",
          border: "2px solid rgba(34,63,162,0.3)",
          backdropFilter: "blur(15px)",
        }}
        onClick={prev}
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="hs-nav absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 sm:w-14 sm:h-14 rounded-full
          text-white flex items-center justify-center group"
        style={{
          background: "rgba(34,63,162,0.15)",
          border: "2px solid rgba(34,63,162,0.3)",
          backdropFilter: "blur(15px)",
        }}
        onClick={next}
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSlider;
