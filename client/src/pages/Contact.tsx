import { useTranslation } from "react-i18next";
import ContactForm from "@/components/common/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">{t("contact.title")}</h1>
          <p className="text-neutral-medium max-w-xl mx-auto">{t("contact.subtitle")}</p>
        </div>
        
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold mb-4">Send us a message</h2>
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-neutral-medium">
                      1234 Government Plaza<br />
                      Washington, DC 20500<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-neutral-medium">
                      (123) 456-7890
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-neutral-medium">
                      contact@govtech.gov
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-neutral-medium">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex space-x-3">
                    <a href="#" className="text-secondary hover:text-primary" aria-label="Facebook">
                      <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a href="#" className="text-secondary hover:text-primary" aria-label="Twitter">
                      <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="#" className="text-secondary hover:text-primary" aria-label="Instagram">
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a href="#" className="text-secondary hover:text-primary" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
