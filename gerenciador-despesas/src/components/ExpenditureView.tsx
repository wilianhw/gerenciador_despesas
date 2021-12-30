import { Box } from '@mui/material'
import Header from './Header'
import Expenditure from './Expenditure'
import { useState } from 'react'

function ExpenditureView() {
  const [totalExpenditure, setTotalExpenditure] = useState<number>(0)

  function changeTotalExpenditure(totalValue: number) {
    setTotalExpenditure(totalValue)
  }

  return (
    <Box maxWidth="1100px" margin="auto" padding="10px">
      <Header totalExpenditure={totalExpenditure} />
      <Expenditure changeTotalExpenditure={changeTotalExpenditure} />
    </Box>
  )
}

export default ExpenditureView
