import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertFaqSchema,
  insertLifeEventSchema,
  insertNewsSchema,
  insertServiceCategorySchema,
  insertServiceSchema 
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix for all routes
  const API_PREFIX = '/api';

  // Helper to handle validation errors
  const handleValidationError = (error: unknown, res: Response) => {
    if (error instanceof ZodError) {
      const validationError = fromZodError(error);
      return res.status(400).json({ message: validationError.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  };

  // Service Categories routes
  app.get(`${API_PREFIX}/categories`, async (req: Request, res: Response) => {
    try {
      const categories = await storage.getAllServiceCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get(`${API_PREFIX}/categories/:slug`, async (req: Request, res: Response) => {
    try {
      const category = await storage.getServiceCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error fetching category:", error);
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  app.post(`${API_PREFIX}/categories`, async (req: Request, res: Response) => {
    try {
      const validData = insertServiceCategorySchema.parse(req.body);
      const newCategory = await storage.createServiceCategory(validData);
      res.status(201).json(newCategory);
    } catch (error) {
      return handleValidationError(error, res);
    }
  });

  // Services routes
  app.get(`${API_PREFIX}/services`, async (req: Request, res: Response) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  app.get(`${API_PREFIX}/services/popular`, async (req: Request, res: Response) => {
    try {
      const services = await storage.getPopularServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching popular services:", error);
      res.status(500).json({ message: "Failed to fetch popular services" });
    }
  });

  app.get(`${API_PREFIX}/services/search`, async (req: Request, res: Response) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ message: "Query parameter 'q' is required" });
      }
      const services = await storage.searchServices(query);
      res.json(services);
    } catch (error) {
      console.error("Error searching services:", error);
      res.status(500).json({ message: "Failed to search services" });
    }
  });

  app.get(`${API_PREFIX}/services/:slug`, async (req: Request, res: Response) => {
    try {
      const service = await storage.getServiceBySlug(req.params.slug);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ message: "Failed to fetch service" });
    }
  });

  app.get(`${API_PREFIX}/categories/:categoryId/services`, async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      if (isNaN(categoryId)) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
      const services = await storage.getServicesByCategory(categoryId);
      res.json(services);
    } catch (error) {
      console.error("Error fetching services by category:", error);
      res.status(500).json({ message: "Failed to fetch services by category" });
    }
  });

  app.post(`${API_PREFIX}/services`, async (req: Request, res: Response) => {
    try {
      const validData = insertServiceSchema.parse(req.body);
      const newService = await storage.createService(validData);
      res.status(201).json(newService);
    } catch (error) {
      return handleValidationError(error, res);
    }
  });

  // Life Events routes
  app.get(`${API_PREFIX}/life-events`, async (req: Request, res: Response) => {
    try {
      const lifeEvents = await storage.getAllLifeEvents();
      res.json(lifeEvents);
    } catch (error) {
      console.error("Error fetching life events:", error);
      res.status(500).json({ message: "Failed to fetch life events" });
    }
  });

  app.get(`${API_PREFIX}/life-events/:slug`, async (req: Request, res: Response) => {
    try {
      const lifeEvent = await storage.getLifeEventBySlug(req.params.slug);
      if (!lifeEvent) {
        return res.status(404).json({ message: "Life event not found" });
      }
      res.json(lifeEvent);
    } catch (error) {
      console.error("Error fetching life event:", error);
      res.status(500).json({ message: "Failed to fetch life event" });
    }
  });

  app.post(`${API_PREFIX}/life-events`, async (req: Request, res: Response) => {
    try {
      const validData = insertLifeEventSchema.parse(req.body);
      const newLifeEvent = await storage.createLifeEvent(validData);
      res.status(201).json(newLifeEvent);
    } catch (error) {
      return handleValidationError(error, res);
    }
  });

  // FAQ routes
  app.get(`${API_PREFIX}/faqs`, async (req: Request, res: Response) => {
    try {
      const faqs = await storage.getAllFAQs();
      res.json(faqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      res.status(500).json({ message: "Failed to fetch FAQs" });
    }
  });

  app.post(`${API_PREFIX}/faqs`, async (req: Request, res: Response) => {
    try {
      const validData = insertFaqSchema.parse(req.body);
      const newFAQ = await storage.createFAQ(validData);
      res.status(201).json(newFAQ);
    } catch (error) {
      return handleValidationError(error, res);
    }
  });

  // News routes
  app.get(`${API_PREFIX}/news`, async (req: Request, res: Response) => {
    try {
      const news = await storage.getAllNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Failed to fetch news" });
    }
  });

  app.get(`${API_PREFIX}/news/:slug`, async (req: Request, res: Response) => {
    try {
      const newsItem = await storage.getNewsBySlug(req.params.slug);
      if (!newsItem) {
        return res.status(404).json({ message: "News item not found" });
      }
      res.json(newsItem);
    } catch (error) {
      console.error("Error fetching news item:", error);
      res.status(500).json({ message: "Failed to fetch news item" });
    }
  });

  app.post(`${API_PREFIX}/news`, async (req: Request, res: Response) => {
    try {
      const validData = insertNewsSchema.parse(req.body);
      const newNews = await storage.createNews(validData);
      res.status(201).json(newNews);
    } catch (error) {
      return handleValidationError(error, res);
    }
  });

  // Contact Message routes
  app.post(`${API_PREFIX}/contact`, async (req: Request, res: Response) => {
    try {
      const contactData = {
        ...req.body,
        createdAt: new Date().toISOString()
      };
      const validData = insertContactMessageSchema.parse(contactData);
      const newMessage = await storage.createContactMessage(validData);
      res.status(201).json({ 
        success: true,
        message: "Your message has been sent successfully. We'll respond within 2 business days."
      });
    } catch (error) {
      return handleValidationError(error, res);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
