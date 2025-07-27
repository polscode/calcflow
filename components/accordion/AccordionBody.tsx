import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, View } from "react-native";

interface AccordionBodyProps {
  children: ReactNode;
  isOpen?: boolean;
}

export const AccordionBody: React.FC<AccordionBodyProps> = ({children, isOpen}) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [bodyHeight, setBodyHeight] = useState(0);
  const handleLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    setBodyHeight(height);
    return height;
  };

  useEffect(() => {

    Animated.timing(animatedHeight, {
      toValue: isOpen ? bodyHeight : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen, bodyHeight, animatedHeight]);


  return (
    <Animated.View
      style={{height: animatedHeight, overflow: 'hidden'}}
    >
      <View
        className="absolute"
        onLayout={handleLayout}
      >
        {children}
      </View>
    </Animated.View>
  );
}

