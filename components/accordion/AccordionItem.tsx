
import React, { ReactNode } from "react";
import { AccordionBody } from "./AccordionBody";
import { AccordionHeader } from "./AccordionHeader";
import { useAccordion } from "./hook/useAccordion";


interface AccordionItemProps {
  children: ReactNode;
  itemKey: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({children, itemKey}) => {

const {currentKey, setCurrentKey} = useAccordion();

const assignKey = () => {
  setCurrentKey(currentKey === itemKey? null : itemKey)
}

let header: ReactNode = null
let body: ReactNode = null

React.Children.forEach(children, child => {
  if(React.isValidElement(child)) {
    if(child.type === AccordionHeader) {
      header = child
    } else if (child.type === AccordionBody){
      body = child
    }
  }
})

  return(
    <>
      {header && React.cloneElement(header as React.ReactElement<any>, {assignKey})}
      {body && React.cloneElement(body as React.ReactElement<any>, {isOpen: currentKey === itemKey})}
    </>
  )
}

export default AccordionItem;
