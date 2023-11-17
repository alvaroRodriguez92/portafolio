import './App.css'
import Main from './view/Main/Main'
import AnimCursor from './components/AnimCursor/AnimCursor'
import { ThemeProvider } from '@mui/material'
import {theme} from "./theme/theme"

function App() {

  return (
      <>
      <ThemeProvider theme={theme}>
      <AnimCursor/>
      <Main/>
      </ThemeProvider>
      </>
  )
}

export default App
