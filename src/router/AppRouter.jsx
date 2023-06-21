import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth'
import { RegisterPage } from '../auth/pages/RegisterPage';
import { BankPage } from '../bank';
import { BankLayout } from '../bank/layout/BankLayout';
export const AppRouter = () => {

  const authStatus = 'not-authenticated'
  return (
    <Routes>

      {
        (authStatus === 'not-authenticated')
        ?<Route path='/auth/*' element={<LoginPage/>} />
        :<Route path='/*' element={<BankPage/>} />
      }     
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/principal" element={<BankLayout/>} /> 
      
      <Route path='/*' element={<Navigate to="/auth/login"/>} />
    </Routes>
  )
}
