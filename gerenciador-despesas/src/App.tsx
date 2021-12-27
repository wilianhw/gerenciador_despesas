import { useState } from 'react'
import { Box } from '@mui/material'
import Expendidure from './components/Expenditure'

import Header from './components/Header'

function App() {
  const [year, setYear] = useState<string | undefined>('2021')
  const [month, setMonth] = useState<number | undefined>(1)

  function handleYear(yearSelected: string) {
    setYear(yearSelected)
  }

  function handleMonth(monthSelected: number) {
    setMonth(monthSelected)
  }

  return (
    <Box maxWidth="1100px" margin="auto" padding="10px">
      <Header
        year={year}
        month={month}
        changeYear={handleYear}
        changeMonth={handleMonth}
      />
      <Expendidure year={year} month={month} />
    </Box>
  )
}

export default App
