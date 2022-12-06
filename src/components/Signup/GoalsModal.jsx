import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Button,
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useUIStore } from '../../store/rootStore'

const data = {
  cis: {
    para1:
      'Computer information systems is a technical field where you learn computing in the context of business. You’ll tap your mathematical, and logical problem-solving ability as well as your capacity to communicate effectively as you study the analysis and design of information systems. ',
    para2:
      'By combining this with your major studies, you’ll be ready to produce breakthrough developments in design and technology, science, art, business, or wherever your area of passion lies',
    image:
      'https://www.jmu.edu/_images/cob/buildings/learning-complex-aerial-wide-angle-2021-1000x423.jpg',
    require: [
      { title: 'CIS304', link: null },
      { title: 'CIS330', link: null },
      { title: 'CIS454', link: null },
      {
        title: 'CIS Elective',
        link: 'https://www.jmu.edu/cob/cis/academics/cis-minor.shtml#electives',
      },
    ],
  },
  math: {
    para1:
      'The mathematics minor is open to students not majoring in mathematics or statistics but offers students an opportunity to study mathematics, and problem-solving, and learn about its applications in other disciplines. Additionally, students will gain an increased understanding and appreciation for math as a universal language.',
    para2:
      'The program students choose will make it possible for them to acquire strong preparation for graduate work or for professional applications in mathematics and statistics.',
    image: 'https://www.jmu.edu/_images/csm/logo-banner.jpg',
    require: [
      { title: 'MATH231, MATH232, or MATH235', link: null },
      { title: 'MATH236', link: null },
    ],
  },
  physics: {
    para1:
      'Minors in physics may come from any other discipline. Students will have the opportunity to enroll in lectures and labs that will teach them about the practical applications of physics in the real world. Physics minors will are encouraged to branch out and learn about a variety of topics including materials science, computational physics, electronics, and applied nuclear physics.',
    para2:
      'This minor will allow students to explore their interests and customize the minor to suit their interests and career goals.',
    image: 'https://www.jmu.edu/_images/physics/physics-slide-1.jpg',
    require: [
      {
        title: 'Find more here',
        link: 'https://catalog.jmu.edu/preview_program.php?catoid=50&poid=21189',
      },
    ],
  },

  robotics: {
    para1:
      'The interdisciplinary minor in Robotics combines courses and faculty from several departments to provide students with an introduction to the field of Robotics.',
    para2:
      'By combining this with your major studies, you’ll be ready to produce breakthrough developments in design and technology, science, art, business, or wherever your area of passion lies',
    image:
      'https://www.jmu.edu/cise/cs/_images/page-banners/robot-near-computer.jpg',
    require: [
      {
        title: 'Find more here',
        link: 'https://catalog.jmu.edu/preview_program.php?catoid=50&poid=21142',
      },
    ],
  },
  vt: {
    para1:
      'The Virginia Tech College of Engineering is partnering with James Madison University to help position students for mid-level and advanced positions in industries related to computing technology. ',
    para2:
      'Once accepted these students during their fourth year can begin taking up to 12 credits of courses from an approved set of courses that can be applied beyond the 120 required credit hours required for James Madison University undergraduate degree towards their MEng degree. No GRE is required to apply.',
    image:
      'https://www.vt.edu/content/innovation_subfolder_cms_vt_edu/en/about/_jcr_content/article-image.transform/m-medium/image.jpg',
    require: [
      {
        title: 'Find more here',
        link: 'https://www.vt.edu/innovationcampus/masters-degrees/fasttrack/jmu_csa.html',
      },
    ],
  },

  nsa: {
    para1:
      'All undergraduate Computer Science students who take the following courses will receive the NSA approved "Information Systems Security Professionals Certification”. Students in this certificate program learn Cybersecurity tools and techniques to protect networks and systems from the hackers.',
    para2:
      'No cybersecurity background is required to participate. All the students interested in cybersecurity are highly encouraged to participate in our Cyber Defense Club (CDC)',
    image:
      'https://www.jmu.edu/pce/programs/all/cyber-intelligence/Cyber-Intell-FM-image.jpg',
    require: [
      { title: 'CS457', link: null },
      { title: 'CS458', link: null },
      { title: 'CS482', link: null },
    ],
  },
}

const GoalsModal = observer(() => {
  const ui = useUIStore()
  return (
    <>
      <Modal
        size='xl'
        isOpen={ui.dialog === 'goals'}
        onClose={() => (ui.dialog = '')}>
        <ModalOverlay bg='rgba(82, 21, 118,.7)' />
        <ModalContent bg='#271c30' overflow='hidden'>
          <ModalHeader bg='sec.300'>More Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <Image
              src={data[ui.goalType].image}
              w='100%'
              rounded='lg'
              my={4}
              shadow='base'
            />
            <Text>{data[ui.goalType].para1}</Text>

            <Text mt={2}>{data[ui.goalType].para2}</Text>
            <Divider my={4} />
            <Text mb={3} fontWeight='bold'>
              Required Courses
            </Text>
            {data[ui.goalType].require.map((x) => {
              return (
                <Text
                  key={x.title}
                  cursor={x.link ? 'pointer' : 'default'}
                  onClick={() => x.link && window.open(x.link)}>
                  ● {x.title}
                </Text>
              )
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
})

export default GoalsModal
