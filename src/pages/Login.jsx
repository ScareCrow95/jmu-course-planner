import { Center, Flex, Text, Image, Input, Button } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import Lottie from 'react-lottie'
import { LottieAnimations, LottieConfig } from '../constants/lottie'
import { URL } from '../constants/url'
import btn from '../assets/images/googleBtn.png'
import Background from '../components/common/Background'
import { useStores } from '../store/rootStore'

const Login = observer(() => {
  const { uiStore } = useStores()
  return (
    <Background>
      <Image src='/images/title.png' w='300px' mb={6} alt='title' />
      <Flex
        direction='column'
        p={12}
        rounded='lg'
        align='center'
        backdropFilter='blur(8px)'
        bg='rgb(0,0,0,.45)'>
        <Input mb={2} placeholder='Email' />
        <Input placeholder='password' type='password' />
        <Text
          mt={3}
          fontWeight='semibold'
          cursor='pointer'
          color='grey.200'
          _hover={{ color: 'pr.100' }}>
          Forgot Password
        </Text>
        <Button
          colorScheme='orange'
          variant='outline'
          mt={12}
          w='100%'
          onClick={() => {
            uiStore.view = 'form'
          }}>
          Login
        </Button>
        <Text mt={4}>
          Don't have an account?{' '}
          <Text color='pr.100' as='span' fontWeight='bold' cursor='pointer'>
            Sign Up
          </Text>{' '}
          here
        </Text>
      </Flex>
    </Background>
  )
})

export default Login
