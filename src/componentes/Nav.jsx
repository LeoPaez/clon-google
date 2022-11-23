import { Avatar, Flex, Img, Link } from '@chakra-ui/react'
import React from 'react'
import iconoNav from "../assets/icono-nav.svg";
import iconoAvatar from "../assets/avatar.jpg";

const Nav = () => {
  return (
    <>
      <Flex justifyContent="end">
          <Flex spacing="2" flexDirection="row" alignItems="center" gap="4" padding="4" fontSize="13px">
            <Link color="white">Gmail</Link>
            <Link color="white">Imágenes</Link>
            <Img src={iconoNav} p="8px" borderRadius="50%" cursor="pointer" _hover={{ bgColor: "rgba(232, 234, 237, 0.1)" }} alt="Te amo Luna 🐕❤🐾" />
            <Avatar size="sm" src={iconoAvatar} cursor="pointer" />
          </Flex>
      </Flex>
    </>
  )
}

export default Nav