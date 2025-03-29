import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { LifeEvent } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const LifeEvents = () => {
  const { t } = useTranslation();
  const { data: lifeEvents, isLoading, error } = useQuery<LifeEvent[]>({ 
    queryKey: ['/api/life-events']
  });

  const renderSkeletons = () => {
    return Array(8).fill(0).map((_, i) => (
      <div key={i} className="bg-white p-6 rounded-lg text-center">
        <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
        <Skeleton className="h-5 w-3/4 mx-auto" />
      </div>
    ));
  };

  if (error) {
    return (
      <section className="py-12 px-4 bg-neutral-lighter">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-2">{t("life.events.title")}</h2>
          <p className="text-neutral-medium mb-8">{t("life.events.subtitle")}</p>
          <div className="p-6 bg-white rounded-lg">
            <p className="text-center text-neutral-medium">
              Failed to load life events. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-neutral-lighter">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">{t("life.events.title")}</h2>
        <p className="text-neutral-medium mb-8">{t("life.events.subtitle")}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {isLoading 
            ? renderSkeletons() 
            : lifeEvents?.map(event => (
                <Link key={event.id} href={`/life-events/${event.slug}`}>
                  <a className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                    <i className={`fas fa-${event.iconName} text-primary text-3xl mb-4`}></i>
                    <h3 className="font-medium">{event.name}</h3>
                  </a>
                </Link>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default LifeEvents;
