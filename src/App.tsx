import { ThemeProvider } from "styled-components"
import { theme } from "./Style/theme"
import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Checkout } from "./Pages/Checkout"
import { Success } from "./Pages/Success"
import { CoffeProvider } from "./Context"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer/>
        <BrowserRouter>
          <CoffeProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </CoffeProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
