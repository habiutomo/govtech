import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "wouter";
import { ServiceCategory, Service } from "@shared/schema";
import ServiceCard from "@/components/services/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const CategoryServices = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  
  const { data: category, isLoading: categoryLoading } = useQuery<ServiceCategory>({ 
    queryKey: [`/api/categories/${slug}`]
  });
  
  const { data: services, isLoading: servicesLoading, error } = useQuery<Service[]>({ 
    queryKey: [`/api/categories/${category?.id}/services`],
    enabled: !!category?.id
  });
  
  const isLoading = categoryLoading || servicesLoading;

  const renderSkeletons = () => {
    return Array(6).fill(0).map((_, i) => (
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

  if (error || (!isLoading && !category)) {
    return (
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="p-8 bg-white rounded-lg shadow text-center">
            <h2 className="text-xl font-bold mb-4">Category Not Found</h2>
            <p className="mb-6">The category you're looking for doesn't exist or has been moved.</p>
            <Link href="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          {categoryLoading ? (
            <>
              <Skeleton className="h-10 w-1/3 mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">{category?.name}</h1>
              <p className="text-neutral-medium">{category?.description}</p>
            </>
          )}
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-xl font-bold mb-2">No Services Found</h2>
            <p className="mb-4">There are currently no services available in this category.</p>
            <Link href="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryServices;
