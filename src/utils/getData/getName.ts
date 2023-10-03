import { trpc } from "@/app/_trpc/client";

export const getName = () => {
  const names = trpc.getTodo.useQuery();

  return names.data;
};
