import React from 'react';
import { useState } from 'react';
import {
  Card,
  Box,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react';

import bicicleta from '../../assets/bicicleta.jpg'

const Articulo = () => {
  const [mensaje, setMensaje] = useState("")
  const [stock, setStock] = useState(5)

  const handleClick =()=>{
    
    if (stock > 0) {
      setStock(stock - 1);
      setMensaje("Gracias por su compra!");
    } else {
      setMensaje("Sin stock disponible!");
    }
  }

  return (
        <Card maxW='sm'
        mx='auto'>
          <CardBody>
            <Image
              src={bicicleta}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              boxSize='300px'
            />
            <Stack mt='2' spacing='3'>
              <Heading size='md'>BICICLETA MOUNTAIN BIKE R.29 ALUMINIO 21V SHIMANO F/DISCO SLP 10 PRO 2023</Heading>
                <Text fontSize='lg' color='gray.600' mt='2'>
                Descripción
                </Text >
                <Text fontSize='sm' textAlign='justify'>
                CUADRO ALUMINIO MTB SLP 10PRO
                CALCO AL AGUA BAJO BARNIZ
                JUEGO DE DIRECCIÓN 1 1/8 INTEGRADO
                TRANSMISION 21V:
                CAMBIO SHIMANO TZ31 TOURNEY
                DESCARRILADOR SLP
                MANIJAS INTEGRADAS SLP 3x7
                PALANCAS TRIPLE ACERO SLP
                PIÑÓN 7 CORONAS A ROSCA
                HORQUILLA SUSPENSIÓN SLP
                FRENOS:
                FRENOS A DISCO SLP MECÁNICO
                RUEDAS MTB SLP 10PRO DOBLE PARED
                CUBIERTA 29X2.10
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                Stock: {stock === 0 ? "Sin stock" :stock }
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button onClick={handleClick} variant='solid' colorScheme='blue'
              color={stock === 0 ? "gray.400" : "white"}
              bgColor={stock === 0 ? "gray.900" : "blue.600"}>
                Buy now
              </Button>
          <Box>
              {mensaje}
          </Box>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
  );
};

export default Articulo;
