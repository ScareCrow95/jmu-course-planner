import {
  Button,
  Divider,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import JsPDF from 'jspdf'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { COURSES } from '../constants/courses'
import { useUIStore } from '../store/rootStore'
import html2canvas from 'html2canvas'
const Header = observer(() => {
  const ui = useUIStore()
  return (
    <Flex
      rounded='lg'
      w='96%'
      my={5}
      // mx={}
      px={2}
      border='1px'
      borderStyle='solid'
      borderColor='pr.100'
      shadow='dark-lg'
      // backdropFilter='blur(8px)'
      bg='#5E2D8C'
      // bg='rgb(0,0,0,.45)'
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
            Paige Normand
          </Text>
          <Text fontSize='sm'>normanap@jmu.edu</Text>
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
            72
          </Text>
        </Flex>
        <Divider orientation='vertical' mx={3} />
        <Flex direction='column' p={4}>
          <Text fontSize='sm' color='pr.100'>
            Transfer Credits
          </Text>
          <Text fontWeight='bold' fontSize='xl'>
            0
          </Text>
        </Flex>
        <Divider orientation='vertical' mx={3} />
        <Flex direction='column' p={4}>
          <Text fontSize='sm' color='pr.100'>
            Minors
          </Text>
          <Text fontWeight='bold' fontSize='xl'>
            {Array.from(ui.minors).join(',')}
          </Text>
        </Flex>
      </Flex>

      <Spacer />
      <Flex direction='column' p={4} justify='center' mb={2}>
        <Button
          colorScheme='orange'
          size='sm'
          variant='outline'
          onClick={(e) => generatePDF()}>
          Export
        </Button>
      </Flex>
    </Flex>
  )
})

const Semester = observer(({ item }) => {
  return (
    <Flex
      m={2}
      rounded='lg'
      border='1px'
      borderColor='sec.100'
      shadow='md'
      bg='rgb(0,0,0,.45)'
      // w={['100%', '100%', '350px', '350px']}
      direction='column'
      p={2}>
      <Flex direction='column' p={3} bg='#5E2D8C' rounded='md'>
        <Text>Semester: {item.semester}</Text>
      </Flex>
      <TableContainer p={2}>
        <Table size='sm'>
          <Thead>
            <Tr h='30px'>
              <Th borderColor='sec.200' color='grey.300'>
                Course Name
              </Th>
              <Th borderColor='sec.200' color='grey.300'>
                Credit Count
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {item.courses.map((x) => {
              return (
                <Tr key={x.title}>
                  <Td borderColor='sec.200' fontWeight='bold'>
                    {x.title}
                  </Td>
                  <Td borderColor='sec.200'>{x.credit}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
})

const YearHeader = observer(({ item }) => {
  return (
    <Flex
      minW='400px'
      flex={1}
      rounded='lg'
      overflow='hidden'
      // bg='rgb(0,0,0,.45)'
      direction='column'>
      <Flex flex={1} direction='column'>
        <Text
          fontWeight='bold'
          fontSize='2xl'
          mb={5}
          p={4}
          bg='sec.300'
          borderBottom='1px'
          borderColor='sec.100'>
          {item.year}
        </Text>
        <Flex px={3}>
          <Text
            fontSize='md'
            mb={5}
            bg='#5E2D8C'
            p={1}
            px={2}
            rounded='lg'
            border='1px solid'
            borderColor='pr.100'>
            Tips for this year
          </Text>
        </Flex>
        {item.tips.map((x) => {
          return (
            <Text key={x} mb={3} ml={1} px={3}>
              {x}
            </Text>
          )
        })}
      </Flex>
    </Flex>
  )
})

const generatePDF = () => {
  const input = document.getElementById('report')
  const divHeight = input.clientHeight
  const divWidth = input.clientWidth
  const ratio = divHeight / divWidth

  html2canvas(input, {
    width: input.scrollWidth,
    height: input.scrollHeight,
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/jpeg')
    const pdfDOC = new JsPDF('l', 'mm', 'a0') //  use a4 for smaller page

    const width = pdfDOC.internal.pageSize.getWidth()
    let height = pdfDOC.internal.pageSize.getHeight()
    height = ratio * width

    pdfDOC.addImage(imgData, 'JPEG', 0, 0, width - 20, height - 10)
    pdfDOC.save('Course-Plan.pdf') //Download the rendered PDF.
  })
}
const Info = observer(() => {
  return (
    <Flex
      direction='column'
      bg='sec.300'
      align='center'
      minH='100vh'
      id='report'>
      <Flex m={3} mt={0} rounded='lg' direction='column' align='center'>
        <Header />
        {COURSES.map((x) => {
          return (
            <Flex
              mx={4}
              mb={4}
              key={x.year}
              direction='column'
              bg='sec.200'
              rounded='lg'
              border='1px'
              borderColor='sec.100'>
              <YearHeader item={x} />
              <Flex wrap='wrap' justify='center'>
                {x.courses.map((e) => {
                  return <Semester item={e} />
                })}
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
})

export default Info
