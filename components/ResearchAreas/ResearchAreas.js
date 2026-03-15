import Image from "next/image";
import { motion } from "framer-motion";

const researchTopics = [
  {
    title: "Invasion Ecology",
    description: "Mapping spread dynamics of invasive species across sensitive forest corridors.",
  },
  {
    title: "Forest Dynamics",
    description: "Understanding long-term structural change, regeneration, and disturbance response.",
  },
  {
    title: "Carbon & Biomass Estimation",
    description: "Estimating carbon stocks and biomass distribution using integrated field data.",
  },
  {
    title: "Biodiversity Monitoring",
    description: "Combining acoustic and visual sampling to track species richness over time.",
  },
  {
    title: "Geospatial Ecology",
    description: "Using remote sensing and GIS models to decode ecosystem-scale ecological trends.",
  },
];

export default function ResearchAreas({ seasonTheme }) {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <p className="text-sm uppercase tracking-[0.2em]" style={{ color: seasonTheme.accent }}>
          Section 2
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#E8F8EE] md:text-5xl">Research Areas</h2>
        <p className="mt-5 max-w-2xl text-[#C5E8D6]">
          The lab integrates field ecology, biodiversity monitoring, and geospatial science for
          research-backed conservation outcomes.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchTopics.map((topic, index) => (
          <motion.article
            key={topic.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#112E22]/40"
          >
            <div
              className="relative aspect-[16/9] overflow-hidden"
              style={{ filter: `hue-rotate(${index * 28}deg)` }}
            >
              <Image
                src="/placeholders/research.svg"
                alt={`${topic.title} visual`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#EBF8F0]">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#C6E8D8]">{topic.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
