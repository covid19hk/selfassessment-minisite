import React from 'react'

import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'

import { FaHistory, FaPlay } from 'react-icons/fa'

import { motion } from 'framer-motion'

const MotionIcon = motion(Icon)

// React app - SelfAssessmentApp
const SelfAssessmentWizard = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={{
        base: 0,
        sm: 5,
        md: 12
      }}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >

    </Flex>
  )
}

export default SelfAssessmentWizard