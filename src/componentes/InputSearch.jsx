import { Flex, Img, Input } from '@chakra-ui/react'
import { React, useState} from 'react'
import iconoBusqueda from "../assets/icono-busqueda.svg";
import iconoVoz from "../assets/icono-voz.svg";
import iconoCamara from "../assets/icono-camara.svg";
import iconoBorrar from "../assets/icono-borrar.svg"

const InputSearch = () => {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const borrarBusqueda = () => {
    setInput("")
  }

  return (
    <>
      <Flex border="1px" borderColor="rgba(189, 193, 198, 0.4)" p="8px 20px 8px 14px" borderRadius={"30px"} height="44px" _hover={{ bgColor: "rgba(189, 193, 198, 0.1)", borderColor: "transparent" }}>
            <Img src={iconoBusqueda} mr="14px" width="20px" />
            <Input width="400px" variant='unstyled' color="white" onChange={manejarCambio} value={input}/>
            <Flex gap="14px">
              {(input) ? 
              <Img src={iconoBorrar} borderRight="1px" borderColor={"rgba(189, 193, 198, 0.4)"} pr="12px" cursor={"pointer"} onClick={borrarBusqueda} /> : 
              <Img src={iconoBorrar} borderRight="1px" borderColor={"rgba(189, 193, 198, 0.4)"} pr="12px" visibility={"hidden"} />}
              <Img src={iconoVoz} cursor="pointer" />
              <Img width="24px" src={iconoCamara} cursor="pointer" />
            </Flex>
      </Flex>
    </>
  )
}

export default InputSearch