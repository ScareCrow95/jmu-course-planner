import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Checkbox,
  Divider,
  Button,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Background from '../components/common/Background'
import { MdChevronLeft } from 'react-icons/md'
import { useUIStore } from '../store/rootStore'
import StudentInfo from '../components/Signup/StudentInfo'
import Courses from '../components/Signup/Courses'
import Goals from '../components/Signup/Goals'
const SignUp = observer(() => {
  const ui = useUIStore()
  return (
    <>
      {ui.form === 'info' && <StudentInfo />}
      {ui.form === 'course' && <Courses />}
      {ui.form === 'goals' && <Goals />}
    </>
  )
})

export default SignUp
