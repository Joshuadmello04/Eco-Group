import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import heroImage from "../assets/team-platform.jpg";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";

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

  // ✅ FINAL submit handler → Node API → SQL Server
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setShowSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setShowSuccess(false), 3000);
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
      address:
        "400/B/1T, N.S.C. Bose Road, G-02 (B/25), L.N. Colony, Kolkata – 700047",
      phone: "033 - 24305257 / 09903986171",
      email: "eps@ecopowerservices.in",
      contactPerson: "Rajendra Vishwakarma",
    },
    {
      city: "Rest of India",
      address:
        "I - 7, DLF Industrial Area, Phase-1, Faridabad – 121003",
      phone: "0129 - 4018639, 9717294105",
      email: "eps@ecopowerservices.in",
      contactPerson: "Helal Akhter Khan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
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
              <h2 className="text-3xl font-bold mb-6">
                Send Us a Message
              </h2>

              <Card className="border-none shadow-2xl border-t-4 border-t-accent">
                <CardContent className="p-8 relative">
                  {/* Success Overlay */}
                  {showSuccess && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-green-600 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground">
                          We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />

                    <Input
                      required
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />

                    <Input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />

                    <Input
                      placeholder="Company name"
                      value={formData.company}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />

                    <Input
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />

                    <Textarea
                      required
                      rows={5}
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Offices
              </h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="shadow-xl">
                    <CardContent className="p-8 space-y-3">
                      <h3 className="text-xl font-bold">
                        {office.city}
                      </h3>
                      <p className="flex gap-2">
                        <MapPin /> {office.address}
                      </p>
                      <p className="flex gap-2">
                        <Phone /> {office.phone}
                      </p>
                      <p className="flex gap-2">
                        <Mail /> {office.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Contact Person: {office.contactPerson}
                      </p>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-muted shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock />
                      <h3 className="text-xl font-bold">
                        Business Hours
                      </h3>
                    </div>
                    <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 9:00 AM – 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="mt-3 font-semibold text-accent">
                      24x7 Emergency Support Available
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
