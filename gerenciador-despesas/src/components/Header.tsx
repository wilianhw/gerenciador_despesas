import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { Box } from '@mui/material'

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Agosto',
  'Setembro',
  'Outrubro',
  'Novembro',
  'Dezembro',
]

export default function Header() {
  const [year, setYear] = useState<string | undefined>('2021')
  const [month, setMonth] = useState<string | undefined>('Janeiro')
  const years = getYears(1900, 2099)

  function handleYear(event: SelectChangeEvent) {
    setYear(event.target.value)
  }

  function handleMonth(event: SelectChangeEvent) {
    setMonth(event.target.value)
  }

  function getYears(init: number, end: number): Array<number> {
    let array = []
    for (let i = init; i < end; i++) {
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
        Despesas total: <strong>valor</strong>
      </span>
    </Box>
  )
}
