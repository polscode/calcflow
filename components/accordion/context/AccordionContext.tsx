import { createContext } from "react";

export interface AccordionContextType {
  currentKey: number | null;
  setCurrentKey: (key: number | null) => void;
}

export const AccordionContext = createContext<AccordionContextType | undefined >(undefined);