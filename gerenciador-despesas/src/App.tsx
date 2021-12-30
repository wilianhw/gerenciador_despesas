import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ExpenditureView from './components/ExpenditureView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:month" element={<ExpenditureView />}></Route>
        <Route path="*" element={<Navigate to="/2021-01" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
