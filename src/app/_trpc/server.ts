import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

export const trpcOnServer = appRouter.createCaller({
  state: "anirudh",
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
