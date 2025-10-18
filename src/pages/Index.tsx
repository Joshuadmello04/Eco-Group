import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import heroImage from "@/assets/hero-turbine.jpg";
import teamWork from "@/assets/team-work.jpg";
import ctaImage from "@/assets/team-turbine.jpg";
import { 
  Settings, 
  Wrench, 
  FileText, 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  Quote 
} from "lucide-react";

const Index = () => {
  const [isPaused, setIsPaused] = useState(false)
  const stats = [
    { value: "700+", label: "Projects Delivered" },
    { value: "125", label: "Power Plants Served" },
    { value: "35+", label: "Years Experience" },
    { value: "0%", label: "Client Attrition" },
  ];

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Turbine & Generator Overhauling",
      description: "Comprehensive overhauling services for turbines, generators, and auxiliary systems across multiple brands including BHEL, Siemens, LMZ, and more.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Renovation & Modernization",
      description: "Life extension, modern upgrades, and efficiency improvements for aging power plant equipment.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AMC & Maintenance Contracts",
      description: "Comprehensive maintenance contracts with fast turnaround and 24x7 support for uninterrupted operations.",
    },
  ];

  const featuredProjects = [
    {
      title: "NTPC Shaktinagar",
      description: "Completed 210 MW LMZ TG Set overhaul in record 43 days in 1994, setting industry benchmark.",
      client: "NTPC Limited",
    },
    {
      title: "Adani Mundra",
      description: "Executed multi-unit project involving 660 MW & 330 MW TG Set (Dongfeng) overhaul.",
      client: "Adani Power",
    },
    {
      title: "NTPC Dadri",
      description: "Major 490 MW TG Set (KWU) overhaul demonstrating technical expertise and rapid execution.",
      client: "NTPC Limited",
    },
  ];

  const testimonials = [
    {
      title: 'Efficiency & Timeliness',
      quote:
        '“Your Planning, Quality of work, Manpower deployment has helped to complete the overhaul within 26 days instead of 30 days which is the shortest period ever since commissioning.”',
      company: 'Maharashtra State Power Generation Co. Ltd. (MSPGCL)',
      from: 'Executive Engineer, TM-II, 500MW, CSTPS',
    },
    {
      quote:
        '“This was achievable due to Excellent Planning, quality of work & Deployment of skilled manpower by M/s Eco Projects.”',
      company: 'Jindal Stainless Limited',
      from: 'P.R. Dash, GM(CPP)',
    },
    {
      title: 'Quality & Technical Excellence',
      quote:
        '“The team was able to rectify the defects of our machine, which was running with severe vibration since last six years and now it is within the design limit.”',
      company: 'Odisha Power Generation Corp. Ltd. (OPGC)',
      from: 'D. D. Behera, Sr. Manager (Mechanical)',
    },
    {
      quote:
        '“Highly dedicated & experienced team was mobilized by you, which was the key for the completion of overhaul with quality and within scheduled time with good TSI parameters.”',
      company: 'NTPC Limited (Lara Project)',
      from: 'Sattaibrat Yadav, AGM(SCU-OH-ST)',
    },
    {
      title: 'Safety & Professionalism',
      quote:
        '“Your team\'s commitment to excellence and unwavering focus on safety have not gone unnoticed, and we are truly impressed with the results achieved.”',
      company: 'NTPC Anta',
      from: 'Vinay Choudhary, Sr. Manager- MMD',
    },
    {
      quote:
        '“The dedication of ECO Power Services towards the Quality, Safety, discipline and site management is well appreciated towards successful completion of the overhauling in record period.”',
      company: 'Toshiba JSW Power Systems Pvt. Ltd.',
      from: 'Bibhuti Bhusan Behera, DGM / SSD',
    },
    {
      title: 'Resource Management & Capability',
      quote:
        '“The skilled manpower by ECO Projects was ideally suited for the work. The Company also deployed sufficient tools and equipment that there was never any shortage on any front.”',
      company: 'Udupi Power Corporation Ltd. (Adani)',
      from: 'Chandrahasa. B, Mechanical Maintenance',
    },
    {
      quote:
        '“This being the first 800MW TG overhauling in India and for TJPS, the dedication of ECO Projects towards the Quality, Safety, discipline and site management is well appreciated...”',
      company: 'Toshiba JSW Power Systems Pvt. Ltd.',
      from: 'Hirono Shuji, Chief Marketing Officer',
    },
    {
      quote:
        '“For your outstanding contribution in successful completion of U#1R2 Boiler Outage.”',
      company: 'Adani Power',
      from: 'HOO - MMD',
    },
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Power Plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Powering India's Energy Infrastructure
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              Leading provider of MRO services for turbines and power plant equipment across India with 35+ years of excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive MRO solutions for power generation equipment with multi-brand expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-secondary"
              asChild
            >
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flagship Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across India's major power plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-accent mb-3">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-sm font-medium text-primary">
                    {project.client}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-secondary"
              asChild
            >
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={teamWork} 
                alt="Professional Team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose ECO Group?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Zero Client Attrition</h3>
                    <p className="text-muted-foreground">35 years of consistent quality delivery and long-term client relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Multi-Brand Expertise</h3>
                    <p className="text-muted-foreground">Certified to work with BHEL, Siemens, LMZ, GE, Toshiba, LMW, KWU, Skoda, Ansaldo, Hitachi, Dongfong, Shanghai, Herbin, Mitsubishi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Rapid Mobilization</h3>
                    <p className="text-muted-foreground">Quick response time with 24/7 support availability</p>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="default" 
                className="bg-primary hover:bg-secondary mt-8"
                asChild
              >
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Quote className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TESTIMONIALS 
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our valued partners across India's power sector
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-8 animate-scroll"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {duplicatedTestimonials.map((t, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[calc(33.333vw-2.67rem)] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                >
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    
                    <p className="text-md text-gray-600 italic mb-4 leading-relaxed">
                      {t.quote}
                    </p>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-blue-700">{t.company}</p>
                      <p className="text-md text-gray-500">{t.from}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-33.333vw * ${testimonials.length} - ${testimonials.length * 32}px)); }
            }
            .animate-scroll {
              animation: scroll 90s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="ECO Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Your Project?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Contact us today for expert MRO services and experience the ECO Group difference
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            asChild
          >
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
