import React, { useState } from 'react';
import { SideBar, TopBar, Footer, Header } from '../components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from '../views/dashboard/HomePage';
import { Actividades, Prestamos } from '../views/finanzas';


import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/sb-admin-2.min.css';

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
              {/* 
                
                  <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route path="/actividades" component={Actividades} />
                <Route path="/prestamos" component={Prestamos} />
                </Switch>
                
                */}
              {/* Agrega más rutas según tus necesidades */}

              <HomePage />


            </div>
          </div>
          <Footer />
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>



    </React.Fragment>
  )
};
export default BankLayout;
