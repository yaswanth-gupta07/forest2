import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ResearchAreas from "../../components/ResearchAreas/ResearchAreas";
import Gallery from "../../components/Gallery/Gallery";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";

function seasonByMonth(month) {
  if (month >= 3 && month <= 6) return "summer";
  if (month >= 7 && month <= 9) return "monsoon";
  return "winter";
}

const seasonThemes = {
  summer: {
    primary: "#1B4332",
    secondary: "#2D6A4F",
    accent: "#E7C978",
    background: "#081C15",
  },
  monsoon: {
    primary: "#1B4332",
    secondary: "#2D6A4F",
    accent: "#95D5B2",
    background: "#081C15",
  },
  winter: {
    primary: "#1E3A35",
    secondary: "#2B5F56",
    accent: "#B8E0D2",
    background: "#081C15",
  },
};

function TopicIcon({ children }) {
  return (
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#123326]/50 text-[#E8F8EE]">
      {children}
    </div>
  );
}

const introTopics = [
  {
    title: "Forest Ecology",
    description: "Ecosystem processes, regeneration cycles, and habitat function.",
    icon: <TopicIcon>FE</TopicIcon>,
  },
  {
    title: "Biodiversity",
    description: "Species richness, trophic interactions, and conservation signals.",
    icon: <TopicIcon>BD</TopicIcon>,
  },
  {
    title: "Climate Research",
    description: "Carbon fluxes, canopy microclimate, and climate adaptation science.",
    icon: <TopicIcon>CR</TopicIcon>,
  },
  {
    title: "Remote Sensing",
    description: "Satellite and drone-based observation for landscape-scale analytics.",
    icon: <TopicIcon>RS</TopicIcon>,
  },
];

export default function HomePage() {
  const pageRef = useRef(null);
  const [season, setSeason] = useState(() => seasonByMonth(new Date().getMonth() + 1));
  const seasonTheme = useMemo(() => seasonThemes[season] || seasonThemes.summer, [season]);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const canopyY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const mistY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={pageRef}
      className="relative overflow-x-clip bg-[#081C15] text-[#E8F8EE]"
      style={{ backgroundColor: seasonTheme.background }}
    >
      <Navbar seasonTheme={seasonTheme} />
      <Hero season={season} seasonTheme={seasonTheme} onSeasonChange={setSeason} />

      <motion.div
        aria-hidden
        style={{ y: canopyY }}
        className="pointer-events-none absolute left-0 right-0 top-[66vh] z-0 h-[65vh]"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_22%_24%,rgba(45,106,79,0.4),transparent_70%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: mistY }}
        className="pointer-events-none absolute left-0 right-0 top-[118vh] z-0 h-[72vh]"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_78%_24%,rgba(149,213,178,0.2),transparent_70%)]" />
      </motion.div>

      <main className="relative z-10">
        <section id="intro" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-[#123326]/40 p-8 shadow-[0_20px_52px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-12"
          >
            <p className="text-sm uppercase tracking-[0.2em]" style={{ color: seasonTheme.accent }}>
              Section 1
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">About the Forest Research Lab</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-[#C8E9D8]">
              Placeholder introduction text: our lab studies tropical forest ecosystems through integrated
              ecological observation, biodiversity analytics, and geospatial methods to support
              conservation-focused decision making.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {introTopics.map((topic, index) => (
                <motion.article
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-[#0E281D]/60 p-4"
                >
                  <div className="flex items-start gap-3">
                    {topic.icon}
                    <div>
                      <h3 className="text-base font-semibold text-[#E8F8EE]">{topic.title}</h3>
                      <p className="mt-1 text-sm text-[#C4E7D4]">{topic.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <ResearchAreas seasonTheme={seasonTheme} />
        <Gallery seasonTheme={seasonTheme} />
        <Team seasonTheme={seasonTheme} />
      </main>

      <Footer seasonTheme={seasonTheme} />
    </div>
  );
}
