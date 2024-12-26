"use client";
import { createContext } from "react";

export const FunkContext = createContext({
  isFunkEnabled: false,
  setIsFunkEnabled: (enabled: boolean) => {}
}); 