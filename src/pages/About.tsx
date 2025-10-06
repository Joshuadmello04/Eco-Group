import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/team-meeting.jpg";
import { Award, Target } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "1991", event: "ECO Projects Pvt Ltd Founded", description: "Started with a vision to serve India's power sector" },
    { year: "1994", event: "Industry Benchmark Set", description: "Completed NTPC Shaktinagar 210 MW overhaul in record 43 days" },
    { year: "2000s", event: "Rapid Expansion", description: "Expanded services across public and private sector power plants" },
    { year: "2017", event: "ECO Power Services Established", description: "Launched to further strengthen our service capabilities" },
    { year: "2025", event: "35+ Years of Excellence", description: "Serving 100+ power plants with 700+ projects completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ECO Group</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            35+ Years of Excellence in Power Plant MRO Services
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class maintenance, repair, and overhaul services for power generation equipment, ensuring optimal performance, reliability, and longevity of India's energy infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted partner in power plant maintenance and modernization, setting industry benchmarks for quality, safety, and innovation in energy infrastructure services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Overview */}
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ECO Group comprises two premier entities - ECO Projects Pvt Ltd (established 1991) and ECO Power Services (established 2017) - working together to deliver comprehensive MRO solutions for India's power sector.
              </p>
              <p>
                With over three decades of experience, we have successfully completed 700+ projects across 100+ power plants, serving both public sector undertakings like NTPC, NHPC, and DVC, as well as private sector giants including Adani Power, Tata Power, and Jindal.
              </p>
              <p>
                Our multi-brand expertise spans across BHEL, Siemens, LMZ, GE, Toshiba, and other leading OEMs, making us the preferred choice for turbine and generator overhauling, renovation, modernization, and comprehensive maintenance contracts.
              </p>
              <p>
                What sets us apart is our zero client attrition rate - a testament to our unwavering commitment to quality, safety, and customer satisfaction over 35 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 mb-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
