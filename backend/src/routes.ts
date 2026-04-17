import { Router } from "express";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./routes/auth.routes.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/orders", orderRoutes);
router.use("/auth", authRoutes);

// Admin routes can be accessed with a prefix, but we will protect them inside their specific routes
router.use("/admin/products", productRoutes); // Note: Should have auth middleware
router.use("/admin/orders", orderRoutes); // Note: Should have auth middleware

export default router;
