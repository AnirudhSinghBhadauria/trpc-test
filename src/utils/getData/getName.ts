import { trpc } from "@/app/_trpc/client";

export const getName = () => {
  const namesData = trpc.getTodo.useQuery();

  return namesData.data;
};
