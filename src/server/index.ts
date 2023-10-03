import { PrismaClient } from "@prisma/client";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodo: publicProcedure.query(async () => {
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: { name: "anirudh" },
    });

    return user;
  }),
});

export type AppRouter = typeof appRouter;
