import { PrismaClient } from "@prisma/client";
import { publicProcedure, router } from "./trpc";
import z from "zod";

const prisma = new PrismaClient();

export const appRouter = router({
  getTodo: publicProcedure.query(async () => {
    const user = await prisma.user.findMany({});

    return user;
  }),
  setName: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    const makeName = await prisma.user.create({
      data: { name: input },
    });
  }),
});

export type AppRouter = typeof appRouter;
