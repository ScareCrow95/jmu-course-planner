import { Button, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import Background from '../components/common/Background'

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

const Header = observer(() => {
  return (
    <Flex
      rounded='lg'
      m={5}
      mb={1}
      px={2}
      backdropFilter='blur(8px)'
      bg='rgb(0,0,0,.45)'
      direction={['column', 'column', 'row', 'row']}>
      <Flex
        align={['center', 'center', 'flex-start', 'flex-start']}
        direction={['row', 'row', 'column', 'column']}
        p={4}>
        <Text fontSize='sm' color='pr.100' mr={2} flex={[1, 1, 0, 0]}>
          Advisor
        </Text>
        <Flex direction='column'>
          <Text fontWeight='bold' fontSize='xl' mr={2}>
            John Doe
          </Text>
          <Text fontSize='sm'>doe@jmu.edu</Text>
        </Flex>
      </Flex>
      <Divider display={['inherit', 'inherit', 'none', 'none']} />
      <Divider orientation={'vertical'} mx={3} />
      <Flex direction={['row']}>
        <Flex direction='column' p={4}>
          <Text fontSize='sm' color='pr.100'>
            Total Credit Count
          </Text>
          <Text fontWeight='bold' fontSize='xl'>
            119
          </Text>
        </Flex>
        <Divider orientation='vertical' mx={3} />
        <Flex direction='column' p={4}>
          <Text fontSize='sm' color='pr.100'>
            Transfer Credits
          </Text>
          <Text fontWeight='bold' fontSize='xl'>
            3
          </Text>
        </Flex>
        <Divider orientation='vertical' mx={3} />
        <Flex direction='column' p={4}>
          <Text fontSize='sm' color='pr.100'>
            Minors
          </Text>
          <Text fontWeight='bold' fontSize='xl'>
            CIS, IT
          </Text>
        </Flex>
      </Flex>

      <Spacer />
      <Flex direction='column' p={4} justify='center' mb={2}>
        <Button colorScheme='orange' size='sm' variant='outline'>
          Export
        </Button>
      </Flex>
    </Flex>
  )
})

const Semester = observer(() => {
  return (
    <Flex
      m={2}
      rounded='lg'
      backdropFilter='blur(8px)'
      bg='rgb(0,0,0,.45)'
      w={['100%', '100%', '350px', '350px']}
      //   w='100%'
      direction='column'
      p={3}>
      <Flex direction='column' p={3}>
        <Text>Semester: Fall 2020</Text>
      </Flex>
      <Divider my={2} />
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th borderColor='#5E2D8C' color='white'>
                Course Name
              </Th>
              <Th borderColor='#5E2D8C' color='white'>
                Credit Count
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td borderColor='#5E2D8C'>CS343</Td>
              <Td borderColor='#5E2D8C'>3</Td>
            </Tr>
            <Tr>
              <Td borderColor='#5E2D8C'>CS361</Td>
              <Td borderColor='#5E2D8C'>3</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
})

const Tips = observer(() => {
  return (
    <Flex
      minW='400px'
      flex={1}
      m={2}
      rounded='lg'
      backdropFilter='blur(8px)'
      bg='rgb(0,0,0,.45)'
      direction='column'
      p={3}>
      <Text flex={1} fontWeight='bold'>
        Difficulty Assesment
      </Text>
      <Divider my={2} />
      <Flex flex={1} direction='column'>
        <Text mb={1} fontWeight='bold'>
          Tips
        </Text>
        <Text ml={1} fontSize='sm'>
          ● Tip 1
        </Text>
        <Text ml={1} fontSize='sm'>
          ● Tip 2
        </Text>
        <Text ml={1} fontSize='sm'>
          ● Tip 3
        </Text>
      </Flex>
    </Flex>
  )
})

const Info = observer(() => {
  return (
    <Background justify='' align='' overflow='hidden'>
      <Header />
      <Flex m={3} mt={0} rounded='lg' direction='column' overflowY='auto'>
        <Flex wrap='wrap'>
          <Semester />
          <Semester />
          <Semester />
          <Tips />
          <Divider my={5} />
        </Flex>
        <Flex wrap='wrap'>
          <Semester />
          <Semester />
          <Semester />
          <Tips />
          <Divider my={5} />
        </Flex>
        <Flex wrap='wrap'>
          <Semester />
          <Semester />
          <Semester />
          <Tips />
          <Divider my={5} />
        </Flex>
        <Flex wrap='wrap'>
          <Semester />
          <Semester />
          <Semester />
          <Tips />
          <Divider my={5} />
        </Flex>
        <Flex wrap='wrap'>
          <Semester />
          <Semester />
          <Semester />
          <Tips />
          <Divider my={5} />
        </Flex>
        <Flex wrap='wrap'>
          <Semester />
          <Semester />
          <Semester />
          <Tips />
          <Divider my={5} />
        </Flex>
      </Flex>
    </Background>
  )
})

export default Info
