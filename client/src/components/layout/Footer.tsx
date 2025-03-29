import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would send this to an API
    toast({
      title: "Subscribed!",
      description: "You have been subscribed to our newsletter",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2">
              <li><Link href="/about"><a className="hover:underline">About GovTech</a></Link></li>
              <li><a href="#" className="hover:underline">Organization Structure</a></li>
              <li><a href="#" className="hover:underline">Leadership</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Budget and Performance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">A-Z Index of Agencies</a></li>
              <li><a href="#" className="hover:underline">Forms</a></li>
              <li><a href="#" className="hover:underline">Government Data</a></li>
              <li><a href="#" className="hover:underline">Publications</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.help")}</h3>
            <ul className="space-y-2">
              <li><Link href="/contact"><a className="hover:underline">Contact Us</a></Link></li>
              <li><a href="#" className="hover:underline">Report an Issue</a></li>
              <li><a href="#" className="hover:underline">Web Accessibility</a></li>
              <li><a href="#" className="hover:underline">Site Feedback</a></li>
              <li><a href="#" className="hover:underline">Help & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.connect")}</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-neutral-lighter" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-lighter" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-lighter" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-lighter" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-lighter" aria-label="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-2">{t("footer.subscribe")}</h3>
            <p className="mb-2">{t("footer.subscribe.text")}</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-3 py-2 text-neutral-dark rounded-l-md w-full"
                aria-label="Email address for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-r-md transition-colors" 
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Service</a>
              <a href="#" className="text-sm hover:underline">Accessibility</a>
              <a href="#" className="text-sm hover:underline">FOIA</a>
              <a href="#" className="text-sm hover:underline">No FEAR Act</a>
            </div>
            
            <div className="text-sm">
              <p>{t("footer.rights")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
