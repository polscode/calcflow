import React, { ReactElement, ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface AccordionHeaderProps{
  children: ReactNode;
  assignKey? : ()=> void;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({children, assignKey}) => {

  return(
    <TouchableOpacity>
      {
        React.Children.map(children, child=>
          React.isValidElement(child) ? React.cloneElement(child as ReactElement<any>, { onPress: assignKey}) : child
        )
      }
    </TouchableOpacity>
  )
}