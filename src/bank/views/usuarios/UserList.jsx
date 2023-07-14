import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { handleRemove, handleSave, handleSearch } from './UserApi';
import { Link } from 'react-router-dom';

export const UserList = () => {
  const [isActive, setIsActive] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    search();
  }, [])

  const handleClick = () => {
    setIsActive(!isActive);
  };


  const search = () => {
    let result = handleSearch();
    setUsuarios(result);
  }

  const remove = (id) => {
    handleRemove(id);
    search();
  }

  const pruebaLocalStorage = () => {
    const ejemplo = {
      id: '1',
      cedula: '1234567890',
      nombre: 'Ana',
      apellido: 'Alarcon',
      correo: 'ana@google.com',
      telefono: '0987654321',
    }
    handleSave(ejemplo);
  }


  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <p className="mb-4">
        Datos de todos los usuarios
      </p>

      {/* Content Row */}
      <div className="row">
        <div className="col-lg-12 mb-4">
          {/* Illustrations */}
          <div className="card shadow mb-4">

            <div className="card-header py-3 d-flex justify-content-between align-items-center">
              <h6 className="m-0 font-weight-bold text-primary">Lista de Usuarios</h6>

              <Link to="/editarUsuarios" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Nuevo Usuario
              </Link>

             

            </div>

            <div className="card-body">
              <table className="table table-hover" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th scope="col">Cedula</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {usuarios.map((usuario, index) => (
                    <tr key={index}>
                      <td>{usuario.cedula}</td>
                      <td>{usuario.nombre} {usuario.apellido}</td>
                      <td>{usuario.correo}</td>
                      <td>{usuario.telefono}</td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                          <button
                            type="button"
                            className={`btn ${isActive ? 'btn-outline-primary' : 'btn-outline-danger'}`}
                            onClick={handleClick}>
                            {isActive ? 'Activo' : 'Inactivo'}
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">

                          <button type="button" className="btn btn-outline-primary" onClick={() => remove(usuario.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>

                          <button type="button" className="btn btn-outline-primary" onClick={handleSave}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>





              <p>
                Aquí van los botones de paginación
              </p>
              <button type="button" className="btn btn-outline-primary" onClick={pruebaLocalStorage}>
                Prueba Local Storage
              </button>

              <hr />
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

export default UserList;
