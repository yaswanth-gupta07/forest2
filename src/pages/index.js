import { motion } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-[#081C15] text-[#E8F8EE]">
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
            <h2 className="text-4xl font-semibold md:text-6xl">About</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-[#C8E9D8]">
              The Forest Ecology Lab focuses on tropical forest ecosystems and biodiversity.
              We use field observation and geospatial methods to support conservation.
              Our work aims to inform science-based decision making for forest management.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
