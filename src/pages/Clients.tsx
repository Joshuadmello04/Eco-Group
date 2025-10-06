import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import heroImage from "@/assets/team-group.jpg";
import { Building2, Factory, Handshake, Quote } from "lucide-react";

const Clients = () => {
  const publicClients = [
    "NTPC Limited",
    "NHPC Limited",
    "Damodar Valley Corporation (DVC)",
    "NTPC SAIL Power Company",
    "NLC India Limited",
    "Power Grid Corporation",
    "State Electricity Boards",
  ];

  const privateClients = [
    "Adani Power Limited",
    "Tata Power Company",
    "JSW Energy",
    "Jindal Power",
    "Essar Power",
    "Reliance Power",
    "GMR Energy",
    "DB Power",
  ];

  const oems = [
    "BHEL (Bharat Heavy Electricals Limited)",
    "Siemens",
    "LMZ (Leningradsky Metallichesky Zavod)",
    "General Electric (GE)",
    "Toshiba",
    "Dongfang Electric",
    "Shanghai Electric",
    "Harbin Electric",
    "KWU (Kraftwerk Union)",
    "Alstom",
  ];

  const testimonials = [
    {
      quote: "ECO Group has been our trusted partner for turbine maintenance for over two decades. Their technical expertise and commitment to quality is unmatched.",
      author: "Senior Engineer",
      company: "NTPC Limited",
      project: "Multiple TG Overhauls"
    },
    {
      quote: "The rapid mobilization and execution capabilities of ECO Group helped us minimize our shutdown duration significantly, resulting in substantial savings.",
      author: "Plant Head",
      company: "Adani Power",
      project: "Emergency Breakdown Service"
    },
    {
      quote: "ECO Group's multi-brand expertise and zero-attrition track record gives us confidence in their ability to handle our diverse equipment portfolio.",
      author: "Maintenance Manager",
      company: "Tata Power",
      project: "Annual Maintenance Contract"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Clients" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients & Partners</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Trusted by India's Leading Power Generation Companies
          </p>
        </div>
      </section>

      {/* Public Sector Clients */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Public Sector Undertakings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving India's premier public sector power generation companies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {publicClients.map((client, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-primary">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-3 opacity-50" />
                  <p className="font-semibold">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sector Clients */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Factory className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Private Sector Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted partner for India's leading private power companies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {privateClients.map((client, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-accent">
                <CardContent className="p-6 text-center">
                  <Factory className="w-8 h-8 text-accent mx-auto mb-3 opacity-50" />
                  <p className="font-semibold">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OEM Technology Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified and approved by leading equipment manufacturers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {oems.map((oem, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-secondary">
                <CardContent className="p-6 text-center">
                  <Handshake className="w-8 h-8 text-secondary mx-auto mb-3 opacity-50" />
                  <p className="font-semibold">{oem}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Quote className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with ECO Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-t-accent">
                <CardContent className="p-8">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground mt-1 bg-muted px-2 py-1 rounded inline-block">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Family</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-4">
                  <div>
                    <div className="text-4xl font-bold mb-2">35+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">700+</div>
                    <div className="text-sm opacity-90">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">0%</div>
                    <div className="text-sm opacity-90">Client Attrition</div>
                  </div>
                </div>
                <p className="text-lg opacity-95">Experience the ECO Group difference</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
