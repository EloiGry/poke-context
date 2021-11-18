import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { UserContextProvider } from './contexts/UserContext'

import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import { Center } from "@chakra-ui/react"



const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider> 
        <Nav />
        <Center height="100vh">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Center>
      </UserContextProvider> 
    </BrowserRouter>
  )
}

export default App