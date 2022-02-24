import React from 'react'

import {
  Flex,
  useColorModeValue
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

const SiteLayout = ({ children }) => {
  return (
    <MotionFlex
      as='main'
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={{
        base: 0,
        sm: 5,
        md: 12
      }}
      bg={useColorModeValue('gray.50', 'gray.800')}

      initial={{
        opacity: 0,
        y: -200
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: 200
      }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.55
      }}
    >
      {children}
    </MotionFlex>
  )
}

export default SiteLayout