import { PortfolioContext } from "@/context/portfolio.context";
import { useContext } from "react";

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within Provider");
  return context;
};
