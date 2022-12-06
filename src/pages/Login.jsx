import { Center, Flex, Text, Image, Input, Button } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import { LottieAnimations, LottieConfig } from '../constants/lottie'
import { URL } from '../constants/url'
import btn from '../assets/images/googleBtn.png'
import Background from '../components/common/Background'
import { useStores } from '../store/rootStore'

const Login = observer(() => {
  // matt@gmail.com
  //123456
  const { uiStore } = useStores()
  const emailRef = useRef()
  const passwordRef = useRef()
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
        <Input mb={2} placeholder='Email' w='320px' ref={emailRef} />
        <Input
          placeholder='Password'
          type='password'
          w='320px'
          ref={passwordRef}
        />
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
            // if (
            //   emailRef.current.value !== 'matt@gmail.com' ||
            //   passwordRef.current.value !== '123456'
            // ) {
            //   uiStore.root.showToast(
            //     'Authentication Error',
            //     'Email or password is wrong',
            //     'error'
            //   )
            // } else {
            uiStore.view = 'form'
            // }
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
