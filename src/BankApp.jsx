import { Route, Routes } from 'react-router-dom';
import { AppRouter } from './router'
import BankLayout from './bank/layout/BankLayout';

import { HomePage } from '../src/bank/views/dashboard/HomePage';
import { Actividades, Prestamos } from '../src/bank/views/finanzas';
import UserList from './bank/views/usuarios/UserList';
import UserEdit from './bank/views/usuarios/UserEdit';

export const BankApp = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<BankLayout/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/actividades" element={<Actividades/>}/>
          <Route path="/prestamos" element={<Prestamos/>}/>
          <Route path="/usuarios" element={<UserList/>}/>

          <Route path="/editarUsuario/:id" element={<UserEdit/>}/>
          <Route path="/nuevoUsuario" element={<UserEdit/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}
