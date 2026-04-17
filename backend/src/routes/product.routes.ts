import { Router, Request, Response } from "express";
import prisma from "../utils/prisma.js"; // Needs .js extension with "type": "module" on Node

const router = Router();

// GET /products
router.get("/", async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;
    const filter: any = { isActive: true };
    
    if (category) {
      filter.categoryId = Number(category);
    }
    
    if (search) {
      filter.name = { contains: String(search) }; 
    }
    
    const products = await prisma.product.findMany({
      where: filter,
      include: { category: true }
    });
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /products/:id
router.get("/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
      include: { category: true }
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST /products (Admin)
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock, images, categoryId } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, description, price, stock, images, categoryId: Number(categoryId) }
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

// PUT /products/:id (Admin)
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock, images, isActive, categoryId } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: { name, description, price, stock, images, isActive, categoryId: Number(categoryId) }
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

export default router;
