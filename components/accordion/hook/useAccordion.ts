import { useContext } from "react";
import { AccordionContext, AccordionContextType } from "../context/AccordionContext";

export const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
}