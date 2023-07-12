import { Route, Routes } from 'react-router-dom';
import { AppRouter } from './router'
import BankLayout from './bank/layout/BankLayout';

import { HomePage } from '../src/bank/views/dashboard/HomePage';
import { Actividades, Prestamos } from '../src/bank/views/finanzas';
import { Lista } from '../src/bank/views/usuarios/Lista';

export const BankApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BankLayout/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/actividades" element={<Actividades/>}/>
          <Route path="/prestamos" element={<Prestamos/>}/>
          <Route path="/lista" element={<Lista/>}/>

        </Route>
      </Routes>
      
    </div>
  )
}
