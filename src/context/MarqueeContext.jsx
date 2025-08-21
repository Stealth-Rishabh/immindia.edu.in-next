"use client";
import { createContext, useState, useContext } from "react";

const MarqueeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMarquee = () => useContext(MarqueeContext);

export const MarqueeProvider = ({ children }) => {
  const [marqueeText, setMarqueeText] = useState(
    "Phase-4 Applications Closed "
  );
  const [isBBAPage, setIsBBAPage] = useState(false);

  return (
    <MarqueeContext.Provider
      value={{ marqueeText, setMarqueeText, isBBAPage, setIsBBAPage }}
    >
      {children}
    </MarqueeContext.Provider>
  );
};
