import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpeg";
import image6 from "../../images/6.jpeg";
import image7 from "../../images/7.jpeg";
import image8 from "../../images/8.jpeg";
import image9 from "../../images/9.jpeg";
import image10 from "../../images/10.jpeg";
import image11 from "../../images/11.jpeg";
import image12 from "../../images/12.jpeg";
import image13 from "../../images/13.jpeg";
import image14 from "../../images/14.jpeg";
import image15 from "../../images/15.jpeg";

const heroImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
const IMAGE_ROTATION_MS = 6000;
const IMAGE_CROSSFADE_DURATION = 1.5;

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, IMAGE_ROTATION_MS);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setActiveImageIndex(((index % heroImages.length) + heroImages.length) % heroImages.length);
  };

  const goPrev = () => goTo(activeImageIndex - 1);
  const goNext = () => goTo(activeImageIndex + 1);

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#081C15]/40" />
      </div>

      {/* Left arrow - goes to previous (left) */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        aria-label="Previous image"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow - goes to next (right) */}
      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        aria-label="Next image"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Line-style progress indicator - uniform segments, short on mobile */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 md:gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-1.5 w-2 flex-none rounded-sm transition-colors md:h-1.5 md:min-w-[20px] md:max-w-[32px] md:flex-1 ${
              i === activeImageIndex ? "bg-[#63D3A6]" : "bg-white/80"
            }`}
            aria-label={`Go to image ${i + 1} of ${heroImages.length}`}
          />
        ))}
      </div>
    </section>
  );
}
