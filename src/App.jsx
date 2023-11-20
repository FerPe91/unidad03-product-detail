import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import Articulo from './Components/Articulo/Articulo'


function App() {
  return (
    <ChakraProvider>
        <Header/>
        <Articulo/>
    </ChakraProvider>
  )
}

export default App
