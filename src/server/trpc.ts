import { trpc } from "@/app/_trpc/client";
import { Context } from "@/app/_trpc/context";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.context<Context>().create();

const isAuth = t.middleware(({ ctx, next }) => {
  const { state } = ctx;

  if (state !== "AUTHORIZED") {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next();
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const adminProcedure = publicProcedure.use(isAuth);
