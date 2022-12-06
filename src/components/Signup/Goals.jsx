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
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Background from '../common/Background'
import { useUIStore } from '../../store/rootStore'
import BackButton from '../common/BackButton'
import GoalsModal from './GoalsModal'
import { MdInfo } from 'react-icons/md'

const CheckboxItem = observer(({ name, id, mt = '0' }) => {
  const ui = useUIStore()

  return (
    <Flex align='center' role='group' cursor='pointer'>
      <Checkbox
        colorScheme='orange'
        mt={mt}
        // isChecked={ui.minors.has(name)}
        onChange={(e) => {
          if (e.target.checked) {
            ui.minors.add(name)
          } else {
            ui.minors.delete(name)
          }
        }}
      />
      <Text ml={2}>{name}</Text>
      <Icon
        onClick={() => {
          ui.goalType = id
          ui.dialog = 'goals'
        }}
        as={MdInfo}
        boxSize={6}
        color='pr.100'
        ml={2}
        cursor='pointer'
        opacity='0.1'
        transition='opacity ease 200ms'
        _groupHover={{ opacity: 1 }}
      />
    </Flex>
  )
})

const Goals = observer(() => {
  const ui = useUIStore()
  return (
    <Background>
      <Flex
        direction='column'
        p={12}
        pt={6}
        mx={2}
        rounded='lg'
        backdropFilter='blur(8px)'
        bg='rgb(0,0,0,.45)'>
        <BackButton
          click={() => {
            if (ui.enrollStatus === 'new' && !ui.courseElligible) {
              ui.form = 'info'
            } else {
              ui.form = 'course'
            }
          }}
        />
        <Text fontSize='2xl' fontWeight='bold' mb={2}>
          Select all the secondary goals that you would like
        </Text>
        <Divider my={3} />
        <Text fontSize='xl' fontWeight='bold' mb={2}>
          Minors (CS Related)
        </Text>
        {/* <Checkbox colorScheme='orange'>Computer Information Systems</Checkbox> */}
        <CheckboxItem name='CIS' id='cis' />
        <CheckboxItem name='Math' id='math' />
        <CheckboxItem name='Physics' id='physics' />
        <CheckboxItem name='Robotics' id='robotics' />

        <Divider my={3} />

        <Text fontSize='xl' fontWeight='bold' mb={2}>
          Certificates
        </Text>
        <Flex role='group' cursor='pointer'>
          <Checkbox colorScheme='orange' mt='-20px' />
          <Text ml={2}>
            National Security Agency (NSA) <br />
            Cyber Intelligence Graduate Certification
          </Text>
          <Icon
            as={MdInfo}
            onClick={() => {
              ui.goalType = 'nsa'
              ui.dialog = 'goals'
            }}
            boxSize={6}
            color='pr.100'
            ml={2}
            cursor='pointer'
            opacity='0.1'
            transition='opacity ease 200ms'
            _groupHover={{ opacity: 1 }}
          />
        </Flex>
        <CheckboxItem name='Virginia Tech Accelerated Masters' id='vt' />

        <Button
          colorScheme='orange'
          variant='outline'
          mt={12}
          w='100%'
          onClick={() => {
            ui.view = 'info'
          }}>
          Continue
        </Button>
      </Flex>
      <GoalsModal />
    </Background>
  )
})

export default Goals
