import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import image1 from "../../images/1.jpeg";
import image3 from "../../images/3.jpeg";
import image5 from "../../images/5.jpeg";
import image8 from "../../images/8.jpeg";

const researchTopics = [
  {
    title: "Invasion Ecology",
    description: "Mapping spread dynamics of invasive species across sensitive forest corridors.",
    image: image3,
  },
  {
    title: "Forest Dynamics",
    description: "Understanding long-term structural change, regeneration, and disturbance response.",
    image: image8,
  },
  {
    title: "Carbon & Biomass Estimation",
    description: "Estimating carbon stocks and biomass distribution using integrated field data.",
    image: image5,
  },
  {
    title: "Biodiversity Monitoring",
    description: "Combining acoustic and visual sampling to track species richness over time.",
    image: image1,
  },
  {
    title: "Geospatial Ecology",
    description: "Using remote sensing and GIS models to decode ecosystem-scale ecological trends.",
    image: image3,
  },
];

function ImageWithFallback({ src, alt }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className="object-cover transition duration-700 group-hover:scale-110"
      onError={() => setCurrentSrc("/placeholders/gallery.svg")}
    />
  );
}

export default function ResearchAreas() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-24 md:pt-16 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <h2 className="mt-3 text-4xl font-semibold text-[#E8F8EE] md:text-6xl">Research Areas</h2>
        <p className="mt-5 max-w-2xl text-[#C5E8D6]">
          The lab integrates field ecology, biodiversity monitoring, and geospatial science for
          research-backed conservation outcomes.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchTopics.map((topic, index) => (
          <motion.button
            key={topic.title}
            type="button"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-[#112E22]/40 text-left shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
            onClick={() => setSelectedTopic(topic)}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <ImageWithFallback src={topic.image} alt={`${topic.title} visual`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07170f]/70 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#EBF8F0]">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#C6E8D8]">{topic.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedTopic ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#020705]/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTopic(null)}
          >
            <motion.div
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0C241A]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback src={selectedTopic.image} alt={selectedTopic.title} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#EBF8F0]">{selectedTopic.title}</h3>
                <p className="mt-4 text-[#C6E8D8] leading-relaxed">{selectedTopic.description}</p>
              </div>
              <div className="flex justify-end border-t border-white/10 px-6 pb-6 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedTopic(null)}
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm text-[#E4F5EC]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
