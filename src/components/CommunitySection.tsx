import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Users, 
  Star,
  MapPin,
  Verified
} from "lucide-react";

const CommunitySection = () => {
  const communityPosts = [
    {
      id: 1,
      artisan: {
        name: "Priya Sharma",
        location: "Rajasthan, India",
        avatar: "/placeholder.svg",
        verified: true,
        specialty: "Block Printing"
      },
      content: "Just finished this beautiful block-printed saree! The indigo dye process took 3 weeks but the results are magical ✨",
      image: "/placeholder.svg",
      likes: 234,
      comments: 45,
      shares: 12,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      artisan: {
        name: "Ravi Kumar",
        location: "West Bengal, India",
        avatar: "/placeholder.svg",
        verified: true,
        specialty: "Terracotta"
      },
      content: "Teaching my daughter the ancient art of terracotta pottery. Keeping traditions alive for the next generation 🏺",
      image: "/placeholder.svg",
      likes: 189,
      comments: 32,
      shares: 8,
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      artisan: {
        name: "Meera Devi",
        location: "Bihar, India",
        avatar: "/placeholder.svg",
        verified: true,
        specialty: "Madhubani Art"
      },
      content: "My latest Madhubani painting celebrating the festival of colors! Each stroke tells a story 🎨",
      image: "/placeholder.svg",
      likes: 156,
      comments: 28,
      shares: 15,
      timeAgo: "1 day ago"
    }
  ];

  const featuredArtisans = [
    {
      name: "Lakshmi Patel",
      specialty: "Bandhani Textiles",
      rating: 4.9,
      orders: 150,
      location: "Gujarat",
      avatar: "/placeholder.svg"
    },
    {
      name: "Arjun Singh",
      specialty: "Wooden Crafts",
      rating: 4.8,
      orders: 98,
      location: "Rajasthan",
      avatar: "/placeholder.svg"
    },
    {
      name: "Sunita Devi",
      specialty: "Embroidery",
      rating: 4.9,
      orders: 203,
      location: "Punjab",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Vibrant Community
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Connect with <span className="text-primary">Fellow Artisans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your journey, learn from masters, and build lasting relationships in our supportive artisan community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Community Feed</h3>
              <Button variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discussion
              </Button>
            </div>

            <div className="space-y-6">
              {communityPosts.map((post) => (
                <Card key={post.id} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Post Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={post.artisan.avatar} alt={post.artisan.name} />
                        <AvatarFallback>{post.artisan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold">{post.artisan.name}</h4>
                          {post.artisan.verified && (
                            <Verified className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{post.artisan.location}</span>
                          <span>•</span>
                          <span>{post.timeAgo}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {post.artisan.specialty}
                        </Badge>
                      </div>
                    </div>

                    {/* Post Content */}
                    <p className="text-foreground mb-4">{post.content}</p>

                    {/* Post Image */}
                    <div className="bg-muted rounded-lg h-64 mb-4 flex items-center justify-center">
                      <span className="text-muted-foreground">Craft Image</span>
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Artisans Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Featured Artisans</h3>
                <div className="space-y-4">
                  {featuredArtisans.map((artisan, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={artisan.avatar} alt={artisan.name} />
                        <AvatarFallback>{artisan.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{artisan.name}</p>
                        <p className="text-xs text-muted-foreground">{artisan.specialty}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span className="text-xs">{artisan.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{artisan.orders} orders</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Artisans
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Community Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Artisans</span>
                    <span className="font-semibold">5,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts Today</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">NFTs Minted</span>
                    <span className="font-semibold">2,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Success Stories</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;