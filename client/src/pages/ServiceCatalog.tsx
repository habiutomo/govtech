import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Service } from "@shared/schema";
import ServiceCard from "@/components/services/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCatalog = () => {
  const { t } = useTranslation();
  const { data: services, isLoading, error } = useQuery<Service[]>({ 
    queryKey: ['/api/services']
  });

  const renderSkeletons = () => {
    return Array(9).fill(0).map((_, i) => (
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

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">All Government Services</h1>
          <p className="text-neutral-medium">Browse all available services and resources</p>
        </div>

        {error ? (
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-center text-neutral-medium">
              Failed to load services. Please try again later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading 
              ? renderSkeletons() 
              : services?.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCatalog;
