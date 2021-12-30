import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExpenditureView from './components/ExpenditureView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:month" element={<ExpenditureView />}></Route>
        <Route path="*" element={<div>Olá</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
