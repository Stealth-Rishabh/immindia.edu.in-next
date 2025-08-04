"use client";

import { createContext, useContext, useState } from "react";

const MetaContext = createContext();

export function MetaProvider({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <MetaContext.Provider value={{ title, description, setTitle, setDescription }}>
      {children}
    </MetaContext.Provider>
  );
}

export function useMeta() {
  const context = useContext(MetaContext);
  if (!context) {
    throw new Error("useMeta must be used within a MetaProvider");
  }
  return context;
} 