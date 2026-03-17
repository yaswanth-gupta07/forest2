import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081C15]/90">
      <div className="mx-auto flex w-[min(94%,76rem)] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#63D3A6]">
            Contact
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[#EAF8EF]">Forest Ecology  Lab</h3>
          <p className="mt-2 text-sm text-[#C4E8D5]">
            GMAIL: forestecology.in@gmail.com
            <br />
            PHONE: +91 8148374400
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm md:items-end">
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-[#63D3A6]/80">Website developed by</p>
            <p className="mt-1 font-medium text-[#EAF8EF]">Yaswanth</p>
            <a href="tel:+919966791692" className="mt-0.5 block text-[#B9DFC9] hover:text-[#63D3A6] transition-colors">
              +91 9966791692
            </a>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
