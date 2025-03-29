import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { FAQ } from "@shared/schema";
import ContactForm from "../common/ContactForm";
import Accordion from "../common/Accordion";
import { Skeleton } from "@/components/ui/skeleton";

const ContactAndFAQ = () => {
  const { t } = useTranslation();
  const { data: faqs, isLoading, error } = useQuery<FAQ[]>({ 
    queryKey: ['/api/faqs']
  });

  const renderSkeletons = () => {
    return Array(5).fill(0).map((_, i) => (
      <div key={i} className="border border-neutral-light rounded-md mb-4">
        <div className="p-4">
          <Skeleton className="h-5 w-3/4" />
        </div>
      </div>
    ));
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("contact.title")}</h2>
            <p className="mb-6">{t("contact.subtitle")}</p>
            
            <ContactForm />
          </div>
          
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("faq.title")}</h2>
            
            <div className="space-y-4">
              {isLoading ? (
                renderSkeletons()
              ) : error ? (
                <div className="p-4 border border-red-200 rounded-md bg-red-50">
                  <p className="text-red-700">
                    Failed to load FAQs. Please try again later.
                  </p>
                </div>
              ) : (
                faqs?.map(faq => (
                  <Accordion 
                    key={faq.id} 
                    title={faq.question} 
                    content={faq.answer} 
                  />
                ))
              )}
            </div>
            
            <div className="mt-6">
              <Link href="/faqs">
                <a className="text-secondary font-medium hover:underline flex items-center">
                  {t("faq.view.all")}
                  <i className="fas fa-chevron-right ml-1 text-xs"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndFAQ;
