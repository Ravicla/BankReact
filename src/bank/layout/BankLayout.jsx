import React, { useState } from 'react';
import { SideBar } from '../components/SideBar';
import { TopBar } from '../components/TopBar';
import { Footer } from '../components/Footer';
import { HomePage } from '../views/dashboard/HomePage';
import { Header } from '../components/Header';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/sb-admin-2.min.css';
import { Lista } from '../views/usuarios/Lista';
import { Actividades } from '../views/finanzas/Actividades';
import Prestamos from '../views/finanzas/Prestamos';

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
              {/* Agrega aquí el contenido adicional que desees mostrar */}
              {/*<HomePage/> */}
              <Prestamos />
              {/*<Lista /> */}
              {/*<Actividades /> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>


      {/* Bootstrap core JavaScript*/}
      <script src="/src/assets/vendor/jquery/jquery.min.js"></script>
      <script src="/src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      {/* Core plugin JavaScript*/}
      <script src="/src/assets/vendor/jquery-easing/jquery.easing.min.js"></script>
      {/* Custom scripts for all pages*/}
      <script src="/src/assets/js/sb-admin-2.min.js"></script>

   
      <script src="/src/assets/js/demo/chart-area-demo.js"></script>
      <script src="/src/assets/js/demo/chart-pie-demo.js"></script>

    </React.Fragment>
  )
};
export default BankLayout;
