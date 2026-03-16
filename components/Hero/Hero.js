import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage1 from "../../images/1.jpeg";
import heroImage3 from "../../images/3.jpeg";
import heroImage8 from "../../images/8.jpeg";
import heroImage5 from "../../images/5.jpeg";

const heroImages = [heroImage1, heroImage3, heroImage8, heroImage5];
const IMAGE_ROTATION_MS = 3000;
const IMAGE_CROSSFADE_DURATION = 2.5;

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, IMAGE_ROTATION_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={heroImages[activeImageIndex].src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{ backgroundImage: `url('${heroImages[activeImageIndex].src}'), url('/placeholders/gallery.svg')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: IMAGE_CROSSFADE_DURATION, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#04110c]/25 via-[#081C15]/50 to-[#081C15]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,211,166,0.22),transparent_56%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-[#60d3a18a] bg-[#60d3a11a] px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#7CE0B5]">
            Tropical Forest Systems Lab
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-[#F2FBF7] md:text-8xl">
            Forest Ecology &{" "}
            <span className="text-[#63D3A6]">
              Biodiversity
            </span>{" "}
            Research Lab
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-[#D7F3E5] md:text-xl">
            Exploring ecosystems, understanding biodiversity, and supporting conservation decisions
            through high-impact tropical forest science.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-[#63D3A6] bg-[#63D3A630] px-7 py-3 text-sm font-medium text-[#E8F8EE] backdrop-blur transition duration-300"
            >
              <Link href="/research">Explore Research</Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-[#63D3A68c] px-7 py-3 text-sm font-medium text-[#E8F8EE] transition duration-300 hover:text-white"
            >
              <Link href="/gallery">View Gallery</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
