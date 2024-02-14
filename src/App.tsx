import { ThemeProvider } from "styled-components"
import { Routers } from "./Routes"
import { theme } from "./Style/theme"
import { Navbar } from "./Components/Navbar"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routers/>
      </ThemeProvider>
    </>
  )
}

export default App
