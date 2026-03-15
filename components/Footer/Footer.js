export default function Footer({ seasonTheme }) {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#081C15]/90">
      <div className="mx-auto flex w-[min(94%,76rem)] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-sm uppercase tracking-[0.22em]" style={{ color: seasonTheme.accent }}>
            Contact
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[#EAF8EF]">Forest Ecology & Biodiversity Lab</h3>
          <p className="mt-2 text-sm text-[#C4E8D5]">
            Placeholder: forestlab@example.org
            <br />
            Placeholder: +00 0000 000 000
          </p>
        </div>
        <p className="text-sm text-[#B9DFC9]">Designed for science, conservation, and ecosystem insight.</p>
      </div>
    </footer>
  );
}
