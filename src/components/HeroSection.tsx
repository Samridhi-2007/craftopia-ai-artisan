import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Palette } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Marketplace
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Empower Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Artisan </span>
                Journey
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with a vibrant community of artisans and art lovers. Create, showcase, and sell your handmade crafts with AI-powered tools that help you reach the perfect audience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Start Creating
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Explore Crafts
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5K+</div>
                <p className="text-muted-foreground">Artisans</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <p className="text-muted-foreground">Handmade Items</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2K+</div>
                <p className="text-muted-foreground">NFTs Minted</p>
              </div>
            </div>
          </div>

          {/* Illustration Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="AI-powered artisan marketplace with traditional Indian crafts and modern technology"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 left-8 bg-card rounded-xl p-4 shadow-soft animate-float">
                <div className="flex items-center space-x-3">
                  <Palette className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">AI Caption Generated</p>
                    <p className="text-xs text-muted-foreground">"Beautiful handcrafted art"</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-card rounded-xl p-4 shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                <Button variant="nft" size="sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Mint NFT
                </Button>
              </div>

              <div className="absolute top-1/2 right-4 bg-card rounded-xl p-3 shadow-soft animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs font-medium">Community</p>
                    <p className="text-xs text-muted-foreground">1.2k likes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;