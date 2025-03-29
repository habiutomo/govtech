import {
  users, type User, type InsertUser,
  serviceCategories, type ServiceCategory, type InsertServiceCategory,
  services, type Service, type InsertService,
  lifeEvents, type LifeEvent, type InsertLifeEvent,
  faqs, type FAQ, type InsertFAQ,
  news, type News, type InsertNews,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Service Category operations
  getAllServiceCategories(): Promise<ServiceCategory[]>;
  getServiceCategory(id: number): Promise<ServiceCategory | undefined>;
  getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | undefined>;
  createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory>;

  // Service operations
  getAllServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  getServicesByCategory(categoryId: number): Promise<Service[]>;
  getPopularServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  searchServices(query: string): Promise<Service[]>;

  // Life Event operations
  getAllLifeEvents(): Promise<LifeEvent[]>;
  getLifeEvent(id: number): Promise<LifeEvent | undefined>;
  getLifeEventBySlug(slug: string): Promise<LifeEvent | undefined>;
  createLifeEvent(lifeEvent: InsertLifeEvent): Promise<LifeEvent>;

  // FAQ operations
  getAllFAQs(): Promise<FAQ[]>;
  getFAQ(id: number): Promise<FAQ | undefined>;
  createFAQ(faq: InsertFAQ): Promise<FAQ>;

  // News operations
  getAllNews(): Promise<News[]>;
  getNews(id: number): Promise<News | undefined>;
  getNewsBySlug(slug: string): Promise<News | undefined>;
  createNews(newsItem: InsertNews): Promise<News>;

  // Contact Message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private serviceCategories: Map<number, ServiceCategory>;
  private services: Map<number, Service>;
  private lifeEvents: Map<number, LifeEvent>;
  private faqs: Map<number, FAQ>;
  private news: Map<number, News>;
  private contactMessages: Map<number, ContactMessage>;
  
  private userCurrentId: number;
  private serviceCategoryCurrentId: number;
  private serviceCurrentId: number;
  private lifeEventCurrentId: number;
  private faqCurrentId: number;
  private newsCurrentId: number;
  private contactMessageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.serviceCategories = new Map();
    this.services = new Map();
    this.lifeEvents = new Map();
    this.faqs = new Map();
    this.news = new Map();
    this.contactMessages = new Map();
    
    this.userCurrentId = 1;
    this.serviceCategoryCurrentId = 1;
    this.serviceCurrentId = 1;
    this.lifeEventCurrentId = 1;
    this.faqCurrentId = 1;
    this.newsCurrentId = 1;
    this.contactMessageCurrentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Add sample service categories
    const categories = [
      {
        name: "Benefits & Assistance",
        description: "Financial help, food assistance, unemployment",
        iconName: "hand-holding-dollar",
        colorClass: "primary-light",
        slug: "benefits-assistance"
      },
      {
        name: "Health & Insurance",
        description: "Healthcare, insurance plans, medical programs",
        iconName: "stethoscope",
        colorClass: "secondary",
        slug: "health-insurance"
      },
      {
        name: "Housing & Community",
        description: "Housing assistance, community development",
        iconName: "city",
        colorClass: "neutral-medium",
        slug: "housing-community"
      },
      {
        name: "Taxes & Finance",
        description: "Tax filing, financial assistance, loans",
        iconName: "landmark",
        colorClass: "accent",
        slug: "taxes-finance"
      },
      {
        name: "Jobs & Education",
        description: "Career resources, education opportunities",
        iconName: "graduation-cap",
        colorClass: "success",
        slug: "jobs-education"
      },
      {
        name: "Travel & Transportation",
        description: "Passports, transportation services, transit",
        iconName: "plane",
        colorClass: "warning",
        slug: "travel-transportation"
      }
    ];

    categories.forEach(cat => this.createServiceCategory(cat));

    // Add sample services
    const servicesData = [
      {
        title: "Apply for ID Card",
        description: "Get or renew your government-issued identification",
        iconName: "id-card",
        categoryId: 1,
        slug: "apply-id-card",
        content: "Complete guide to applying for a government ID card.",
        isPopular: true
      },
      {
        title: "Pay Taxes Online",
        description: "File and pay taxes securely through our portal",
        iconName: "file-invoice",
        categoryId: 4,
        slug: "pay-taxes-online",
        content: "Instructions for filing and paying taxes through our online system.",
        isPopular: true
      },
      {
        title: "Housing Assistance",
        description: "Explore programs for affordable housing",
        iconName: "house-user",
        categoryId: 3,
        slug: "housing-assistance",
        content: "Information about housing assistance programs available to citizens.",
        isPopular: true
      },
      {
        title: "Social Security",
        description: "Apply for and manage your Social Security benefits",
        iconName: "shield",
        categoryId: 1,
        slug: "social-security",
        content: "Information about Social Security benefits and how to apply.",
        isPopular: false
      },
      {
        title: "Food Assistance Programs",
        description: "Learn about food stamps and other nutrition assistance",
        iconName: "utensils",
        categoryId: 1,
        slug: "food-assistance",
        content: "Details about food assistance programs available for eligible citizens.",
        isPopular: false
      },
      {
        title: "Unemployment Insurance",
        description: "Apply for unemployment benefits if you've lost your job",
        iconName: "hand-holding-heart",
        categoryId: 1,
        slug: "unemployment-insurance",
        content: "Guidelines for applying for unemployment insurance benefits.",
        isPopular: false
      },
      {
        title: "Health Insurance Marketplace",
        description: "Find affordable health insurance plans",
        iconName: "hospital",
        categoryId: 2,
        slug: "health-insurance-marketplace",
        content: "Information about health insurance plans available through the marketplace.",
        isPopular: false
      },
      {
        title: "Medicare Enrollment",
        description: "Enroll in Medicare health insurance for seniors",
        iconName: "notes-medical",
        categoryId: 2,
        slug: "medicare-enrollment",
        content: "Details about Medicare enrollment eligibility and process.",
        isPopular: false
      },
      {
        title: "Veterans Health Benefits",
        description: "Healthcare services for military veterans",
        iconName: "medal",
        categoryId: 2,
        slug: "veterans-health-benefits",
        content: "Information about health benefits available to military veterans.",
        isPopular: false
      }
    ];

    servicesData.forEach(service => this.createService(service));

    // Add sample life events
    const lifeEventsData = [
      { name: "Birth & Early Childhood", iconName: "baby", slug: "birth-childhood" },
      { name: "Education & Training", iconName: "graduation-cap", slug: "education-training" },
      { name: "Employment", iconName: "briefcase", slug: "employment" },
      { name: "Marriage", iconName: "ring", slug: "marriage" },
      { name: "Housing & Moving", iconName: "house-user", slug: "housing-moving" },
      { name: "Health Events", iconName: "heart-pulse", slug: "health-events" },
      { name: "Military Service", iconName: "user-shield", slug: "military-service" },
      { name: "Retirement", iconName: "person-cane", slug: "retirement" }
    ];

    lifeEventsData.forEach(event => this.createLifeEvent(event));

    // Add sample FAQs
    const faqsData = [
      {
        question: "How do I reset my account password?",
        answer: "Visit the login page and click on \"Forgot Password\". You'll receive instructions via email to reset your password. For security reasons, password reset links expire after 24 hours."
      },
      {
        question: "Where can I find my tax ID number?",
        answer: "Your tax ID number can be found on previous tax returns, Social Security cards, or official correspondence from the tax authority. If you can't locate it, you can request it through the secure messaging feature in your online tax account."
      },
      {
        question: "How long does it take to process a passport application?",
        answer: "Standard processing takes 6-8 weeks from the time of application. Expedited service (for an additional fee) typically takes 2-3 weeks. Processing times may vary during peak travel seasons or due to other circumstances."
      },
      {
        question: "Am I eligible for housing assistance?",
        answer: "Eligibility for housing assistance depends on factors including income, family size, citizenship status, and local availability. Use our eligibility screening tool under the Housing & Community section to check your qualification status."
      },
      {
        question: "How do I report a change of address?",
        answer: "You can report a change of address online through the Postal Service website, in person at any post office location, or by completing a Change of Address form. Be sure to update your address with specific government agencies for services you receive."
      }
    ];

    faqsData.forEach(faq => this.createFAQ(faq));

    // Add sample news
    const newsData = [
      {
        title: "New Healthcare Program Launched",
        content: "The Department of Health has announced a new initiative to expand healthcare access in rural communities. This comprehensive program aims to establish medical facilities in underserved areas and provide telemedicine options for residents who live far from hospitals. Funding has been allocated to training healthcare professionals who commit to working in rural communities for at least five years.",
        summary: "The Department of Health has announced a new initiative to expand healthcare access in rural communities.",
        date: "April 12, 2023",
        imagePath: "https://images.unsplash.com/photo-1541872703-74c5e44368f9",
        slug: "new-healthcare-program"
      },
      {
        title: "Tax Filing Deadline Extended",
        content: "The IRS has announced a 30-day extension for filing taxes due to recent natural disasters in affected areas. This extension applies to residents of counties officially declared disaster zones by FEMA. Taxpayers in these areas will automatically receive the extension without needing to file additional paperwork. Those who need further assistance can contact the special disaster relief hotline established by the IRS.",
        summary: "The IRS has announced a 30-day extension for filing taxes due to recent natural disasters in affected areas.",
        date: "April 5, 2023",
        imagePath: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        slug: "tax-filing-deadline-extended"
      },
      {
        title: "Small Business Grants Available",
        content: "New recovery grants for small businesses have been announced with applications opening next month. These grants range from $10,000 to $50,000 and are designed to help small businesses recover from economic challenges. Eligible businesses must have fewer than 50 employees and demonstrate revenue loss compared to pre-pandemic levels. The application process has been streamlined to ensure funds can be disbursed quickly to qualifying businesses.",
        summary: "New recovery grants for small businesses have been announced with applications opening next month.",
        date: "March 28, 2023",
        imagePath: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        slug: "small-business-grants"
      }
    ];

    newsData.forEach(newsItem => this.createNews(newsItem));
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Service Category operations
  async getAllServiceCategories(): Promise<ServiceCategory[]> {
    return Array.from(this.serviceCategories.values());
  }

  async getServiceCategory(id: number): Promise<ServiceCategory | undefined> {
    return this.serviceCategories.get(id);
  }

  async getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | undefined> {
    return Array.from(this.serviceCategories.values()).find(
      (category) => category.slug === slug,
    );
  }

  async createServiceCategory(insertCategory: InsertServiceCategory): Promise<ServiceCategory> {
    const id = this.serviceCategoryCurrentId++;
    const category: ServiceCategory = { ...insertCategory, id };
    this.serviceCategories.set(id, category);
    return category;
  }

  // Service operations
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find(
      (service) => service.slug === slug,
    );
  }

  async getServicesByCategory(categoryId: number): Promise<Service[]> {
    return Array.from(this.services.values()).filter(
      (service) => service.categoryId === categoryId,
    );
  }

  async getPopularServices(): Promise<Service[]> {
    return Array.from(this.services.values()).filter(
      (service) => service.isPopular === true,
    );
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.serviceCurrentId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async searchServices(query: string): Promise<Service[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.services.values()).filter(
      (service) => 
        service.title.toLowerCase().includes(lowercaseQuery) || 
        service.description.toLowerCase().includes(lowercaseQuery) ||
        service.content.toLowerCase().includes(lowercaseQuery)
    );
  }

  // Life Event operations
  async getAllLifeEvents(): Promise<LifeEvent[]> {
    return Array.from(this.lifeEvents.values());
  }

  async getLifeEvent(id: number): Promise<LifeEvent | undefined> {
    return this.lifeEvents.get(id);
  }

  async getLifeEventBySlug(slug: string): Promise<LifeEvent | undefined> {
    return Array.from(this.lifeEvents.values()).find(
      (lifeEvent) => lifeEvent.slug === slug,
    );
  }

  async createLifeEvent(insertLifeEvent: InsertLifeEvent): Promise<LifeEvent> {
    const id = this.lifeEventCurrentId++;
    const lifeEvent: LifeEvent = { ...insertLifeEvent, id };
    this.lifeEvents.set(id, lifeEvent);
    return lifeEvent;
  }

  // FAQ operations
  async getAllFAQs(): Promise<FAQ[]> {
    return Array.from(this.faqs.values());
  }

  async getFAQ(id: number): Promise<FAQ | undefined> {
    return this.faqs.get(id);
  }

  async createFAQ(insertFAQ: InsertFAQ): Promise<FAQ> {
    const id = this.faqCurrentId++;
    const faq: FAQ = { ...insertFAQ, id };
    this.faqs.set(id, faq);
    return faq;
  }

  // News operations
  async getAllNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async getNews(id: number): Promise<News | undefined> {
    return this.news.get(id);
  }

  async getNewsBySlug(slug: string): Promise<News | undefined> {
    return Array.from(this.news.values()).find(
      (newsItem) => newsItem.slug === slug,
    );
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = this.newsCurrentId++;
    const newsItem: News = { ...insertNews, id };
    this.news.set(id, newsItem);
    return newsItem;
  }

  // Contact Message operations
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
