import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { AnimatedCounter } from "../components/Counter";
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
import { LogoSlider } from "../components/LogoSlider";

const Index = () => {
  const [isPaused, setIsPaused] = useState(false)
  
  const stats = [
    { value: 700, label: "Projects Delivered", suffix: "+" },
    { value: 125, label: "Power Plants Served", suffix: "+" },
    { value: 35, label: "Years Experience", suffix: "+" },
    { value: 0, label: "Client Attrition", suffix: "%" },
  ];

  const services = [
    {
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Turbine & Generator Overhauling",
      description: "Comprehensive overhauling services for turbines, generators, and auxiliary systems across multiple brands including BHEL, Siemens, LMZ, and more.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Renovation & Modernization",
      description: "Life extension, modern upgrades, and efficiency improvements for aging power plant equipment.",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
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
        '"Your Planning, Quality of work, Manpower deployment has helped to complete the overhaul within 26 days instead of 30 days which is the shortest period ever since commissioning."',
      company: 'Maharashtra State Power Generation Co. Ltd. (MAHAGENCO)',
      from: 'Executive Engineer, TM-II, 500MW, CSTPS',
    },
    {
      quote:
        '"This was achievable due to Excellent Planning, quality of work & Deployment of skilled manpower by M/s Eco Projects."',
      company: 'Jindal Stainless Limited',
      from: 'P.R. Dash, GM(CPP)',
    },
    {
      title: 'Quality & Technical Excellence',
      quote:
        '"The team was able to rectify the defects of our machine, which was running with severe vibration since last six years and now it is within the design limit."',
      company: 'Odisha Power Generation Corp. Ltd. (OPGC)',
      from: 'D. D. Behera, Sr. Manager (Mechanical)',
    },
    {
      quote:
        '"Highly dedicated & experienced team was mobilized by you, which was the key for the completion of overhaul with quality and within scheduled time with good TSI parameters."',
      company: 'NTPC Limited (Lara Project)',
      from: 'Sattaibrat Yadav, AGM(SCU-OH-ST)',
    },
    {
      title: 'Safety & Professionalism',
      quote:
        '"Your team\'s commitment to excellence and unwavering focus on safety have not gone unnoticed, and we are truly impressed with the results achieved."',
      company: 'NTPC Anta',
      from: 'Vinay Choudhary, Sr. Manager- MMD',
    },
    {
      quote:
        '"The dedication of ECO Power Services towards the Quality, Safety, discipline and site management is well appreciated towards successful completion of the overhauling in record period."',
      company: 'Toshiba JSW Power Systems Pvt. Ltd.',
      from: 'Bibhuti Bhusan Behera, DGM / SSD',
    },
    {
      title: 'Resource Management & Capability',
      quote:
        '"The skilled manpower by ECO Projects was ideally suited for the work. The Company also deployed sufficient tools and equipment that there was never any shortage on any front."',
      company: 'Udupi Power Corporation Ltd. (Adani)',
      from: 'Chandrahasa. B, Mechanical Maintenance',
    },
    {
      quote:
        '"This being the first 800MW TG overhauling in India and for TJPS, the dedication of ECO Projects towards the Quality, Safety, discipline and site management is well appreciated..."',
      company: 'Toshiba JSW Power Systems Pvt. Ltd.',
      from: 'Hirono Shuji, Chief Marketing Officer',
    },
    {
      quote:
        '"For your outstanding contribution in successful completion of U#1R2 Boiler Outage."',
      company: 'Adani Power',
      from: 'HOO - MMD',
    },
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section - Mobile First */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Power Plant" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Powering India's Energy Infrastructure
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 leading-relaxed">
              Leading provider of MRO services for turbines and power plant equipment across India with 35+ years of excellence.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile First with Animated Counters */}
      <section className="py-8 sm:py-10 md:py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2"
                  />
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive MRO solutions for power generation equipment with multi-brand expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-5 sm:p-6">
                  <div className="text-primary mb-3 sm:mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button 
              size="lg" 
              variant="default" 
              className="w-full sm:w-auto bg-primary hover:bg-secondary"
              asChild
            >
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Flagship Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Delivering excellence across India's major power plants
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-5 sm:p-6">
                  <div className="text-accent mb-2 sm:mb-3">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-sm font-medium text-primary">
                    {project.client}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button 
              size="lg" 
              variant="default" 
              className="w-full sm:w-auto bg-primary hover:bg-secondary"
              asChild
            >
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={teamWork} 
                alt="Professional Team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6">
                Why Choose ECO Group?
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Zero Client Attrition</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">35 years of consistent quality delivery and long-term client relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Multi-Brand Expertise</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Certified to work with BHEL, Siemens, LMZ, GE, Toshiba, LMW, KWU, Skoda, Ansaldo, Hitachi, Dongfong, Shanghai, Herbin, Mitsubishi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Rapid Mobilization</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Quick response time with 24/7 support availability</p>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="default" 
                className="w-full sm:w-auto bg-primary hover:bg-secondary mt-6 sm:mt-8"
                asChild
              >
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile First with Responsive Scroll */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Quote className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              TESTIMONIALS 
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              From our valued partners across India's power sector
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {duplicatedTestimonials.map((t, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[calc(33.333vw-2.67rem)] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                >
                  <CardContent className="p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                    <p className="text-sm sm:text-base text-gray-600 italic mb-3 sm:mb-4 leading-relaxed">
                      {t.quote}
                    </p>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-sm sm:text-base text-blue-700">{t.company}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{t.from}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { 
                transform: translateX(calc(-85vw * ${testimonials.length} - ${testimonials.length * 16}px));
              }
            }
            @media (min-width: 640px) {
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { 
                  transform: translateX(calc(-70vw * ${testimonials.length} - ${testimonials.length * 24}px));
                }
              }
            }
            @media (min-width: 768px) {
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { 
                  transform: translateX(calc(-50vw * ${testimonials.length} - ${testimonials.length * 32}px));
                }
              }
            }
            @media (min-width: 1024px) {
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { 
                  transform: translateX(calc(-33.333vw * ${testimonials.length} - ${testimonials.length * 32}px));
                }
              }
            }
            .animate-scroll {
              animation: scroll 90s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Our Partners - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Our Partners
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Trusted by leading organizations in the energy sector
            </p>
          </div>
          <LogoSlider />
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="relative py-12 sm:py-14 md:py-16 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="ECO Team" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Ready to Power Your Project?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto px-4">
            Contact us today for expert MRO services and experience the ECO Group difference
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
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