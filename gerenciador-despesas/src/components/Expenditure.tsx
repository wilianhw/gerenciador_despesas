import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function Expendidure() {
  return (
    <TableContainer component={'div'}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: 'center' }}>Despesas</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Categoria</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Dia</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">X</TableCell>
            <TableCell align="center">X</TableCell>
            <TableCell align="center">X</TableCell>
            <TableCell align="center">X</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
