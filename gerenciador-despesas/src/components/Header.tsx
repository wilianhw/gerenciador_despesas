import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box } from '@mui/material'

export const MONTHS = [
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

interface IHeaderProps {
  year: string | undefined
  month: number | undefined
  changeYear: (yearSelected: string) => void
  changeMonth: (monthSelected: number) => void
}

export default function Header(props: IHeaderProps) {
  const { year, month } = props
  const years = getYears(1900, 2099)

  function handleYear(event: SelectChangeEvent) {
    props.changeYear(event.target.value)
  }

  function handleMonth(event: SelectChangeEvent) {
    const index = MONTHS.indexOf(event.target.value)
    props.changeMonth(index)
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
          value={MONTHS[month!]}
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
