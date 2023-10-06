import { httpBatchLink } from "@trpc/client";
import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  return {
    state: "AUTHORIZED",
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
      }),
    ],
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
