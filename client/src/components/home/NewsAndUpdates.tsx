import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { News } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const NewsAndUpdates = () => {
  const { t } = useTranslation();
  const { data: newsItems, isLoading, error } = useQuery<News[]>({ 
    queryKey: ['/api/news']
  });

  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, i) => (
      <article key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
        <Skeleton className="w-full h-48" />
        <div className="p-4">
          <Skeleton className="h-4 w-1/4 mb-2" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </article>
    ));
  };

  if (error) {
    return (
      <section className="py-12 px-4 bg-neutral-lighter">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{t("news.title")}</h2>
            <Link href="/news">
              <a className="text-secondary font-medium hover:underline flex items-center">
                {t("news.view.all")}
                <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </a>
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <p className="text-center text-neutral-medium">
              Failed to load news and updates. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-neutral-lighter">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t("news.title")}</h2>
          <Link href="/news">
            <a className="text-secondary font-medium hover:underline flex items-center">
              {t("news.view.all")}
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading 
            ? renderSkeletons() 
            : newsItems?.map(item => (
                <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  {item.imagePath && (
                    <img 
                      src={item.imagePath} 
                      alt={item.title} 
                      className="w-full h-48 object-cover" 
                    />
                  )}
                  <div className="p-4">
                    <span className="text-xs text-neutral-medium">{item.date}</span>
                    <h3 className="font-bold text-lg mt-1 mb-2">{item.title}</h3>
                    <p className="text-neutral-medium mb-3">{item.summary}</p>
                    <Link href={`/news/${item.slug}`}>
                      <a className="text-secondary font-medium hover:underline">
                        {t("news.read.more")}
                      </a>
                    </Link>
                  </div>
                </article>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
