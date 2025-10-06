import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import heroImage from "../assets/team-platform.jpg";
import ctaImage from "../assets/turbine-blue.jpg";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      setShowSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "Eastern Sector",
      address: "400/B/1T, N.S.C. Bose Road, G-02 (B/25), L.N. Colony, Kolkata – 700047",
      phone: "033 - 24305257 / 09903986171",
      email: "rvkarma..ecopowerservices.in",
      contactPerson: "Rajendra Vishwakarma",
    },
    {
      city: "Rest of India",
      address: "I - 7, DLF Industrial Area, Phase-1, Faridabad – 121003",
      phone: "0129 - 4018639, 9717294105",
      email: "eps..ecopowerservices.in",
      contactPerson: "Helal Akhter Khan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Get in Touch with Our Team
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card className="border-none shadow-2xl border-t-4 border-t-accent">
                <CardContent className="p-8 relative">
                  {/* Success Overlay */}
                  {showSuccess && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg animate-in fade-in duration-300">
                      <div className="text-center">
                        <div className="mb-4 inline-block animate-in zoom-in duration-500">
                          <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">We'll get back to you soon.</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email..company.com"
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        required
                        type="tel"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        disabled={isSubmitting}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        required
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help you?"
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your requirements..."
                        rows={5}
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-none shadow-2xl border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-primary">{office.city}</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <p className="text-muted-foreground">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary">
                            {office.email}
                          </a>
                        </div>
                        <div className="pt-3 border-t">
                          <p className="text-sm font-medium">Contact Person:</p>
                          <p className="text-sm text-muted-foreground">{office.contactPerson}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Business Hours */}
                <Card className="border-none shadow-xl bg-muted">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                      <div className="pt-3 mt-3 border-t">
                        <p className="text-accent font-semibold">24x7 Emergency Support Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="relative py-16 text-primary-foreground">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="Emergency Support" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Support
          </h2>
          <p className="text-lg mb-6 opacity-95">
            For urgent breakdown or emergency services, please call:
          </p>
          <div className="text-3xl font-bold mb-2 text-accent">
            +91 98300 12345 (24x7)
          </div>
          <p className="text-sm opacity-90">
            Our rapid response team is always ready to assist you
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;