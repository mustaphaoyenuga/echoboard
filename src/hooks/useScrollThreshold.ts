"use client";

import { useState } from "react";
import { useEventListener } from "usehooks-ts";

export const useScrollThreshold = (threshold: number) => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEventListener("scroll", () => {
    if (window.scrollY > threshold) {
      setIsPastThreshold(true);
    } else {
      setIsPastThreshold(false);
    }
  });

  return isPastThreshold;
};
