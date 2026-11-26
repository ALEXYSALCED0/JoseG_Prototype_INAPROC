import { SmoothScrollProvider } from "@/components/MotionPrimitives";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutAndServices } from "@/components/AboutAndServices";
import { PrecisionAndTech } from "@/components/PrecisionAndTech";
import { InteractiveProjectsGallery } from "@/components/InteractiveProjectsGallery";
import { TrustBlogContactFooter } from "@/components/TrustBlogContactFooter";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutAndServices />
          <PrecisionAndTech />
          <InteractiveProjectsGallery />
          <TrustBlogContactFooter />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
