import {Box} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"

function App() {
//we put navbar before routes so that it appears in every page
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/" element={<CreatePage/>}/>
        </Routes>
        </Navbar>
      </Box>
    </>
  )
}

export default App
