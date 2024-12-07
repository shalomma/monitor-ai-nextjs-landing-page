import {
  chakra,
  HTMLChakraProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from "react";

export const Em: React.FC<HTMLChakraProps<'em'>> = ({ children, ...props }) => {
  return (
    <Text
      color={useColorModeValue('black', 'white')}
      as="em"
      fontStyle="normal"
      {...props}
    >
      {children}
    </Text>
  )
}

// @todo make this configurable
export const Br: React.FC<HTMLChakraProps<'span'>> = (props) => {
  return (
    <chakra.span {...props}>
      <br />
    </chakra.span>
  )
}
