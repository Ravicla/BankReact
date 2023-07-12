import React, { useState } from 'react';
import { SideBar, TopBar, Footer, Header } from '../components';

import { HomePage } from '../views/dashboard/HomePage';
import { Actividades, Prestamos } from '../views/finanzas';
import { Lista } from '../views/usuarios/Lista';

import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/sb-admin-2.min.css';
import { Link, Route, Router, Routes } from 'react-router-dom';

export const BankLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
   
    <React.Fragment>
      <Header />

      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/actividades" element={<Actividades />} />
                <Route path="/prestamos" element={<Prestamos />} />
                <Route path="/lista" element={<Lista />} />
                {/* Resto de tus rutas */}
              </Routes>

              <HomePage />
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <Link className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </Link>

    </React.Fragment>
   
  );
};

export default BankLayout;
