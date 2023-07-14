import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChartArea, faChartLine, faCog, faCoins, faFileAlt, faFolder, faHandHoldingUsd, faHome, faLaughWink, faMoneyBillWave, faPercentage, faTable, faTachometerAlt, faWrench, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  const [isHomeExpanded, setIsHomeExpanded] = useState(false);
  const [isRegistrosExpanded, setIsRegistrosExpanded] = useState(false);
  const [isListaExpanded, setIsListaExpanded] = useState(false);
  const [isCalendarioExpanded, setIsCalendarioExpanded] = useState(false);
  const [isPrestamosExpanded, setIsPrestamosExpanded] = useState(false);
  const [isActividadesExpanded, setIsActividadesExpanded] = useState(false);
  const [isRendimientoExpanded, setIsRendimientoExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const handleHomeToggle = () => {
    if (isHomeExpanded) {
      // Si el componente Home está abierto, se cierra y se cierran los demás componentes
      setIsHomeExpanded(false);
      setIsRegistrosExpanded(false);
      setIsPrestamosExpanded(false); // Cerrar el componente de préstamos
      setIsActividadesExpanded(false);
      setIsRendimientoExpanded(false);
      setIsListaExpanded(false);
      setIsCalendarioExpanded(false);
      setIsSidebarOpen(false);
    } else {
      // Si el componente Home está cerrado, se cierran los demás componentes
      setIsHomeExpanded(true);
      setIsRegistrosExpanded(false);
      setIsPrestamosExpanded(false); // Cerrar el componente de préstamos
      setIsActividadesExpanded(false);
      setIsRendimientoExpanded(false);
      setIsListaExpanded(false);
      setIsCalendarioExpanded(false);
      setIsSidebarOpen(false);

    }
  };

  const handleRegistrosToggle = () => {
    setIsRegistrosExpanded(!isRegistrosExpanded);
    setIsPrestamosExpanded(false); // Cerrar el componente de préstamos
    setIsActividadesExpanded(false);
    setIsRendimientoExpanded(false);
    setIsListaExpanded(false);
    setIsCalendarioExpanded(false);
    setIsSidebarOpen(false);
  };

  const handleListaToggle = () => {
    setIsListaExpanded(!isListaExpanded);
    setIsPrestamosExpanded(false); // Cerrar el componente de préstamos
    setIsActividadesExpanded(false);
    setIsRendimientoExpanded(false);
    setIsCalendarioExpanded(false);
    setIsSidebarOpen(false);  
    setIsRegistrosExpanded(false);
  };

  const handleCalendarioToggle = () => {
    setIsCalendarioExpanded(!isCalendarioExpanded);
    setIsPrestamosExpanded(false); // Cerrar el componente de préstamos
    setIsActividadesExpanded(false);
    setIsRendimientoExpanded(false);
    setIsListaExpanded(false);
    setIsSidebarOpen(false);  
    setIsRegistrosExpanded(false);
  };

  const handlePrestamosToggle = () => {
    setIsPrestamosExpanded(!isPrestamosExpanded);
    setIsCalendarioExpanded(false); // Cerrar el componente de préstamos
    setIsActividadesExpanded(false);
    setIsRendimientoExpanded(false);
    setIsListaExpanded(false);
    setIsSidebarOpen(false);  
    setIsRegistrosExpanded(false);
  };

  const handleActividadesToggle = () => {
    setIsActividadesExpanded(!isActividadesExpanded);
    setIsCalendarioExpanded(false); // Cerrar el componente de préstamos
    setIsPrestamosExpanded(false);
    setIsRendimientoExpanded(false);
    setIsListaExpanded(false);
    setIsSidebarOpen(false);  
    setIsRegistrosExpanded(false);
  };

  const handleRendimientoToggle = () => {
    setIsRendimientoExpanded(!isRendimientoExpanded);
    setIsCalendarioExpanded(false); // Cerrar el componente de préstamos
    setIsPrestamosExpanded(false);
    setIsActividadesExpanded(false);
    setIsListaExpanded(false);
    setIsSidebarOpen(false);  
    setIsRegistrosExpanded(false);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isSidebarOpen ? 'toggled' : ''}`} id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon icon={faLaughWink} />
          </div>
          <div className="sidebar-brand-text mx-3">Bank <sup>❤️</sup></div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isHomeExpanded ? 'active' : ''}`}
            to="/home"
            onClick={handleHomeToggle}
            aria-expanded={isHomeExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faHome} />
            <span> Home</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Usuarios</div>

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isRegistrosExpanded ? 'active' : ''}`}
            href="#"
            onClick={handleRegistrosToggle}
            aria-expanded={isRegistrosExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faFileAlt} />
            <span> Registros</span>
          </Link>
          <div
            className={`collapse ${isRegistrosExpanded ? 'show' : ''}`}
            id="collapseUtilities3">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Usuarios:</h6>
              <Link className="collapse-item" href="/utilities-color">
                Formulario
              </Link>
              <Link className="collapse-item" href="/utilities-border">
                Actalizar Usuario
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isListaExpanded ? 'active' : ''}`}
            href="#"
            onClick={handleListaToggle}
            aria-expanded={isListaExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faTable} />
            <span> Lista</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isCalendarioExpanded ? 'active' : ''}`}
            href="#"
            onClick={handleCalendarioToggle}
            aria-expanded={isCalendarioExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span> Calendario</span>
          </Link>
        </li>


        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Finanzas</div>

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isActividadesExpanded ? 'active' : ''}`}
            href="#"
            onClick={handleActividadesToggle}
            aria-expanded={isActividadesExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faCoins} />
            <span> Actividades</span>
          </Link>
          <div
            className={`collapse ${isActividadesExpanded ? 'show' : ''}`}
            id="collapseUtilities4">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Finanzas:</h6>
              <Link className="collapse-item" href="/utilities-color">
                Rifa
              </Link>
              <Link className="collapse-item" href="/utilities-border">
                Comida
              </Link>
              <Link className="collapse-item" href="/utilities-border">
                Lo que sea
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isPrestamosExpanded ? 'active' : ''}`}
            href="#"
            onClick={handlePrestamosToggle}
            aria-expanded={isPrestamosExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faHandHoldingUsd} />
            <span> Prestamos</span>
          </Link>
          <div
            className={`collapse ${isPrestamosExpanded ? 'show' : ''}`}
            id="collapseUtilities4">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Finanzas:</h6>
              <Link className="collapse-item" href="/utilities-color">
                123
              </Link>
              <Link className="collapse-item" href="/utilities-border">
                Hola
              </Link>
            </div>
          </div>
        </li>


        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Rendimiento</div>

        <li className="nav-item">
          <Link
            className={`nav-link collapsed ${isRendimientoExpanded ? 'active' : ''}`}
            href="#"
            onClick={handleRendimientoToggle}
            aria-expanded={isRendimientoExpanded ? 'true' : 'false'}>
            <FontAwesomeIcon icon={faChartLine} />
            <span> Renta</span>
          </Link>
          <div
            className={`collapse ${isRendimientoExpanded ? 'show' : ''}`}
            id="collapseUtilities4">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Rendimiento:</h6>
              <Link className="collapse-item" href="/utilities-color">
                Interes por prestamo
              </Link>
              <Link className="collapse-item" href="/utilities-border">
                Multa por atraso
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="text-center d-none d-md-inline">
          <button className="btn btn-link rounded-circle sidebar-toggle-btn" onClick={handleSidebarToggle}>
            <FontAwesomeIcon icon={isSidebarOpen ? faChevronRight : faChevronLeft} />
          </button>
        </div>

        <hr/>

        <div className="sidebar-card d-none d-lg-flex">
          <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta cumque sit magni quas molestias, nulla placeat numquam nisi fugiat, provident harum possimus. Ut beatae iure, quis architecto minima ipsum?</p>
        </div>

      </ul>
    </div>
  );
};

export default SideBar;
