import { Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Botones = () => {
  return (
    <>
      <Flex gap={"14px"}>
            <Button
              bgColor="#303134"
              color="#e8eaed"
              border="1px"
              borderColor="transparent"
              fontSize="14px"
              fontWeight="400"
              height="36px"
              _hover={{ border: "1px", borderColor: "rgba(189, 193, 198, 0.4)" }}
              _focus={{ bgColor: "#303134" }}>
              Buscar con Google
            </Button>
            <Link href="https://www.google.com/doodles">
              <Button 
                bgColor="#303134"
                color="#e8eaed"
                border="1px"
                borderColor="transparent"
                fontSize="14px"
                fontWeight="400"
                height="36px"
                _hover={{ border: "1px", borderColor: "rgba(189, 193, 198, 0.4)" }}
                _focus={{ bgColor: "#303134" }}>
                Voy a tener suerte
              </Button>
            </Link>
          </Flex>
    </>
  )
}

export default Botones