import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#081C15] text-[#E8F8EE]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-32">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[#123326]/40 p-8 shadow-[0_22px_50px_rgba(0,0,0,0.25)] md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#63D3A6]">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Get in touch with the lab</h1>
          <p className="mt-5 max-w-2xl text-[#C4E7D4]">
            Reach out for research collaborations, student opportunities, or biodiversity monitoring
            partnerships. Send your details to the lab head.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0E281D]/70 p-5">
              <h2 className="text-lg font-semibold text-[#F1FBF6]">Email</h2>
              <p className="mt-2 text-sm text-[#C8E9D7]">forestlab@example.org</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0E281D]/70 p-5">
              <h2 className="text-lg font-semibold text-[#F1FBF6]">Phone</h2>
              <p className="mt-2 text-sm text-[#C8E9D7]">+00 0000 000 000</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#C8E9D7]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#0E281D]/60 px-4 py-3 text-[#E8F8EE] placeholder-[#63D3A640] focus:border-[#63D3A6] focus:outline-none focus:ring-1 focus:ring-[#63D3A6]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#C8E9D7]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#0E281D]/60 px-4 py-3 text-[#E8F8EE] placeholder-[#63D3A640] focus:border-[#63D3A6] focus:outline-none focus:ring-1 focus:ring-[#63D3A6]"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#C8E9D7]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-white/15 bg-[#0E281D]/60 px-4 py-3 text-[#E8F8EE] placeholder-[#63D3A640] focus:border-[#63D3A6] focus:outline-none focus:ring-1 focus:ring-[#63D3A6]"
                placeholder="e.g. Research collaboration inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#C8E9D7]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-[#0E281D]/60 px-4 py-3 text-[#E8F8EE] placeholder-[#63D3A640] focus:border-[#63D3A6] focus:outline-none focus:ring-1 focus:ring-[#63D3A6]"
                placeholder="Your message..."
              />
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#63D3A6]"
              >
                Thank you! Your message has been sent. We'll get back to you soon.
              </motion.p>
            )}
            <button
              type="submit"
              className="rounded-full border border-[#63D3A6] bg-[#63D3A630] px-8 py-3 text-sm font-medium text-[#E8F8EE] transition hover:bg-[#63D3A640] focus:outline-none focus:ring-2 focus:ring-[#63D3A6] focus:ring-offset-2 focus:ring-offset-[#081C15]"
            >
              Send message
            </button>
          </form>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
