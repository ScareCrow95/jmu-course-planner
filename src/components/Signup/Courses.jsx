import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Select,
  Button,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Background from '../common/Background'
import { useUIStore } from '../../store/rootStore'
import { MdDelete } from 'react-icons/md'
import BackButton from '../common/BackButton'

const courseCode = {
  CS: [101, 159, 224, 240, 361, 261, 455],
  CIS: [320, 454, 340, 102],
  ISAT: [105, 234, 295, 333],
  PHYS: [101, 102, 210, 322],
  MATH: [101, 302, 340, 343],
  IT: [101, 208, 209, 443],
}

const semester = [
  'Fall 2019',
  'Spring 2020',
  'Summer 2020',
  'Fall 2020',
  'Spring 2021',
  'Summer 2021',
  'Fall 2021',
  'Spring 2022',
  'Summer 2022',
  'Fall 2022',
]

const Courses = observer(() => {
  const ui = useUIStore()

  return (
    <Background>
      <Flex
        direction='column'
        p={12}
        pt={5}
        mx={2}
        rounded='lg'
        backdropFilter='blur(8px)'
        bg='rgb(0,0,0,.45)'>
        <Flex direction='column' align='center'>
          <BackButton click={() => (ui.form = 'info')} />
          <Text fontSize='2xl' fontWeight='bold' mb={2}>
            Select all the courses you have taken
          </Text>
          <Text>If they are transfer credits, select the JMU equivalent</Text>
        </Flex>
        <Select mt={6} onChange={(e) => (ui.formCourse = e.target.value)}>
          {Object.keys(courseCode).map((x) => {
            return (
              <option id={x} value={x} selected={ui.formCourse === x}>
                {x}
              </option>
            )
          })}
        </Select>
        <Select mt={3} onChange={(e) => (ui.formCourseNum = e.target.value)}>
          {courseCode[ui.formCourse]?.map((x) => {
            return (
              <option id={x} value={x} selected={ui.formCourseNum === x}>
                {x}
              </option>
            )
          })}
        </Select>
        <Select mt={3} onChange={(e) => (ui.formCourseSem = e.target.value)}>
          {semester?.map((x) => {
            return (
              <option id={x} value={x} selected={ui.formCourseSem === x}>
                {x}
              </option>
            )
          })}
        </Select>
        <Button
          colorScheme='green'
          variant='outline'
          my={8}
          w='100%'
          onClick={() => {
            console.log(ui.formCourse)
            ui.courses.set(
              ui.formCourse + ui.formCourseNum + ui.formCourseSem,
              {
                num: ui.formCourseNum,
                name: ui.formCourse,
                sem: ui.formCourseSem,
              }
            )
            console.log(ui.courses.size)
          }}>
          Add
        </Button>
        <Text fontWeight='bold' fontSize='xl' mb={3}>
          Your Courses
        </Text>
        <Flex
          direction='column'
          h='200px'
          overflowY='auto'
          css={ui.scrollCSS}
          pr={2}>
          {ui.courseArr.map((x) => {
            return (
              <Flex
                align='center'
                key={x.name + x.num + x.sem}
                bg='rgb(0,0,0,.3)'
                cursor='pointer'
                _hover={{ bg: 'rgb(0,0,0,.5)', shadow: 'lg' }}
                p={2}
                mb={1}
                role='group'
                rounded='md'>
                <Text w='70px'>{x.name}</Text>
                <Text w='70px'>{x.num}</Text>
                <Text flex={1}>{x.sem}</Text>
                <Icon
                  onClick={() => {
                    ui.courses.delete(x.name + x.num + x.sem)
                  }}
                  as={MdDelete}
                  color='red.100'
                  boxSize={6}
                  opacity='.3'
                  _groupHover={{ opacity: 1 }}
                />
              </Flex>
            )
          })}
        </Flex>
        <Button
          colorScheme='orange'
          variant='outline'
          my={8}
          w='100%'
          onClick={() => {
            ui.form = 'goals'
          }}>
          Continue
        </Button>
      </Flex>
    </Background>
  )
})

export default Courses
