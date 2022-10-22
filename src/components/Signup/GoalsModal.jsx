import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Button,
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useUIStore } from '../../store/rootStore'

const GoalsModal = observer(() => {
  const ui = useUIStore()
  return (
    <>
      <Modal
        size='xl'
        isOpen={ui.dialog === 'goals'}
        onClose={() => (ui.dialog = '')}>
        <ModalOverlay bg='rgba(82, 21, 118,.7)' />
        <ModalContent bg='#271c30' overflow='hidden'>
          <ModalHeader bg='sec.300'>More Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <Image
              src='/images/goals.jpg'
              w='100%'
              rounded='lg'
              my={4}
              shadow='base'
            />
            <Text>
              All undergraduate Computer Science students who take the following
              courses will receive the NSA approved "Information Systems
              Security Professionals Certification”. Students in this
              certificate program learn Cybersecurity tools and techniques to
              protect networks and systems from the hackers.
            </Text>

            <Text mt={2}>
              No Cybersecurity background is required to participate.All the
              students interested in Cybersecurity are highly encouraged to
              participate in our Cyber Defense Club (CDC)
            </Text>
            <Divider my={4} />
            <Text mb={3} fontWeight='bold'>
              Required Courses
            </Text>
            <Text>● CS457</Text>
            <Text>● CS458</Text>
            <Text>● CS482</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
})

export default GoalsModal
