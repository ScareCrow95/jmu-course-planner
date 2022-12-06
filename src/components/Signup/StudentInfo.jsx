import {
  Button,
  Divider,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useUIStore } from '../../store/rootStore'
import BackButton from '../common/BackButton'
import Background from '../common/Background'

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
          <RadioGroup
            colorScheme='orange'
            value={ui.enrollStatus}
            onChange={(e) => {
              ui.enrollStatus = e
              if (e === 'new') {
                ui.year = 'freshman'
              }
            }}>
            <Stack direction='row'>
              <Radio value='current'>Current Student</Radio>
              <Radio value='new'>New Student</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex direction='column' mt={4}>
          <Text fontSize='xl' fontWeight='bold' mb={2}>
            Course Status
          </Text>
          <Text mb={2}>Do you have courses eligible to transfer?</Text>
          <RadioGroup
            colorScheme='orange'
            value={ui.courseElligible ? '1' : '2'}
            onChange={(e) => {
              ui.courseElligible = e === '1'
            }}>
            <Stack direction='row'>
              <Radio value='1'>Yes</Radio>
              <Radio value='2'>No</Radio>
            </Stack>
          </RadioGroup>
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

          <RadioGroup
            colorScheme='orange'
            isDisabled={ui.enrollStatus === 'new'}
            onChange={(e) => {
              ui.year = e
            }}
            value={ui.year}>
            <Stack>
              <Radio value='freshman'>Freshman</Radio>
              <Radio value='sophomore'>Sophomore</Radio>
              <Radio value='junior'>Junior</Radio>
              <Radio value='senior'>Senior</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Button
          colorScheme='orange'
          variant='outline'
          mt={12}
          w='100%'
          onClick={() => {
            if (ui.enrollStatus === 'new' && !ui.courseElligible) {
              ui.form = 'goals'
            } else {
              ui.form = 'course'
            }
          }}>
          Continue
        </Button>
      </Flex>
    </Background>
  )
})

export default StudentInfo
