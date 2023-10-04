"use client";

import { submitFormData } from "@/actions/form-data";
import React from "react";
import { trpc } from "../_trpc/client";
import { getName } from "@/utils/getData/getName";

const NameForm = () => {
  const names = trpc.getTodo.useQuery();

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
        action={async (formData) => {
          const name = submitFormData(formData);

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
