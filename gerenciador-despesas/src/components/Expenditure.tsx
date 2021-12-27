import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { getDespesasEndpoint, IExpenditure } from '../api/Backend'

interface IExpenditureProps {
  year: string | undefined
  month: number | undefined
}

export default function Expendidure(props: IExpenditureProps) {
  const [expenditure, setExpenditure] = useState<IExpenditure[]>([])
  const { year, month } = props

  useEffect(() => {
    if (year && month) {
      Promise.resolve(getDespesasEndpoint(year, month)).then(setExpenditure)
    }
  }, [month, year])

  return (
    <TableContainer component={'div'}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: 'left' }}>Despesas</TableCell>
            <TableCell style={{ textAlign: 'left' }}>Categoria</TableCell>
            <TableCell style={{ textAlign: 'left' }}>Dia</TableCell>
            <TableCell style={{ textAlign: 'left' }}>Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenditure.map((exp) => (
            <TableRow key={exp.id}>
              <TableCell align="left">{exp.descricao}</TableCell>
              <TableCell align="left">{exp.categoria}</TableCell>
              <TableCell align="left">{exp.dia}</TableCell>
              <TableCell align="left">{exp.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
