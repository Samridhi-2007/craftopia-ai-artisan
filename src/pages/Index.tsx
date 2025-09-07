import HeroSection from "@/components/HeroSection";
import ArtisanDashboard from "@/components/ArtisanDashboard";
import CommunitySection from "@/components/CommunitySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ArtisanDashboard />
      <CommunitySection />
    </div>
  );
};

export default Index;
