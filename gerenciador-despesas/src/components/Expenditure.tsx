import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDespesasEndpoint, IExpenditure } from '../api/Backend'

interface IExpenditureProps {
  changeTotalExpenditure: (totalValue: number) => void
}

export default function Expenditure(props: IExpenditureProps) {
  const [expenditure, setExpenditure] = useState<IExpenditure[]>([])
  const { month } = useParams<{ month: string }>()

  useEffect(() => {
    if (month) {
      Promise.resolve(getDespesasEndpoint(month).then(setExpenditure))
    }
  }, [month])

  useEffect(() => {
    if (expenditure.length > 0) {
      let soma = 0

      expenditure.reduce((last, current) => {
        soma = last.valor + current.valor
        return { ...current, valor: soma }
      })
      props.changeTotalExpenditure(soma)
    }
  }, [expenditure, props])

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
