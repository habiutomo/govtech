import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
const enResources = {
  translation: {
    // Banner
    "official.website": "An official website of the United States government",
    "official.learn.more": "Here's how you know",
    
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Service categories
    "categories.benefits": "Benefits & Assistance",
    "categories.health": "Health & Insurance",
    "categories.housing": "Housing & Community",
    "categories.taxes": "Taxes & Finance",
    "categories.jobs": "Jobs & Education",
    "categories.travel": "Travel & Transportation",
    "categories.view.all": "View All Services",
    
    // Hero section
    "hero.title": "Your gateway to government services",
    "hero.subtitle": "Access information, resources, and services designed to serve citizens efficiently and transparently.",
    "hero.button.find": "Find Services",
    "hero.button.contact": "Contact Support",
    
    // Service highlights
    "services.popular": "Popular Services",
    "services.learn.more": "Learn more",
    
    // Service categories section
    "categories.title": "Browse Services by Category",
    "categories.view.all": "View all {{category}} services",
    
    // Life events section
    "life.events.title": "Browse by Life Event",
    "life.events.subtitle": "Find services related to important life milestones",
    
    // Contact form
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions about government services? Send us a message and we'll respond within 2 business days.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.topic": "Topic",
    "contact.form.topic.select": "Select a topic",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Submit Message",
    
    // FAQs
    "faq.title": "Frequently Asked Questions",
    "faq.view.all": "View all frequently asked questions",
    
    // News section
    "news.title": "News & Updates",
    "news.view.all": "View all news",
    "news.read.more": "Read more",
    
    // Footer
    "footer.about": "About",
    "footer.resources": "Resources",
    "footer.help": "Help",
    "footer.connect": "Connect",
    "footer.subscribe": "Stay Updated",
    "footer.subscribe.text": "Sign up for email updates",
    "footer.rights": "© 2023 GovTech - Government Services Portal. All rights reserved.",
    
    // Search
    "search.placeholder": "Search for services",
    "search.button": "Search",
    "search.results.title": "Search Results for \"{{query}}\"",
    "search.results.none": "No results found for \"{{query}}\"",
    
    // Not found page
    "notfound.title": "404 Page Not Found",
    "notfound.message": "The page you're looking for doesn't exist or has been moved."
  }
};

// Spanish translations
const esResources = {
  translation: {
    // Banner
    "official.website": "Un sitio web oficial del gobierno de los Estados Unidos",
    "official.learn.more": "Así es como lo sabe",
    
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre Nosotros",
    "nav.contact": "Contacto",
    
    // Service categories
    "categories.benefits": "Beneficios y Asistencia",
    "categories.health": "Salud y Seguros",
    "categories.housing": "Vivienda y Comunidad",
    "categories.taxes": "Impuestos y Finanzas",
    "categories.jobs": "Empleos y Educación",
    "categories.travel": "Viajes y Transporte",
    "categories.view.all": "Ver Todos los Servicios",
    
    // Hero section
    "hero.title": "Su puerta de entrada a servicios gubernamentales",
    "hero.subtitle": "Acceda a información, recursos y servicios diseñados para servir a los ciudadanos de manera eficiente y transparente.",
    "hero.button.find": "Encontrar Servicios",
    "hero.button.contact": "Contactar Soporte",
    
    // Service highlights
    "services.popular": "Servicios Populares",
    "services.learn.more": "Aprender más",
    
    // Service categories section
    "categories.title": "Navegar por Servicios por Categoría",
    "categories.view.all": "Ver todos los servicios de {{category}}",
    
    // Life events section
    "life.events.title": "Navegar por Evento de Vida",
    "life.events.subtitle": "Encuentre servicios relacionados con hitos importantes de la vida",
    
    // Contact form
    "contact.title": "Contáctenos",
    "contact.subtitle": "¿Tiene preguntas sobre servicios gubernamentales? Envíenos un mensaje y responderemos dentro de 2 días hábiles.",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Dirección de Correo Electrónico",
    "contact.form.topic": "Tema",
    "contact.form.topic.select": "Seleccione un tema",
    "contact.form.message": "Su Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    
    // FAQs
    "faq.title": "Preguntas Frecuentes",
    "faq.view.all": "Ver todas las preguntas frecuentes",
    
    // News section
    "news.title": "Noticias y Actualizaciones",
    "news.view.all": "Ver todas las noticias",
    "news.read.more": "Leer más",
    
    // Footer
    "footer.about": "Acerca de",
    "footer.resources": "Recursos",
    "footer.help": "Ayuda",
    "footer.connect": "Conectar",
    "footer.subscribe": "Manténgase Actualizado",
    "footer.subscribe.text": "Suscríbase para recibir actualizaciones por correo electrónico",
    "footer.rights": "© 2023 GovTech - Portal de Servicios Gubernamentales. Todos los derechos reservados.",
    
    // Search
    "search.placeholder": "Buscar servicios",
    "search.button": "Buscar",
    "search.results.title": "Resultados de búsqueda para \"{{query}}\"",
    "search.results.none": "No se encontraron resultados para \"{{query}}\"",
    
    // Not found page
    "notfound.title": "404 Página No Encontrada",
    "notfound.message": "La página que está buscando no existe o ha sido movida."
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: enResources,
      es: esResources
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
