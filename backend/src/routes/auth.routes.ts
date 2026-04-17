import { Router } from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../utils/prisma";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Since this is MVP, we assume password was hashed during creation.
    // Basic hardcoded check for MVP if we want to bootstrap:
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Setup Initial Admin Route (Only for MVP Bootstrap)
router.post("/setup", async (req: Request, res: Response) => {
  try {
    const defaultPassword = await bcrypt.hash("admin123", 10);
    const adminUser = await prisma.user.upsert({
      where: { email: "admin@mjdinstrumentos.com" },
      update: {},
      create: {
        email: "admin@mjdinstrumentos.com",
        name: "Admin",
        password: defaultPassword,
      },
    });
    res.json({ message: "Admin created", adminUser });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
