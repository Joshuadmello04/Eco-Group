import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/rotor-assembly.jpg";
import img1 from "@/assets/turbine-blue.jpg";
import img2 from "@/assets/team-turbine.jpg";
import img3 from "@/assets/rotor-assembly.jpg";
import img4 from "@/assets/team-platform.jpg";
import img5 from "@/assets/team-group.jpg";
import img6 from "@/assets/inspection-work.jpg";

const Gallery = () => {
  const categories = [
    {
      title: "Turbine Overhauling",
      description: "Large-scale turbine maintenance and overhaul projects",
      count: "150+ photos",
      image: img1
    },
    {
      title: "Generator Services",
      description: "Generator rotor, stator, and auxiliary system work",
      count: "120+ photos",
      image: img2
    },
    {
      title: "Team at Work",
      description: "Our skilled professionals in action",
      count: "200+ photos",
      image: img3
    },
    {
      title: "Workshop Facilities",
      description: "State-of-the-art workshop and equipment",
      count: "80+ photos",
      image: img4
    },
    {
      title: "Project Sites",
      description: "Various power plant locations across India",
      count: "250+ photos",
      image: img5
    },
    {
      title: "Safety & Training",
      description: "Safety protocols and training programs",
      count: "100+ photos",
      image: img6
    },
  ];

  const videoCategories = [
    "Project Time-lapses",
    "Equipment Testing",
    "Safety Demonstrations",
    "Client Testimonials",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Visual Journey Through Our Excellence
          </p>
        </div>
      </section>

      {/* Photo Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our extensive collection of project photos showcasing our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-semibold mb-1">{category.count}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our projects come to life through video documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {videoCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group border-t-4 border-t-accent">
                <CardContent className="p-8 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      🎬
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to See More?</h2>
                <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                  Contact us to schedule a virtual tour of our facilities or visit ongoing projects
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  <div className="flex items-center gap-2 text-lg">
                    <span>📧</span>
                    <span>info@ecogroup.co.in</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <span>📞</span>
                    <span>+91 33 2441 1211</span>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  asChild
                >
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
