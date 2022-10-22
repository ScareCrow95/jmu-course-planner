import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { MdChevronLeft } from 'react-icons/md'

const BackButton = observer(({ click }) => {
  return (
    <Flex
      cursor='pointer'
      onClick={click}
      position='absolute'
      top='24px'
      left='-20px'
      boxSize='40px'
      bg='#270745'
      rounded='full'
      justify='center'
      align='center'
      shadow='base'>
      <Icon as={MdChevronLeft} boxSize={8} mr='2px' />
    </Flex>
  )
})

export default BackButton
