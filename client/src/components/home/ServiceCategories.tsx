import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { ServiceCategory, Service } from "@shared/schema";
import CategoryCard from "../services/CategoryCard";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCategories = () => {
  const { t } = useTranslation();
  const { data: categories, isLoading, error } = useQuery<ServiceCategory[]>({ 
    queryKey: ['/api/categories']
  });

  const renderSkeletons = () => {
    return Array(6).fill(0).map((_, i) => (
      <div key={i} className="border border-neutral-light rounded-lg overflow-hidden">
        <Skeleton className="h-40 w-full" />
        <div className="p-4">
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    ));
  };

  if (error) {
    return (
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">{t("categories.title")}</h2>
          <div className="p-6 bg-white rounded-lg">
            <p className="text-center text-neutral-medium">
              Failed to load service categories. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">{t("categories.title")}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading 
            ? renderSkeletons() 
            : categories?.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
