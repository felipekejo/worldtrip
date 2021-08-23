import { Flex, Image, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Flex
        bgImage="url('/Background.png')"
        h="335"
        justify="space-between"
        px="140px"
      >
        <VStack
          h="100%"
          mt={20}
          ml={35}
          align="flex-start"
        >
          <Text
            w="426px"
            fontSize="4xl"
            fontWeight="500"
            lineHeight="54px"
            color="gray.50"
            fontFamily="Poppins"
          >5 Continentes,<br />infinitas possibilidades.</Text>
          <Text
            fontSize="lg"
            lineHeight="30px"
            w="420px"
            color="gray.50"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>

        </VStack>
        <Flex>
          <Image
            src="/Airplane.svg"
            alt="airplane"
            w="417px"
            h="270px"
            mt="76px"
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Home
