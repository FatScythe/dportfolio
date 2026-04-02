"use client";

import { PortfolioData } from "@/types/portfolio";
import React, { createContext } from "react";

export const PortfolioContext = createContext<PortfolioData | null>(null);

export function PortfolioProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) {
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}
