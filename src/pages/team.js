import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#081C15] text-[#E8F8EE]">
      <Navbar />
      <main className="pt-24">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
