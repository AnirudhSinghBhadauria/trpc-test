"use client";

import { getName } from "@/lib/getName";
import React from "react";

const Name = () => {
  const nameData = getName();

  return nameData ? nameData.map(({ name }) => <p>{name}</p>) : <p>loading....</p>
};

export default Name;
