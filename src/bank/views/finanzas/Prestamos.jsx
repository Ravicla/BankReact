import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChartLine, faChartPie, faCoins, faCreditCard, faDollarSign, faExchangeAlt, faFileInvoiceDollar, faHandHoldingUsd, faMoneyBillWave, faMoneyCheckAlt, faPiggyBank, faPlay, faTrophy, faWallet } from '@fortawesome/free-solid-svg-icons';


export const Prestamos = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Prestamos</h1>
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
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Lista de Usuarios</h6>
            </div>
            <div className="card-body">
              <table className="table table-bordered mb-4" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Cedula</th>
                    <th>Nombre y Apellido</th>
                    <th>Fecha del prestamo</th>
                    <th>valor</th>
                    <th>tiempo</th>
                    <th>prestamo</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1234567890</td>
                    <td>Ana Alarcon</td>
                    <td>
                      <DatePicker
                        selected={selectedDate} scrollableMonthYearDropdown
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="Escoge una fecha"
                        className="form-control"
                      />
                    </td>
                    <td>100</td>
                    <td>3</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button className="btn btn-primary" type="button">
                          <FontAwesomeIcon icon ={faCalculator} /> Simular
                        </button>
                      </div>
                    </td>


                  </tr>
                </tbody>
              </table>

              <p>
                Aquí van los botones de paginación
              </p>
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
}
export default Prestamos;