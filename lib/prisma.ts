import { PrismaClient } from "@/lib/generated/prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient({
    log: [],
    accelerateUrl: process.env.ACCELERATE_URL || "",
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;