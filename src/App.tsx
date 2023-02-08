import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WheatherPosting from './components/WheatherPosting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box >
     <Nav/>
     <WheatherPosting/>
     <Footer/>
    </Box>
  )
}

export default App
