import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Flex flexDirection="column" bottom="0">
          <Flex bgColor="#171717" p="13px 30px 12px 30px" borderBottom="1px" borderColor="rgba(154, 160, 166, 0.3)">
            <Text color="#9aa0a6" fontSize="15px">Argentina</Text>
          </Flex>
          <Flex bgColor="#171717" color="#9aa0a6" justifyContent="space-between" p="13px 35px 12px 35px">
            <Flex gap="30px" fontSize="14px">
              <Link>Sobre Google</Link>
              <Link>Publicidad</Link>
              <Link>Negocios</Link>
              <Link>Cómo funciona la Búsqueda</Link>
            </Flex>
            <Flex gap="30px" fontSize="14px">
              <Link>Privacidad</Link>
              <Link>Condiciones</Link>
              <Link>Preferencias</Link>
            </Flex>
          </Flex>
        </Flex>
    </>
  )
}

export default Footer