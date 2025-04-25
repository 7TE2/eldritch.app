import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // The app is a static showcase site, no backend routes needed
  const httpServer = createServer(app);
  return httpServer;
}
