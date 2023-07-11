import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { BankRutes } from '../bank/routes/BankRutes';
import BankLayout from '../bank/layout/BankLayout';

export const AppRouter = () => {

  return (
    <Routes>
      
      <Route path='/auth/*' element={<AuthRoutes/>} />
      <Route path='/bank/*' element={<BankLayout/>} /> 
      <Route path='/*' element={<BankRutes/>} />
      <Route path='*' element={<Navigate to='/' />} />
    
    </Routes>
  )
}
