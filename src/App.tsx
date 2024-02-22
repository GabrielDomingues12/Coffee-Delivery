import { ThemeProvider } from "styled-components"
import { theme } from "./Style/theme"
import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Checkout } from "./Pages/Checkout"
import { Success } from "./Pages/Success"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/success" element={<Success/>}/>
        </Routes>
    </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
