export interface IExpenditure {
  id: number
  descricao: string
  categoria: string
  valor: number
  mes: string
  dia: string
}

export async function getDespesasEndpoint(
  ano: string,
  mes: number,
): Promise<IExpenditure[]> {
  const res = await fetch(
    `http://localhost:3001/despesas?mes=${ano}-${mes
      .toString()
      .padStart(2, '0')}&_sort=dia`,
  )
  return res.json()
}
