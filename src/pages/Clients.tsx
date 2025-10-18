import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card, CardContent } from '../components/ui/card'
import heroImage from '@/assets/team-group.jpg'
import {Quote, Award, ClipboardCheck } from 'lucide-react'

const Clients = () => {
  // const publicClients = [
  //   'NTPC Limited',
  //   'WBPDCL',
  //   'Aravali Power Corp. Pvt. Ltd.',
  //   'NTPC SAIL Power Company',
  //   'Punjab State Electricity Board (PSEB)',
  //   'Haryana State Electricity Board (HSEB)',
  //   'Bharat Rail Bijlee Co. Ltd. (BRBCL)'
  // ]

  // const privateClients = [
  //   'Adani Power Limited',
  //   'Jindal Power',
  //   'Essar Power',
  //   'Reliance Power',
  //   'China Light & Power (CLP)'
  // ]

  // const oems = [
  //   'BHEL (Bharat Heavy Electricals Limited)',
  //   'Siemens',
  //   'General Electric (GE)',
  //   'Toshiba',
  //   'Alstom'
  // ]

  const awards = [
    {
      name: 'Award for Minimum Number of Safety Deviations During Overhaul',
      organization: 'NTPC Limited (Lara Project)',
      document: 'EPS107102025.pdf'
    },
    {
      name: 'Award for Best Safety Practices During Overhaul',
      organization: 'NTPC Limited (Lara Project)',
      document: 'EPS107102025.pdf'
    },
    {
      name: 'Appreciation for Achieving 1.0 Lakh Safe Man Hours',
      organization: 'DB Power Ltd (Fire & Safety Dept)',
      document: 'EPS407102025.pdf'
    }
  ]

  const certificates = [
    {
      purpose: 'Capital Overhauling of Unit #1, 15MW at Rajghat Hydroelectric Plant',
      organization: 'Authorized Signatory',
      signatory: 'Name not specified'
    },
    {
      purpose: 'Overhauling of Unit #1 (125 MW) during Capital Overhaul',
      organization: 'Jindal Stainless Limited',
      signatory: 'P.R. Dash, GM(CPP)'
    },
    {
      purpose: 'Performance Certificate for Overhauling of Unit #1',
      organization: 'Odisha Power Generation Corp. Ltd. (OPGC)',
      signatory: 'D. D. Behera, Sr. Manager (Mechanical)'
    },
    {
      purpose: 'Performance Certificate for Capital Overhauling of Stage#01, Unit#03, 250 MW',
      organization: 'Jindal Power Ltd.',
      signatory: 'Saikat Nandy, DGM – Turbine Maintenance'
    },
    {
      purpose: 'Certificate for Annual Maintenance Contract for Unit 1 & 2',
      organization: 'Udupi Power Corp Ltd. (Adani)',
      signatory: 'Chandrahasa. B, Mechanical Maintenance'
    },
    {
      purpose: 'Certificate for Major Overhauling of Unit #10, 800 MW TG',
      organization: 'Toshiba JSW',
      signatory: 'Hirono Shuji, Chief Marketing Officer'
    },
    {
      purpose: 'Certificate for Major Overhauling of Unit #20, 800 MW TG',
      organization: 'Toshiba JSW',
      signatory: 'Bibhuti Bhusan Behera, DGM / SSD'
    }
  ]

  const testimonials = [
    {
      quote:
        'Your Planning, Quality of work, Manpower deployment has helped to complete the overhaul within 26 days instead of 30 days which is the shortest period ever since commissioning.',
      author: 'Executive Engineer, TM-II',
      company: 'Maharashtra State Power Generation Co. Ltd. (MSPGCL)',
      project: 'Efficiency & Timeliness'
    },
    {
      quote:
        'The team was able to rectify the defects of our machine, which was running with severe vibration since last six years and now it is within the design limit.',
      author: 'D. D. Behera, Sr. Manager (Mechanical)',
      company: 'Odisha Power Generation Corp. Ltd. (OPGC)',
      project: 'Quality & Technical Excellence'
    },
    {
      quote:
        'Your team’s commitment to excellence and unwavering focus on safety have not gone unnoticed, and we are truly impressed with the results achieved.',
      author: 'Vinay Choudhary, Sr. Manager - MMD',
      company: 'NTPC Anta',
      project: 'Safety & Professionalism'
    },
    {
      quote:
        'The skilled manpower by ECO Projects was ideally suited for the work. The Company also deployed sufficient tools and equipment that there was never any shortage on any front.',
      author: 'Chandrahasa. B, Mechanical Maintenance',
      company: 'Udupi Power Corporation Ltd. (Adani)',
      project: 'Resource Management & Capability'
    },
    {
      quote:
        'This being the first 800MW TG overhauling in India and for TJPS, the dedication of ECO Projects towards Quality, Safety, discipline and site management is well appreciated.',
      author: 'Hirono Shuji, Chief Marketing Officer',
      company: 'Toshiba JSW Power Systems Pvt. Ltd.',
      project: 'Milestone Achievement'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-20 text-primary-foreground'>
        <div className='absolute inset-0'>
          <img src={heroImage} alt='Clients' className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>
        <div className='relative container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Our Clients & Partners
          </h1>
          <p className='text-lg md:text-xl max-w-3xl mx-auto opacity-95'>
            Trusted by India’s Leading Power Generation Companies
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className='py-16 md:py-24 bg-muted'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <Award className='w-16 h-16 text-primary mx-auto mb-4' />
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Formal Awards Received
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Recognition for excellence in safety, performance, and quality
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {awards.map((a, i) => (
              <Card key={i} className='hover:shadow-xl transition-all border-l-4 border-l-primary'>
                <CardContent className='p-6'>
                  <p className='font-semibold text-lg mb-2'>{a.name}</p>
                  <p className='text-sm text-muted-foreground mb-1'>
                    {a.organization}
                  </p>
                  <p className='text-xs text-accent italic'>
                    Reference: {a.document}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Certificates Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <ClipboardCheck className='w-16 h-16 text-accent mx-auto mb-4' />
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Performance Certificates
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Proven track record across multiple major overhauling and AMC projects
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {certificates.map((c, i) => (
              <Card key={i} className='hover:shadow-lg transition-all border-l-4 border-l-accent'>
                <CardContent className='p-6'>
                  <p className='font-semibold mb-2'>{c.purpose}</p>
                  <p className='text-sm text-muted-foreground mb-1'>
                    {c.organization}
                  </p>
                  <p className='text-xs text-accent italic'>{c.signatory}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 md:py-24 bg-muted'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <Quote className='w-16 h-16 text-primary mx-auto mb-4' />
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Client Testimonials
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Voices of appreciation from our valued partners
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className='hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-t-accent'
              >
                <CardContent className='p-8'>
                  <div className='bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                    <Quote className='w-6 h-6 text-accent' />
                  </div>
                  <p className='text-muted-foreground mb-6 leading-relaxed italic text-sm'>
                    "{t.quote}"
                  </p>
                  <div className='border-t pt-4'>
                    <p className='font-bold text-lg'>{t.author}</p>
                    <p className='text-sm text-primary font-medium'>
                      {t.company}
                    </p>
                    <p className='text-xs text-muted-foreground mt-1 bg-muted px-2 py-1 rounded inline-block'>
                      {t.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Clients
