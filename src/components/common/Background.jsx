import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

const Background = observer((props) => {
  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='sec.300'
      direction='column'
      position='relative'>
      <Image
        alt='background-image'
        src='/images/bg.png'
        zIndex={0}
        h='100%'
        w='100%'
        objectFit='cover'
        position='absolute'
      />
      <Flex
        position='absolute'
        w='100%'
        h='100%'
        bg='linear-gradient(to top, #3204fdba, #9907facc)'
        zIndex={0}
      />
      <Flex
        w='100vw'
        h='100vh'
        justify='center'
        align='center'
        position='relative'
        overflow='hidden'
        zIndex={1}
        direction='column'>
        <Flex
          direction='column'
          overflowY='auto'
          px={3}
          justify='center'
          align='center'>
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Background
