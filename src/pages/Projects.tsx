import { useState } from 'react'
import { Award, FileCheck2, ChevronRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card, CardContent } from '../components/ui/card'
import heroImage from '@/assets/rotor-assembly.jpg'
import kudgiImage from '@/assets/projects/kudgi-toshiba.jpg'
import sipatImage from '@/assets/projects/sipat-600mw.jpg'

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false)

  const flagshipProjects = [
    {
      title: 'NTPC Shaktinagar - Industry Benchmark',
      year: '1994',
      capacity: '210 MW',
      description:
        'Completed LMZ TG Set overhaul in record 43 days, setting an industry benchmark that established ECO Group as a leader in rapid, quality execution.',
      client: 'NTPC Limited',
      scope: 'Complete turbine-generator overhaul',
      achievement: '43-day completion - Industry record',
      image: null
    },
    {
      title: 'NTPC Kudgi - Toshiba Technology',
      capacity: '800 MW',
      description:
        "Major turbine-generator overhaul for Toshiba equipment at NTPC Kudgi, one of India's most efficient supercritical thermal power plants.",
      client: 'NTPC Limited',
      scope: '800 MW TG Set overhaul through Toshiba',
      achievement: 'Supercritical unit expertise demonstrated',
      image: kudgiImage
    },
    {
      title: 'NTPC Sipat - LMZ Technology',
      capacity: '660 MW',
      description:
        'Successfully executed comprehensive overhaul of 660 MW unit at NTPC Sipat, ensuring continued high performance and reliability.',
      client: 'NTPC Limited',
      scope: '660 MW unit overhaul and maintenance',
      achievement: 'Zero downtime extension achieved',
      image: sipatImage
    },
    {
      title: 'Adani Mundra Power Plant - Dongfong Technology',
      capacity: '330 & 660 MW',
      description:
        'Executed multi-unit project involving 660 MW & 330 MW TG Set (Dongfeng) overhaul.',
      client: 'Adani Power',
      scope: 'Multi-unit TG Set overhaul',
      achievement: 'Multi-brand expertise demonstrated',
      image: null
    },
    {
      title: 'NTPC Vindhyachal - KWU Technology',
      capacity: '500 MW',
      description:
        'Completed high-capacity 500 MW TG Set (KWU) overhaul with precision and efficiency.',
      client: 'NTPC Limited',
      scope: '500 MW TG Set (KWU) overhaul',
      achievement: 'KWU technology expertise',
      image: null
    },
    {
      title: 'NTPC Dadri - KWU Technology',
      capacity: '490 MW',
      description:
        'Successfully executed a major 490 MW TG Set (KWU) overhaul, demonstrating our technical expertise.',
      client: 'NTPC Limited',
      scope: '490 MW TG Set (KWU) overhaul',
      achievement: 'Complex KWU unit handled successfully',
      image: null
    }
  ]

  const awards = [
    {
      name: 'Award for Minimum Number of Safety Deviations During Overhaul',
      org: 'NTPC Limited (Lara Project)',
      desc: 'Completed overhaul operations with zero safety deviations, maintaining exemplary site discipline and risk compliance.',
      achievement:
        'Maintained flawless safety standards under tight overhaul schedules'
    },
    {
      name: 'Award for Best Safety Practices During Overhaul',
      org: 'NTPC Limited (Lara Project)',
      desc: 'Recognized for implementing innovative safety measures and proactive risk management during the turbine overhaul.',
      achievement: 'Set benchmark for overhaul safety practices'
    },
    {
      name: 'Appreciation for Achieving 1.0 Lakh Safe Man Hours',
      org: 'DB Power Ltd (Fire & Safety Dept)',
      desc: 'Acknowledged for achieving 1,00,000 safe man-hours without any Lost Time Injury (LTI) during project execution.',
      achievement: 'Consistent compliance with industrial safety standards'
    }
  ]

  const certificates = [
    {
      purpose: 'Capital Overhauling of Unit #1 (15MW)',
      org: 'Rajghat Hydroelectric Plant',
      signatory: 'Name not specified'
    },
    {
      purpose: 'Overhauling of Unit #1 (125 MW) during Capital Overhaul',
      org: 'Jindal Stainless Limited',
      signatory: 'P.R. Dash, GM(CPP)'
    },
    {
      purpose: 'Performance Certificate for Overhauling of Unit #1',
      org: 'OPGC',
      signatory: 'D. D. Behera, Sr. Manager (Mechanical)'
    },
    {
      purpose:
        'Performance Certificate for Capital Overhauling of Stage#01, Unit#03, 250 MW',
      org: 'Jindal Power Ltd.',
      signatory: 'Saikat Nandy, DGM – Turbine Maintenance'
    },
    {
      purpose: 'Certificate for Annual Maintenance Contract for Unit 1 & 2',
      org: 'Udupi Power Corp Ltd. (Adani)',
      signatory: 'Chandrahasa. B, Mechanical Maintenance'
    },
    {
      purpose: 'Certificate for Major Overhauling of Unit #10, 800 MW TG',
      org: 'Toshiba JSW',
      signatory: 'Hirono Shuji, Chief Marketing Officer'
    },
    {
      purpose: 'Certificate for Major Overhauling of Unit #20, 800 MW TG',
      org: 'Toshiba JSW',
      signatory: 'Bibhuti Bhusan Behera, DGM / SSD'
    }
  ]

  const duplicatedAwards = [...awards, ...awards, ...awards]

  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-20 text-primary-foreground'>
        <div className='absolute inset-0'>
          <img
            src={heroImage}
            alt='Projects'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>
        <div className='relative container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Our Projects
          </h1>
          <p className='text-lg md:text-xl max-w-3xl mx-auto opacity-95 text-white'>
            700+ Successful Projects Across 125+ Power Plants
          </p>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Flagship Projects
          </h2>
          <div className='space-y-6 max-w-6xl mx-auto'>
            {flagshipProjects.map((project, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-xl transition-shadow'
              >
                <CardContent className='p-0'>
                  {project.image && (
                    <div className='relative h-64 w-full overflow-hidden'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  )}
                  <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 p-8'>
                    <div className='lg:col-span-1 border-l-4 border-accent-blue pl-4'>
                      <div className='text-2xl font-bold text-accent-blue mb-1'>
                        {project.capacity}
                      </div>
                      <div className='text-sm text-accent-yellow mb-3'>
                        {project.year}
                      </div>
                      <div className='text-accent font-semibold text-sm'>
                        {project.client}
                      </div>
                    </div>
                    <div className='lg:col-span-3'>
                      <h3 className='text-2xl font-bold text-accent-blue mb-3'>
                        {project.title}
                      </h3>
                      <p className='text-muted-foreground mb-4 leading-relaxed'>
                        {project.description}
                      </p>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div>
                          <p className='text-sm font-semibold text-accent-yellow mb-1'>
                            Scope of Work:
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            {project.scope}
                          </p>
                        </div>
                        <div>
                          <p className='text-sm font-semibold text-accent-yellow mb-1'>
                            Key Achievement:
                          </p>
                          <p className='text-sm text-accent-blue'>
                            {project.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - Infinite Slider */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden'>
        <div className='container mx-auto px-4 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-2 text-gray-900'>
            <Award className='w-8 h-8 text-yellow-500' />
            Awards & Recognitions
          </h2>
          <p className='text-center text-gray-600 mt-2'>
            Excellence recognized by industry leaders
          </p>
        </div>

        <div
          className='relative'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className='flex gap-8 animate-scroll'
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {duplicatedAwards.map((award, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-[calc(33.333vw-2.67rem)] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200'
              >
                <div className='p-8'>
                  <div className='flex items-start gap-4 mb-4'>
                    <div className='bg-yellow-100 p-3 rounded-full'>
                      <Award className='w-8 h-8 text-yellow-600' />
                    </div>
                    <div className='flex-1'>
                      <div className='text-sm font-semibold text-blue-600 mb-1'>
                        {award.org}
                      </div>
                      <h3 className='text-xl font-bold text-gray-900 leading-tight'>
                        {award.name}
                      </h3>
                    </div>
                  </div>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    {award.desc}
                  </p>
                  <div className='flex items-center gap-2 text-sm'>
                    <ChevronRight className='w-4 h-4 text-yellow-600' />
                    <span className='text-blue-600 font-semibold'>
                      {award.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-2 text-gray-900'>
            <FileCheck2 className='w-8 h-8 text-blue-600' />
            Performance Certificates
          </h2>
          <p className='text-center text-gray-600 mb-12'>
            Certified excellence in power plant operations
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
            {certificates.map((cert, index) => (
              <div
                key={index}
                className='flex flex-col h-full bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-100 overflow-hidden group'
              >
                {/* Header */}
                <div className='bg-gradient-to-r from-blue-600 to-blue-500 p-4'>
                  <div className='flex items-center justify-center gap-2'>
  <FileCheck2 className='w-6 h-6 text-white' />
  <h3 className='text-md font-bold text-white text-center'>{cert.org}</h3>
</div>

                </div>

                {/* Content - vertically centered */}
                <div className='flex-1 flex flex-col justify-center p-6'>
                  <p className='text-gray-900 text-xl text-center font-semibold leading-snug'>
                    {cert.purpose}
                  </p>
                </div>

                {/* Bottom hover bar */}
                <div className='h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333vw * ${awards.length} - ${
        awards.length * 32
      }px));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Projects
