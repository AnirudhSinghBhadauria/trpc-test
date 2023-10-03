"use client";

import { getName } from "@/utils/getData/getName";

const Homepage = () => {
  const nameData = getName();

  return nameData ? <p>{nameData?.name}</p> : <p>loading..</p>;
};

export default Homepage;
