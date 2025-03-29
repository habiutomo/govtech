import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <Link href={`/services/${service.slug}`}>
      <a className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start">
          <span className="mr-4 text-secondary text-2xl">
            <i className={`fas fa-${service.iconName}`}></i>
          </span>
          <div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-neutral-medium mb-3">{service.description}</p>
            <span className="text-secondary font-medium flex items-center">
              {t("services.learn.more")}
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ServiceCard;
