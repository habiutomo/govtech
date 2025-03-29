import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ServiceCategory, Service } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryCardProps {
  category: ServiceCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { t } = useTranslation();
  const { data: services, isLoading } = useQuery<Service[]>({ 
    queryKey: [`/api/categories/${category.id}/services`]
  });
  
  // Get up to 3 services for this category
  const topServices = services?.slice(0, 3) || [];
  
  return (
    <div className="border border-neutral-light rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className={`h-40 bg-${category.colorClass} flex items-center justify-center`}>
        <i className={`fas fa-${category.iconName} text-white text-4xl`}></i>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{category.name}</h3>
        <p className="text-neutral-medium mb-4">{category.description}</p>
        
        <ul className="space-y-2 mb-4">
          {isLoading ? (
            <>
              <li><Skeleton className="h-4 w-3/4" /></li>
              <li><Skeleton className="h-4 w-2/3" /></li>
              <li><Skeleton className="h-4 w-3/4" /></li>
            </>
          ) : topServices.length > 0 ? (
            topServices.map(service => (
              <li key={service.id}>
                <Link href={`/services/${service.slug}`}>
                  <a className="text-secondary hover:underline">{service.title}</a>
                </Link>
              </li>
            ))
          ) : (
            <li className="text-neutral-medium">No services available</li>
          )}
        </ul>
        
        <Link href={`/categories/${category.slug}`}>
          <a className="text-secondary font-medium hover:underline flex items-center">
            {t("categories.view.all", { category: category.name.split(' ')[0] })}
            <i className="fas fa-chevron-right ml-1 text-xs"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
