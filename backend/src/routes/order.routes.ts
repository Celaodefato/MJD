import { Router, Request, Response } from "express";
import prisma from "../utils/prisma.js";

const router = Router();

// POST /orders (Create an order and check stock)
router.post("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const { customerName, customerEmail, customerPhone, zipCode, street, number, complement, neighborhood, city, state, paymentMethod, items } = req.body;

    // Run within a transaction to ensure stock consistency
    const result = await prisma.$transaction(async (tx) => {
      let totalPrice = 0;

      // 1. Verify stock and calculate total price
      for (const item of items) {
        const product = await tx.product.findUnique({ where: { id: item.productId } });
        if (!product || !product.isActive) throw new Error(`Product ${item.productId} not available`);
        if (product.stock < item.quantity) throw new Error(`Not enough stock for product ${product.name}`);
        
        totalPrice += product.price * item.quantity;
      }

      // 2. Create the order
      const newOrder = await tx.order.create({
        data: {
          customerName, customerEmail, customerPhone,
          zipCode, street, number, complement, neighborhood, city, state,
          paymentMethod, totalPrice,
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price // could also fetch from DB to be safer but MVP we trust front or re-verify
            }))
          }
        }
      });

      // 3. Deduct stock
      for (const item of items) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      }

      return newOrder;
    });

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to create order" });
  }
});

// GET /orders (Admin)
router.get("/", async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

export default router;
