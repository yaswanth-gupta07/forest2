import Navbar from "../../components/Navbar/Navbar";
import ResearchAreas from "../../components/ResearchAreas/ResearchAreas";
import Footer from "../../components/Footer/Footer";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#081C15] text-[#E8F8EE]">
      <Navbar />
      <main className="pt-24">
        <ResearchAreas />
      </main>
      <Footer />
    </div>
  );
}
