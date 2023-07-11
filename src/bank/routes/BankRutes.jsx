import { Navigate, Route, Routes } from 'react-router-dom'
import { BankPage } from '../pages/BankPage'

export const BankRutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BankPage/>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
