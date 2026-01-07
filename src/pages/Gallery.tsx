import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/rotor-assembly.jpg";

type GalleryCategory = {
  title: string;
  description: string;
  images: string[];
};

const Gallery = () => {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch gallery data from backend
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`)
      .then((res) => res.json())
      .then((data) => {
        // Group images by category
        const grouped = data.reduce((acc: Record<string, GalleryCategory>, item: { categoryId: string; title: string; description: string; imageUrl?: string }) => {
          if (!acc[item.categoryId]) {
            acc[item.categoryId] = {
              title: item.title,
              description: item.description,
              images: [],
            };
          }

          if (item.imageUrl) {
            acc[item.categoryId].images.push(item.imageUrl);
          }

          return acc;
        }, {});

        setCategories(Object.values(grouped));
      })
      .catch((err) => {
        console.error("Failed to load gallery", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Visual Journey Through Our Excellence
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our extensive collection of project photos
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading gallery...
            </p>
          ) : categories.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No gallery items available.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all hover:-translate-y-2 group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={
                          category.images[0] ||
                          "https://via.placeholder.com/600x400?text=No+Image"
                        }
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      <p className="text-xs mt-2 text-muted-foreground">
                        {category.images.length} photos
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-1">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-2xl overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <div className="bg-blue-600 text-black p-12 text-center relative overflow-hidden rounded-xl">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Get in Touch
                </h2>

                <div className="flex flex-wrap gap-6 justify-center mb-8 text-white">
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
                  className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold transition-all duration-300"
                  asChild
                >
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    Get in Touch
                  </Link>
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
