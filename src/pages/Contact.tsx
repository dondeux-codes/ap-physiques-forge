import { useState } from "react";
import { Mail, MessageSquare, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    experience: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "",
      experience: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-intensity">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">
            START YOUR
            <br />
            <span className="text-gradient">TRANSFORMATION</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Ready to commit? Fill out the application below and let's discuss how we can 
            help you achieve the results you've been working toward.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card-intense h-fit">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">info@apphysiques.com</div>
                      <div className="text-sm text-gray-400">Response within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-white">Free Consultation</div>
                      <div className="text-gray-300">30-minute strategy call</div>
                      <div className="text-sm text-gray-400">Available for qualified applicants</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-white">Response Time</div>
                      <div className="text-gray-300">Mon-Fri: Within 12 hours</div>
                      <div className="text-sm text-gray-400">Weekends: Within 24 hours</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="font-semibold text-primary mb-2">Application Process</div>
                  <div className="text-sm text-gray-300 space-y-1">
                    <div>1. Submit application form</div>
                    <div>2. Initial qualification review</div>
                    <div>3. Free consultation call</div>
                    <div>4. Program recommendation</div>
                    <div>5. Onboarding & kickoff</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="card-intense">
                <h3 className="text-2xl font-bold text-white mb-6">Coaching Application</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Primary Goal *
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your primary goal</option>
                      <option value="fat-loss">Fat Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="body-recomposition">Body Recomposition</option>
                      <option value="strength">Strength Building</option>
                      <option value="athletic-performance">Athletic Performance</option>
                      <option value="general-fitness">General Fitness</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Training Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                      <option value="returning">Returning after break</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Tell us about your situation *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="What's your current situation? What challenges are you facing? What have you tried before? Be specific about what you want to achieve."
                    />
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-sm text-gray-300">
                      <strong className="text-accent">Please note:</strong> We only work with individuals who are 
                      serious about their transformation and ready to commit to the process. Applications 
                      are reviewed individually, and we maintain high standards for client acceptance.
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-cta"
                  >
                    Submit Application
                  </button>
                </form>
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