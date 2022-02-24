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

import { Link } from "gatsby"

import { Search2Icon } from '@chakra-ui/icons'

import { FaHistory, FaPlay } from 'react-icons/fa'

import { motion } from 'framer-motion'

import SiteLayout from '@components/SiteLayout'

const MotionIcon = motion(Icon)
const MotionFlex = motion(Flex)

// React app - SelfAssessmentApp
const IndexPage = () => {
  return (
    <SiteLayout>
      <MotionFlex
      >
        <Stack
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={{
            base: 21,
            md: 144
          }}
          py={{
            base: 89,
            md: ''
          }}
          spacing={8}
          align={'center'}
        >
          <Stack align={'center'} spacing={2} mb={21}>
            <MotionIcon
              as={Search2Icon}
              boxSize='5.5em'
              mb={5}
              color={'black'}
              animate={{
                scale: [1, 1.34, 1.21, 0.89, 1],
                rotate: [0, 13, 0, -21, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
              // color={useColorModeValue('red.700', 'red.200')}
            />
            <Heading
              textTransform={'uppercase'}
              fontSize={'3xl'}
              color={useColorModeValue('blue.800', 'blue.200')}
              pb={2}
              align={'center'}
            >
              What is my COVID-19 Status?
            </Heading>
            <Text maxWidth='27rem' align={'justify'} color={'black'}>
              This mini evaluation aims to help you knowing more of your COVID-19 status, it <strong>CANNOT</strong> be seen as a medical consultation or diagnosis.
            </Text>
            <Text maxWidth='27rem' align={'justify'} color={'black'}>
              If you have any doubts, please consult your family doctor, or visit a nearby clinic as soon as possible.
            </Text>
          </Stack>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'} justify={'space-between'}>
            <Button
              // bg={'blue.700'}
              rounded={'full'}
              color={'blue.700'}
              // flex={'1 0 auto'}
              _hover={{ color: 'blue.800' }}
              _focus={{ color: 'blue.800' }}
              variant='outline'
            >
              <Icon as={FaHistory} boxSize='1em' mr={3} />
              History
            </Button>
            <Button
              as={Link}
              bg={'blue.700'}
              rounded={'full'}
              color={'white'}
              // flex={'1 0 auto'}
              _hover={{ bg: 'blue.800' }}
              _focus={{ bg: 'blue.800' }}
              to='/404'
            >
              Start
              <Icon as={FaPlay} boxSize='1em' ml={3} />
            </Button>
          </Stack>
        </Stack>
      </MotionFlex>
    </SiteLayout>
  )
}

export default IndexPage