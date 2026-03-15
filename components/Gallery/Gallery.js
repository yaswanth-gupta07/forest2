import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  { id: 1, title: "Canopy transect sunrise", src: "/placeholders/gallery.svg", tone: "hue-rotate-[0deg]" },
  { id: 2, title: "Monsoon forest trail", src: "/placeholders/gallery.svg", tone: "hue-rotate-[28deg]" },
  { id: 3, title: "Wildlife camera station", src: "/placeholders/gallery.svg", tone: "hue-rotate-[64deg]" },
  { id: 4, title: "Field data collection", src: "/placeholders/gallery.svg", tone: "hue-rotate-[92deg]" },
  { id: 5, title: "Riparian habitat survey", src: "/placeholders/gallery.svg", tone: "hue-rotate-[124deg]" },
  { id: 6, title: "Fog-covered hill forest", src: "/placeholders/gallery.svg", tone: "hue-rotate-[150deg]" },
  { id: 7, title: "Nocturnal biodiversity setup", src: "/placeholders/gallery.svg", tone: "hue-rotate-[184deg]" },
];

export default function Gallery({ seasonTheme }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.2em]" style={{ color: seasonTheme.accent }}>
          Section 3
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#E8F8EE] md:text-5xl">Forest Gallery</h2>
        <p className="mt-5 max-w-2xl text-[#C5E8D6]">
          Landscapes, field operations, and biodiversity moments captured across seasonal campaigns.
        </p>
      </motion.div>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative mb-5 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#112F23]/35 text-left"
            onClick={() => setActiveImage(item)}
          >
            <div className={`relative aspect-[4/3] ${item.tone}`}>
              <Image src={item.src} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081C15]/88 via-[#081C15]/32 to-transparent p-4">
              <p className="text-sm text-[#EAF7EF]">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#020705]/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#0C241A]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={`relative aspect-[16/9] ${activeImage.tone}`}>
                <Image src={activeImage.src} alt={activeImage.title} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="text-sm text-[#D8F0E3]">{activeImage.title}</p>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="rounded-lg border border-white/20 px-3 py-1 text-xs text-[#E4F5EC]"
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
