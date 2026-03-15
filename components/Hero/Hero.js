import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ForestScene = dynamic(() => import("../ForestScene/ForestScene"), {
  ssr: false,
});

const seasons = ["summer", "winter", "monsoon"];

function HeroFallback({ seasonTheme }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: seasonTheme.background }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 22% 15%, rgba(149,213,178,0.24), transparent 55%), radial-gradient(circle at 80% 28%, rgba(45,106,79,0.42), transparent 60%)",
        }}
      />
      <motion.div
        className="absolute -left-16 top-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${seasonTheme.accent}2e` }}
        animate={{ x: [0, 26, 0], y: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-8 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${seasonTheme.secondary}6b` }}
        animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Hero({ season, seasonTheme, onSeasonChange }) {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      const lowPowerDevice = (navigator.hardwareConcurrency || 8) <= 4;
      setShow3D(!mediaQuery.matches && !reducedMotion.matches && !lowPowerDevice);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    reducedMotion.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      reducedMotion.removeEventListener("change", updatePreference);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {show3D ? <ForestScene season={season} seasonTheme={seasonTheme} /> : <HeroFallback seasonTheme={seasonTheme} />}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#081C15]/42 to-[#081C15]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span
            className="inline-flex rounded-full border px-4 py-1 text-xs uppercase tracking-[0.22em]"
            style={{
              borderColor: `${seasonTheme.accent}7d`,
              color: seasonTheme.accent,
              backgroundColor: `${seasonTheme.accent}14`,
            }}
          >
            Seasonal Theme: {season.charAt(0).toUpperCase() + season.slice(1)}
          </span>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {seasons.map((seasonName) => {
              const active = season === seasonName;
              return (
                <button
                  key={seasonName}
                  type="button"
                  onClick={() => onSeasonChange?.(seasonName)}
                  className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition duration-200"
                  style={{
                    borderColor: active ? seasonTheme.accent : `${seasonTheme.accent}78`,
                    backgroundColor: active ? `${seasonTheme.accent}30` : "transparent",
                    color: active ? "#EAF8EF" : "#C9EEDB",
                  }}
                >
                  {seasonName}
                </button>
              );
            })}
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#EAF8EF] md:text-6xl">
            Forest Ecology & Biodiversity Research
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-[#C9EEDB] md:text-xl">
            Exploring ecosystems, understanding biodiversity, and protecting tropical forests.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#research"
              className="rounded-full border px-7 py-3 text-sm font-medium text-[#E8F8EE] backdrop-blur transition duration-300"
              style={{
                borderColor: seasonTheme.accent,
                backgroundColor: `${seasonTheme.accent}1f`,
              }}
            >
              Explore Research
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#team"
              className="rounded-full border px-7 py-3 text-sm font-medium text-[#E8F8EE] transition duration-300 hover:text-white"
              style={{ borderColor: `${seasonTheme.accent}8c` }}
            >
              Meet the Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
