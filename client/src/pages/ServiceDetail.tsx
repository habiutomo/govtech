import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "wouter";
import { Service } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const { data: service, isLoading, error } = useQuery<Service>({ 
    queryKey: [`/api/services/${slug}`]
  });

  if (isLoading) {
    return (
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Skeleton className="h-10 w-1/3 mb-4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
          
          <Card className="p-8">
            <Skeleton className="h-8 w-1/4 mb-6" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            
            <div className="flex gap-3 mt-8">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-28" />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="p-8 text-center">
            <h2 className="text-xl font-bold mb-4">Service Not Found</h2>
            <p className="mb-6">The service you're looking for doesn't exist or has been moved.</p>
            <Link href="/services">
              <Button>Back to Services</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
          <p className="text-neutral-medium">{service.description}</p>
        </div>
        
        <Card className="p-8">
          <div className="flex items-center mb-6">
            <span className="mr-4 text-primary text-3xl">
              <i className={`fas fa-${service.iconName}`}></i>
            </span>
            <h2 className="text-2xl font-bold">About this service</h2>
          </div>
          
          <div className="prose max-w-none">
            <p>{service.content}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <Button className="bg-primary text-white hover:bg-primary-light">
              Apply Now
            </Button>
            <Button variant="outline">
              Download Form
            </Button>
          </div>
          
          <div className="mt-12 p-4 bg-neutral-lighter rounded-md">
            <h3 className="font-bold mb-2">Need help with this service?</h3>
            <p className="text-sm mb-3">
              Contact our support team for assistance with your application or questions about this service.
            </p>
            <Link href="/contact">
              <a className="text-secondary font-medium hover:underline flex items-center">
                Contact Support
                <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </a>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetail;
