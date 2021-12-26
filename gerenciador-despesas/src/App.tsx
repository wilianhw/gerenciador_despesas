import { Box } from '@mui/material'
import Expendidure from './components/Expenditure'

import Header from './components/Header'

function App() {
  return (
    <Box maxWidth="1100px" margin="auto" padding="10px">
      <Header />
      <Expendidure />
    </Box>
  )
}

export default App
