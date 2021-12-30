import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outrubro',
  'Novembro',
  'Dezembro',
]

interface IHeaderProps {
  totalExpenditure: number
}

export default function Header(props: IHeaderProps) {
  const navigate = useNavigate()

  const [year, setYear] = useState<string | undefined>('2021')
  const [month, setMonth] = useState<string | undefined>('Janeiro')

  const years = getYears(2020, 2021)

  function handleYear(event: SelectChangeEvent) {
    const currentYear = event.target.value
    console.log(currentYear)
    navigate(
      `/${currentYear}-${(MONTHS.indexOf(month!) + 1)
        .toString()
        .padStart(2, '0')}`,
    )
    setYear(currentYear)
  }

  function handleMonth(event: SelectChangeEvent) {
    const currentMonth = event.target.value
    navigate(
      `/${year}-${(MONTHS.indexOf(currentMonth) + 1)
        .toString()
        .padStart(2, '0')}`,
    )
    setMonth(currentMonth)
  }

  function getYears(init: number, end: number): Array<number> {
    let array = []
    for (let i = init; i <= end; i++) {
      array.push(i)
    }

    return array
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <FormControl
        variant="standard"
        sx={{ m: 1, display: 'flex', flexDirection: 'row' }}
      >
        <InputLabel id="input-select-year">Ano</InputLabel>
        <Select
          labelId="input-select-year"
          id="year-selected"
          value={year}
          onChange={handleYear}
          label="Ano"
        >
          {years.map((year) => (
            <MenuItem style={{ maxHeight: '500px' }} key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="standard"
        sx={{ m: 1, display: 'flex', flexDirection: 'row' }}
      >
        <InputLabel id="input-select-month">Mês</InputLabel>
        <Select
          labelId="input-select-month"
          id="month-selected"
          value={month}
          onChange={handleMonth}
          label="Mês"
        >
          {MONTHS.map((year) => (
            <MenuItem style={{ maxHeight: '500px' }} key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box flex="1"></Box>
      <span>
        Despesas total: <strong>{props.totalExpenditure.toFixed(2)}</strong> R$
      </span>
    </Box>
  )
}
