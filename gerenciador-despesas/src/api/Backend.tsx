export interface IExpenditure {
  id: number
  descricao: string
  categoria: string
  valor: number
  mes: string
  dia: string
}

export async function getDespesasEndpoint(
  month: string,
): Promise<IExpenditure[]> {
  const res = await fetch(
    `http://localhost:3001/despesas?mes=${month}&_sort=dia`,
  )
  return res.json()
}
