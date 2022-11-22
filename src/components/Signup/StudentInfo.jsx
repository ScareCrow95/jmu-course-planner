import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Divider,
  Checkbox,
  Button,
  Link,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Background from '../common/Background'
import { MdChevronLeft } from 'react-icons/md'
import { useUIStore } from '../../store/rootStore'
import BackButton from '../common/BackButton'

const StudentInfo = observer(() => {
  const ui = useUIStore()
  return (
    <Background justify='' align='' overflow='hidden'>
      <Image src='/images/seal.png' boxSize='160px' mb={6} alt='jmu-seal' />
      <Flex
        direction='column'
        p={12}
        pt={5}
        mx={2}
        rounded='lg'
        backdropFilter='blur(8px)'
        bg='rgb(0,0,0,.45)'>
        <Flex direction='column'>
          <BackButton click={() => (ui.view = 'login')} />
          <Flex align='center'>
            <Text fontSize='3xl' fontWeight='bold' alignSelf='center' px={8}>
              Student Information
            </Text>
          </Flex>
          <Divider my={5} />
          <Text fontSize='xl' fontWeight='bold' mb={2}>
            Enrollment Status
          </Text>
          <Checkbox colorScheme='orange'>Current Student</Checkbox>
          <Checkbox colorScheme='orange'>New Student</Checkbox>
        </Flex>
        <Flex direction='column' mt={4}>
          <Text fontSize='xl' fontWeight='bold' mb={2}>
            Course Status
          </Text>
          <Text mb={2}>Do you have courses eligible to transfer?</Text>
          <Checkbox colorScheme='orange'>Current Student</Checkbox>
          <Checkbox colorScheme='orange'>New Student</Checkbox>

          <Text
            mt={3}
            _hover={{ color: 'pr.100' }}
            onClick={() => {
              window.open(
                'https://www.jmu.edu/registrar/transfer/index.shtml',
                '_blank'
              )
            }}
            fontWeight='semibold'
            cursor='pointer'>
            I don't know
          </Text>
        </Flex>
        <Flex direction='column' mt={4}>
          <Text fontSize='xl' fontWeight='bold' mb={2}>
            What year are you?
          </Text>
          <Checkbox colorScheme='orange'>Freshman</Checkbox>
          <Checkbox colorScheme='orange'>Sophomore</Checkbox>
          <Checkbox colorScheme='orange'>Junior</Checkbox>
          <Checkbox colorScheme='orange'>Senior</Checkbox>
        </Flex>
        <Button
          colorScheme='orange'
          variant='outline'
          mt={12}
          w='100%'
          onClick={() => {
            ui.form = 'course'
          }}>
          Continue
        </Button>
      </Flex>
    </Background>
  )
})

export default StudentInfo
