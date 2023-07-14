import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { handleRemove, handleSave, handleSearch } from './UserApi';

export const UserEdit = () => {
  const [isActive, setIsActive] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    search();
  }, [])

  const handleClick = () => {
    setIsActive(!isActive);
  };


  const search = () => {
    //let result = handleSearch();
    //setUsuarios(result);
  }






  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Pagina de Usuarios</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
        </a>
      </div>
     

      {/* Content Row */}
      <div className="row">
        <div className="col-lg-12 mb-4">
          {/* Illustrations */}
          <div className="card shadow mb-4">
            <div className="card-body">


              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Crear nueva Cuenta!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Cedula" />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="Nombre" />
                        </div>
                        <div className="col-sm-6">
                          <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Apellido" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Telefono" />
                        </div>
                        <div className="col-sm-6">
                          <select className="form-control form-control-user" id="exampleEstado">
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                          </select>
                        </div>
                      </div>
                      <a href="login.html" className="btn btn-primary btn-user btn-block">
                        Registrar Usuario
                      </a>
                    </form>
                  </div>
                </div>
              </div>

              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure cum, esse aut velit ex rerum laudantium corrupti. Autem a illum et ab nulla ad, suscipit earum maxime laudantium quasi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
