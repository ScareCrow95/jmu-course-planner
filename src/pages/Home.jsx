import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Login from './Login'
import { useStores } from '../store/rootStore'
import SignUp from './SignUp'
import Info from './Info'

const Home = observer(() => {
  const { uiStore } = useStores()
  return (
    <>
      {uiStore.view === 'login' && <Login />}
      {uiStore.view === 'form' && <SignUp />}
      {uiStore.view === 'info' && <Info />}
    </>
  )
})

export default Home
