import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        serviceInterest: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.serviceInterest || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Public Relations",
    "Reputation Management", 
    "Events",
    "Social Media Management & Content Creation",
    "Influencer Management"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            Let's discuss how our award-winning team can drive exceptional results for your brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern Dubai office building" 
              className="rounded-2xl shadow-lg mb-8"
            />
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-bannerton-light p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-bannerton-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-bannerton-navy">Dubai Office</h4>
                  <p className="text-bannerton-gray">Business Bay, Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-bannerton-light p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-bannerton-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-bannerton-navy">Phone</h4>
                  <p className="text-bannerton-gray">+971 54 343 7673</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-bannerton-light p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-bannerton-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-bannerton-navy">Email</h4>
                  <p className="text-bannerton-gray">sharon@bannerton.ie</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-bannerton-light p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-bannerton-navy font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-2 focus:ring-bannerton-navy focus:border-bannerton-navy"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-bannerton-navy font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-2 focus:ring-bannerton-navy focus:border-bannerton-navy"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-bannerton-navy font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 focus:ring-bannerton-navy focus:border-bannerton-navy"
                  placeholder="john@company.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-bannerton-navy font-medium">
                  Company *
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-2 focus:ring-bannerton-navy focus:border-bannerton-navy"
                  placeholder="Your Company"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="serviceInterest" className="text-bannerton-navy font-medium">
                  Service Interest *
                </Label>
                <Select onValueChange={(value) => handleInputChange('serviceInterest', value)} value={formData.serviceInterest}>
                  <SelectTrigger className="mt-2 focus:ring-bannerton-navy focus:border-bannerton-navy">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-bannerton-navy font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-2 focus:ring-bannerton-navy focus:border-bannerton-navy"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-bannerton-navy hover:bg-bannerton-blue text-white py-4 font-semibold transition-colors duration-300"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
