import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import heroImage from '@/assets/team-meeting.jpg'
import { Award, Target } from 'lucide-react'

const About = () => {
  const timeline = [
    {
      year: '1991',
      event: 'ECO Projects Pvt Ltd Founded',
      description: "Started with a vision to serve India's power sector"
    },
    {
      year: '1994',
      event: 'Industry Benchmark Set',
      description:
        'Completed NTPC Shaktinagar 210 MW overhaul in record 43 days'
    },
    {
      year: '2000s',
      event: 'Rapid Expansion',
      description:
        'Expanded services across public and private sector power plants'
    },
    {
      year: '2017',
      event: 'ECO Power Services Established',
      description: 'Launched to further strengthen our service capabilities'
    },
    {
      year: '2025',
      event: '35+ Years of Excellence',
      description: 'Serving 125+ power plants with 700+ projects completed'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-20 text-primary-foreground'>
        <div className='absolute inset-0'>
          <img
            src={heroImage}
            alt='About'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>
        <div className='relative container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            About ECO Group
          </h1>
          <p className='text-lg md:text-xl max-w-3xl mx-auto opacity-95'>
            35+ Years of Excellence in Power Plant MRO Services
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <Card className='border-none shadow-lg'>
              <CardContent className='p-8'>
                <Target className='w-12 h-12 text-primary mb-4' />
                <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
                <p className='text-muted-foreground leading-relaxed'>
                  To provide world-class maintenance, repair, and overhaul
                  services for power generation equipment, ensuring optimal
                  performance, reliability, and longevity of India's energy
                  infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-lg'>
              <CardContent className='p-8'>
                <Award className='w-12 h-12 text-primary mb-4' />
                <h2 className='text-2xl font-bold mb-4'>Our Vision</h2>
                <p className='text-muted-foreground leading-relaxed'>
                  To be India's most trusted partner in power plant maintenance
                  and modernization, setting industry benchmarks for quality,
                  safety, and innovation in energy infrastructure services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Overview */}
          <div className="bg-muted rounded-xl p-8 md:p-12 relative overflow-hidden shadow-lg">
  {/* Optional decorative background shapes */}
  <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-yellow rounded-full opacity-20 pointer-events-none"></div>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-blue rounded-full opacity-20 pointer-events-none"></div>

  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-accent-blue">
    Our Story
  </h2>

  <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg md:text-xl">
    <p>
      <span className="font-semibold text-accent-yellow">ECO Group</span> comprises two premier entities - <span className="font-semibold">ECO Projects Pvt Ltd</span> (est. 1991) and <span className="font-semibold">ECO Power Services</span> (est. 2017) - working together to deliver comprehensive MRO solutions for India's power sector.
    </p>

    <p>
      With over <span className="font-semibold text-accent-blue">three decades of experience</span>, we have successfully completed <span className="font-semibold text-accent-yellow">700+ projects</span> across <span className="font-semibold text-accent-blue">125+ power plants</span>, serving both public sector undertakings like NTPC as well as private giants including Adani Power, Tata Power, and Jindal Power.
    </p>

    <p>
      Our multi-brand expertise spans across <span className="font-semibold text-accent-yellow">BHEL, Siemens, LMZ, GE, Toshiba</span>, and other leading OEMs, making us the preferred choice for turbine and generator overhauling, renovation, modernization, and comprehensive maintenance contracts.
    </p>

    <p>
      What sets us apart is our <span className="font-semibold text-accent-blue">zero client attrition rate</span> — a testament to our unwavering commitment to <span className="text-accent-yellow font-semibold">quality, safety, and customer satisfaction</span> over 35 years.
    </p>
  </div>
</div>

        </div>
      </section>

      {/* Timeline */}
      <section className='py-16 md:py-24 bg-muted'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-accent-blue'>
            Our Journey
          </h2>

          <div className='relative max-w-4xl mx-auto'>
            {/* Vertical timeline line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue to-accent-yellow hidden md:block'></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className='flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 relative'
              >
                {/* Circle / Pin */}
                <div className='flex flex-col items-center md:items-start z-10'>
                  {/* Circle */}
                  <div
                    className={`w-18 h-18 rounded-full flex items-center justify-center font-bold text-white text-md bg-primary shadow-lg transition-transform duration-300 hover:scale-110`}
                  >
                    {item.year}
                  </div>

                  {/* Line below circle for mobile */}
                  {index !== timeline.length - 1 && (
                    <div className='w-1 h-12 bg-gradient-to-b from-accent-blue to-accent-yellow mt-2'></div>
                  )}
                </div>

                {/* Event Card */}
                <Card className='flex-1 mt-4 md:mt-0 md:ml-8 md:mr-8 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]'>
                  <CardContent className='p-6 md:p-8 bg-white/90 rounded-lg'>
                    <h3 className='md:text-2xl font-bold mb-2'>{item.event}</h3>
                    <p className='text-muted-foreground md:text-xl leading-relaxed'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
