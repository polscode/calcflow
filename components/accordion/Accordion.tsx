
import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { AccordionContext } from './context/AccordionContext';

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({children, className}) => {

  const [currentKey, setCurrentKey] = useState<number | null>(null)

  return (
    <AccordionContext.Provider
      value={{currentKey, setCurrentKey}}
    >
      <View className={`${className}`}>
        {children}
      </View>
    </AccordionContext.Provider>
  )
}

export default Accordion
