import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Sparkles, 
  TrendingUp, 
  MessageCircle, 
  Heart,
  Hash,
  Camera,
  Zap
} from "lucide-react";

const ArtisanDashboard = () => {
  const products = [
    {
      id: 1,
      name: "Madhubani Painting",
      image: "/placeholder.svg",
      aiCaption: "Vibrant traditional Indian folk art with intricate patterns",
      hashtags: ["#MadhubaniArt", "#Handmade", "#TraditionalArt"],
      likes: 45,
      price: "₹2,500",
      status: "Active"
    },
    {
      id: 2,
      name: "Ceramic Pottery",
      image: "/placeholder.svg",
      aiCaption: "Handcrafted ceramic vase with organic textures",
      hashtags: ["#Pottery", "#Ceramic", "#HomeDecor"],
      likes: 32,
      price: "₹1,800",
      status: "Minting NFT"
    },
    {
      id: 3,
      name: "Handloom Textile",
      image: "/placeholder.svg",
      aiCaption: "Beautiful handwoven fabric with traditional motifs",
      hashtags: ["#Handloom", "#Textile", "#Sustainable"],
      likes: 28,
      price: "₹3,200",
      status: "Active"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Dashboard
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Manage Your <span className="text-primary">Artisan Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your creations and let AI help you craft perfect descriptions, generate hashtags, and connect with the right audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <Card className="lg:col-span-1 shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-primary" />
                <span>Upload New Craft</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Drop your photos here or click to browse</p>
                <Button variant="outline">Choose Files</Button>
              </div>
              
              <div className="space-y-3">
                <Button variant="default" className="w-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate AI Description
                </Button>
                <Button variant="nft" className="w-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Mint as NFT
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Your Creations</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12% this week</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      {/* Product Image */}
                      <div className="relative">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <Camera className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <Badge 
                          variant={product.status === "Active" ? "default" : "secondary"}
                          className="absolute -top-2 -right-2"
                        >
                          {product.status}
                        </Badge>
                      </div>

                      {/* Product Details */}
                      <div className="md:col-span-2 space-y-3">
                        <div>
                          <h4 className="font-semibold text-lg">{product.name}</h4>
                          <p className="text-primary font-bold">{product.price}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{product.aiCaption}</p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Hash className="w-4 h-4 text-accent" />
                            <div className="flex flex-wrap gap-1">
                              {product.hashtags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{product.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>3</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          {product.status === "Active" && (
                            <Button variant="nft" size="sm">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Mint NFT
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanDashboard;