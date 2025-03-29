import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Service } from "@shared/schema";
import ServiceCard from "../services/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceHighlights = () => {
  const { t } = useTranslation();
  const { data: services, isLoading, error } = useQuery<Service[]>({ 
    queryKey: ['/api/services/popular']
  });

  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, i) => (
      <div key={i} className="bg-white rounded-lg shadow p-6">
        <div className="flex items-start">
          <Skeleton className="h-10 w-10 rounded-full mr-4" />
          <div className="w-full">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      </div>
    ));
  };

  if (error) {
    return (
      <section className="py-10 px-4 bg-neutral-lighter">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">{t("services.popular")}</h2>
          <div className="p-6 bg-white rounded-lg">
            <p className="text-center text-neutral-medium">
              Failed to load popular services. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 bg-neutral-lighter">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">{t("services.popular")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading 
            ? renderSkeletons() 
            : services?.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
