import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/rotor-installation.jpg'
import ctaImage from '@/assets/turbine-blade.jpg'
import {
  Settings,
  TrendingUp,
  FileText,
  Wrench,
  Clock,
  Shield
} from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: <Settings className='w-12 h-12' />,
      title: 'Turbine & Generator Overhauling',
      description:
        'Comprehensive overhauling services for all types and makes of turbines and generators',
      features: [
        'Complete turbine overhaul (HP, IP, LP cylinders)',
        'Generator rotor, stator servicing and testing',
        'Bearing inspection and replacement',
        'Blade inspection and refurbishment',
        'Balancing and alignment services',
        'Testing and commissioning'
      ],
      brands: [
        'BHEL',
        'Siemens',
        'LMZ',
        'GE',
        'Toshiba',
        'Dongfong',
        'Shanghai Electric',
        'Herbin',
        'LMW',
        'KWH',
        'Skoda',
        'Ansaldo',
        'Mitsubishi'
      ]
    },
    {
      icon: <TrendingUp className='w-12 h-12' />,
      title: 'Renovation & Modernization',
      description:
        'Extend life and improve efficiency of aging power plant equipment',
      features: [
        'In Collaboration with OEMs we are capable of carrying out renovations & modernization of sets'
      ]
    },
    {
      icon: <FileText className='w-12 h-12' />,
      title: 'AMC & Maintenance Contracts',
      description:
        'Comprehensive Annual Maintenance Contracts for worry-free operations',
      features: [
        'Scheduled preventive maintenance',
        '24x7 emergency support',
        'Spare parts management',
        'Performance monitoring',
        'Rapid response teams',
        'Cost-effective solutions'
      ]
    }
  ]

  const specialServices = [
    {
      icon: <Wrench className='w-8 h-8' />,
      title: 'Emergency Services',
      description:
        'Rapid mobilization for emergency breakdown situations with 24x7 availability'
    },
    {
      icon: <Clock className='w-8 h-8' />,
      title: 'Shutdown Management',
      description:
        'Efficient planned shutdown execution with minimal downtime and maximum quality'
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Quality Assurance',
      description:
        'ISO certified processes ensuring highest quality standards in all our services'
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
            alt='Services'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/60'></div>
        </div>
        <div className='relative container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
            Our Services
          </h1>
          <p className='text-lg md:text-xl max-w-3xl mx-auto opacity-95 drop-shadow-sm'>
            Comprehensive MRO Solutions for Power Generation Equipment
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 space-y-8'>
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 border-l-4 border-l-accent'
            >
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-0'>
                  {/* Icon + Summary */}
                  <div className='lg:col-span-1 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <div className='mb-6 w-20 h-20 rounded-full bg-gradient-to-tr from-accent-blue to-accent-yellow flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110'>
                      {service.icon}
                    </div>
                    <h2 className='text-2xl font-bold mb-4'>{service.title}</h2>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className='lg:col-span-2 p-8 bg-card'>
                    <h3 className='font-semibold mb-6 text-lg flex items-center gap-2'>
                      <div className='w-1 h-6 bg-accent rounded-full animate-pulse'></div>
                      Key Services Include:
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className='flex items-start space-x-3 group'
                        >
                          <div className='w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-125 transition-transform'></div>
                          <p className='text-sm text-muted-foreground leading-relaxed'>
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Brands */}
                    {service.brands && (
                      <div className='mt-6 pt-6 border-t'>
                        <h3 className='font-semibold mb-4 text-sm text-accent'>
                          Multi-Brand Expertise:
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                          {service.brands.map((brand, bIndex) => (
                            <span
                              key={bIndex}
                              className='px-4 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full hover:bg-accent/20 transition-colors'
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Special Services */}
      <section className='py-16 md:py-24 bg-muted'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Additional Services & Capabilities
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {specialServices.map((service, index) => (
              <Card
                key={index}
                className='hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1'
              >
                <CardContent className='p-6 text-center'>
                  <div className='mb-4 w-12 h-12 rounded-full bg-gradient-to-tr from-accent-blue to-accent-yellow flex items-center justify-center mx-auto shadow-lg'>
                    {service.icon}
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-16 text-primary-foreground'>
        <div className='absolute inset-0'>
          <img
            src={ctaImage}
            alt='CTA Background'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/60'></div>
        </div>
        <div className='relative container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg'>
            Need Expert MRO Services?
          </h2>
          <p className='text-lg mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-sm'>
            Contact us to discuss your power plant maintenance requirements
          </p>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors'
            asChild
          >
            <Link to='/contact' onClick={() => window.scrollTo(0, 0)}>
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
