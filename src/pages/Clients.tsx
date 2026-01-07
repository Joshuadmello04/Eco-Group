import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card, CardContent } from '../components/ui/card'
import heroImage from '@/assets/team-group.jpg'
import { Building2, Factory, Handshake, Quote } from 'lucide-react'

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false)

  const publicClients = [
    'NTPC Limited',
    'WBPDCL',
    'Aravali Power Corp. Pvt. Ltd.',
    'NTPC SAIL Power Company',
    'Punjab State Electricity Board (PSEB)',
    'Haryana State Electricity Board (HSEB)',
    'Bharat Rail Bijlee Co. Ltd. (BRBCL)',
  ]

  const privateClients = [
    'Adani Power Limited',
    'Jindal Power',
    'Essar Power',
    'Reliance Power',
    'China Light & Power (CLP)',
  ]

  const oems = [
    'BHEL (Bharat Heavy Electricals Limited)',
    'Siemens',
    'General Electric (GE)',
    'Toshiba',
    'Alstom',
  ]

  const testimonials = [
    {
      title: 'Efficiency & Timeliness',
      quote:
        '“Your Planning, Quality of work, Manpower deployment has helped to complete the overhaul within 26 days instead of 30 days which is the shortest period ever since commissioning.”',
      company: 'Maharashtra State Power Generation Co. Ltd. (MAHAGENCO)',
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
    {
      quote:
        '“Conduct and technical expertise of the service team is found excellent.”',
      company: 'Odisha Power Generation Corp. Ltd. (OPGC)',
      from: 'Sr. Manager',
    },
    {
      quote:
        '“Technical expertise of the service team was found excellent and the team delivered quality job.”',
      company: 'Jindal Power',
      from: 'DGM',
    },
    {
      quote:
        '“We are truly impressed with the results achieved ... utmost confidence in your agency\'s capabilities.”',
      company: 'NTPC Anta',
      from: 'Sr. Manager',
    },
    {
      quote:
        '“I really want to congratulate your entire team on behalf of MSPGCL for this remarkable performance.”',
      company: 'Maharashtra State Power Generation Co. Ltd. (MAHAGENCO)',
      from: 'Executive Engineer',
    },
    {
      quote:
        '“Demonstrated highest level of professionalism in each job of the overhaul.”',
      company: 'NTPC Limited (Lara Project)',
      from: 'AGM',
    },
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Clients & Partners
          </h1>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Public Sector Undertakings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving India's premier public sector power generation companies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {publicClients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-primary"
              >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Private Sector Companies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted partner for India's leading private power companies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {privateClients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-accent"
              >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OEM Technology Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified and approved by leading equipment manufacturers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {oems.map((oem, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-secondary"
              >
                <CardContent className="p-6 text-center">
                  <Handshake className="w-8 h-8 text-secondary mx-auto mb-3 opacity-50" />
                  <p className="font-semibold">{oem}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* Testimonials Carousel */}
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

    {/* VIEWPORT */}
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* TRACK */}
      <div
        className="testimonial-track"
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {duplicatedTestimonials.map((t, index) => (
          <div
            key={index}
            className="testimonial-slide"
          >
            <Card className="bg-white rounded-xl shadow-lg border border-gray-200 h-full">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <p className="italic text-gray-600 mb-4 leading-relaxed">
                  {t.quote}
                </p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-blue-700">{t.company}</p>
                  <p className="text-sm text-gray-500">{t.from}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>

    {/* CSS */}
    <style>{`
      .testimonial-track {
        display: flex;
        gap: 1.5rem;
        width: max-content;
        animation: testimonial-scroll 80s linear infinite;
      }

      .testimonial-slide {
        flex-shrink: 0;
        width: 85vw;
      }

      @media (min-width: 640px) {
        .testimonial-slide {
          width: 65vw;
        }
      }

      @media (min-width: 768px) {
        .testimonial-slide {
          width: 420px;
        }
      }

      @keyframes testimonial-scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </div>
</section>



      <Footer />
    </div>
  )
}

export default Clients
