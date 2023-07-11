import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { BankRutes } from '../bank/routes/BankRutes';

export const AppRouter = () => {

  return (
    <Routes>

      
      
      <Route path='/auth/*' element={<AuthRoutes/>} />
      <Route path='/*' element={<BankRutes/>} /> 
    
    </Routes>
  )
}
