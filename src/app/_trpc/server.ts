import { createTRPCReact, httpBatchLink } from "@trpc/react-query";

import { appRouter } from "@/server";

export const trpcOnServer = appRouter.createCaller({
  links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
});
