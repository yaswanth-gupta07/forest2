import Navbar from "../../components/Navbar/Navbar";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#081C15] text-[#E8F8EE]">
      <Navbar />
      <main className="pt-2">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
