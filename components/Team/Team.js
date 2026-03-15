import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  {
    name: "Sreenath Subrahmanyam",
    role: "Principal Investigator",
    description: "Leads forest ecosystem science and long-term biodiversity strategy.",
  },
  {
    name: "Sharana Basavana Gouda",
    role: "PhD Researcher",
    description: "Studies ecological disturbance patterns and landscape resilience.",
  },
  {
    name: "Albert Suresh",
    role: "PhD Researcher",
    description: "Focuses on species interaction networks in tropical forests.",
  },
  {
    name: "Swedha P Sudevan",
    role: "PhD Researcher",
    description: "Works on field biodiversity monitoring and camera-trap analytics.",
  },
  {
    name: "Dilip Senapati",
    role: "Graduate Researcher",
    description: "Supports geospatial analysis, biomass mapping, and data workflows.",
  },
  {
    name: "Prem Sujit Singh",
    role: "Postgraduate Researcher",
    description: "Researches canopy microclimate and restoration ecology indicators.",
  },
];

export default function Team({ seasonTheme }) {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.2em]" style={{ color: seasonTheme.accent }}>
          Section 4
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#E8F8EE] md:text-5xl">Meet Our Research Team</h2>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-[#123325]/42 p-5 shadow-[0_16px_44px_rgba(0,0,0,0.28)]"
          >
            <div className="relative mb-4 aspect-square w-20 overflow-hidden rounded-xl border border-white/15">
              <Image src="/placeholders/profile.svg" alt={`${member.name} profile`} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-[#ECF9F1]">{member.name}</h3>
            <p className="mt-1 text-sm" style={{ color: seasonTheme.accent }}>
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#C8E9D7]">{member.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
