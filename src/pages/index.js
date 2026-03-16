import { motion } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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
  return (
    <div className="relative overflow-x-clip bg-[#081C15] text-[#E8F8EE]">
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-[#123326]/40 p-8 shadow-[0_20px_52px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#63D3A6]">
              About The Lab
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-6xl">Introduction to the Forest Lab</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-[#C8E9D8]">
              Our lab studies tropical forest ecosystems through integrated ecological observation,
              biodiversity analytics, and geospatial methods to support conservation-focused decision
              making.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {introTopics.map((topic, index) => (
                <motion.article
                  key={topic.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
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

            <div className="mt-10 rounded-2xl border border-[#63D3A650] bg-[#0E281D]/65 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#63D3A6]">Leadership</p>
              <h3 className="mt-2 text-3xl font-semibold text-[#F0FBF5]">Headed by Sreenath Subrahmanyam</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#C4E7D4]">
                The lab direction is led by Sreenath Subrahmanyam with a focus on ecological impact,
                biodiversity science, and conservation outcomes.
              </p>
            </div>

          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
