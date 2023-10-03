"use client";

import { getName } from "@/utils/getData/getName";

const Homepage = () => {
  const nameData = getName();

  return nameData?.map(({ id, name }) => <p key={id}>{name}</p>);
};

export default Homepage;
