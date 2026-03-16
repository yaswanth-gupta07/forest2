import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto mt-4 w-[min(94%,76rem)] rounded-2xl border border-white/10 bg-[#081C15]/84 px-4 py-3 backdrop-blur-md md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E4F4EA]">
            Forest Research Lab
          </Link>

          <button
            type="button"
            className="inline-flex rounded-lg border border-white/15 px-3 py-1 text-xs text-[#D1ECDC] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-[#60d3a1] ${
                  router.pathname === link.href ? "text-[#60d3a1]" : "text-[#C5E8D4]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex flex-col gap-2 rounded-xl border border-white/10 bg-[#0C241A]/80 p-3 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-2 py-2 text-sm ${
                  router.pathname === link.href ? "text-[#60d3a1]" : "text-[#CFEADA]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </nav>
    </header>
  );
}
