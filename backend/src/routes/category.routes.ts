import { Router, Request, Response } from "express";
import prisma from "../utils/prisma.js";

const router = Router();

// GET /categories
router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// POST /categories (Admin)
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body;
    const newCategory = await prisma.category.create({
      data: { name, slug }
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
});

export default router;
