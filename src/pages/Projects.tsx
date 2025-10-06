import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import heroImage from "@/assets/rotor-assembly.jpg";
import kudgiImage from "@/assets/projects/kudgi-toshiba.jpg";
import sipatImage from "@/assets/projects/sipat-600mw.jpg";


const Projects = () => {
  const flagshipProjects = [
    {
      title: "NTPC Shaktinagar - Industry Benchmark",
      year: "1994",
      capacity: "210 MW",
      description: "Completed LMZ TG Set overhaul in record 43 days, setting an industry benchmark that established ECO Group as a leader in rapid, quality execution.",
      client: "NTPC Limited",
      scope: "Complete turbine-generator overhaul",
      achievement: "43-day completion - Industry record",
      image: null
    },
    {
      title: "NTPC Kudgi - Toshiba Technology",
      capacity: "800 MW",
      description: "Major turbine-generator overhaul for Toshiba equipment at NTPC Kudgi, one of India's most efficient supercritical thermal power plants.",
      client: "NTPC Limited",
      scope: "800 MW TG Set overhaul through Toshiba",
      achievement: "Supercritical unit expertise demonstrated",
      image: kudgiImage
    },
    {
      title: "NTPC Sipat - High Capacity Unit",
      capacity: "660 MW",
      description: "Successfully executed comprehensive overhaul of 660 MW unit at NTPC Sipat, ensuring continued high performance and reliability.",
      client: "NTPC Limited",
      scope: "660 MW unit overhaul and maintenance",
      achievement: "Zero downtime extension achieved",
      image: sipatImage
    },
    {
      title: "Adani Mundra Power Plant",
      capacity: "4620 MW",
      description: "Executed multi-unit project involving 660 MW & 330 MW TG Set (Dongfeng) overhaul.",
      client: "Adani Power",
      scope: "Multi-unit TG Set overhaul",
      achievement: "Multi-brand expertise demonstrated",
      image: null
    },
    {
      title: "NTPC Vindhyachal",
      capacity: "500 MW",
      description: "Completed high-capacity 500 MW TG Set (KWU) overhaul with precision and efficiency.",
      client: "NTPC Limited",
      scope: "500 MW TG Set (KWU) overhaul",
      achievement: "KWU technology expertise",
      image: null
    },
    {
      title: "NTPC Dadri",
      capacity: "490 MW",
      description: "Successfully executed a major 490 MW TG Set (KWU) overhaul, demonstrating our technical expertise.",
      client: "NTPC Limited",
      scope: "490 MW TG Set (KWU) overhaul",
      achievement: "Complex KWU unit handled successfully",
      image: null
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            700+ Successful Projects Across 100+ Power Plants
          </p>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Flagship Projects
          </h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            {flagshipProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  {project.image && (
                    <div className="relative h-64 w-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-8">
                    <div className="lg:col-span-1 border-l-4 border-accent pl-4">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {project.capacity}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {project.year || "Ongoing"}
                      </div>
                      <div className="text-accent font-semibold text-sm">
                        {project.client}
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-sm font-semibold mb-1">Scope of Work:</p>
                          <p className="text-sm text-muted-foreground">{project.scope}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1">Key Achievement:</p>
                          <p className="text-sm text-accent">{project.achievement}</p>
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

      {/* Project Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Project Excellence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">700+</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Power Plants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">0%</div>
                <div className="text-sm text-muted-foreground">Client Attrition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
