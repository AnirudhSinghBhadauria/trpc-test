"use client";

import React, { useRef } from "react";
import { trpc } from "../_trpc/client";
import { trpcOnServer } from "../_trpc/server";

const NameForm = ({
  nameData,
}: {
  nameData: Awaited<ReturnType<(typeof trpcOnServer)["getTodo"]>>;
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const names = trpc.getTodo.useQuery(undefined, {
    initialData: nameData,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const nameMutation = trpc.setName.useMutation({
    onSettled() {
      names.refetch();
    },
  });

  return (
    <div>
      {names.data?.map(({ name }) => (
        <p>{name}</p>
      ))}
      <form
        ref={ref}
        action={async (formData) => {
          const name = formData.get("name") as string;

          ref.current!.reset();
          nameMutation.mutate(name);
        }}
      >
        <input name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NameForm;
