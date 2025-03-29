import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { Service } from "@shared/schema";
import ServiceCard from "@/components/services/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const SearchResults = () => {
  const { t } = useTranslation();
  const [location] = useLocation();
  
  // Get search query from URL
  const params = new URLSearchParams(location.split('?')[1]);
  const query = params.get('q') || '';
  
  const { data: services, isLoading, error } = useQuery<Service[]>({ 
    queryKey: [`/api/services/search?q=${encodeURIComponent(query)}`],
    enabled: !!query
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

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {t("search.results.title", { query })}
          </h1>
        </div>

        {error ? (
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-center text-neutral-medium">
              An error occurred while searching. Please try again.
            </p>
          </div>
        ) : isLoading ? (
          <div className="space-y-4">
            {renderSkeletons()}
          </div>
        ) : services && services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="p-8 bg-white rounded-lg shadow text-center">
            <h2 className="text-xl font-bold mb-4">
              {t("search.results.none", { query })}
            </h2>
            <p className="mb-6">
              Try using different keywords or browse our service categories.
            </p>
            <Button 
              className="bg-primary text-white hover:bg-primary-light"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
