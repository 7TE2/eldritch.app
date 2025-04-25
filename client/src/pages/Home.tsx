import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ColorPalette } from "@/components/ColorPalette";
import { Preview } from "@/components/Preview";
import { Examples } from "@/components/Examples";
import { Installation } from "@/components/Installation";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ColorPalette />
        <Preview />
        <Examples />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}
