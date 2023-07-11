import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';


export const RegisterPage = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

                <div className="form-floating mb-3">
                  <TextField
                    label="Cedula"
                    type="cedula"
                    placeholder="0123456789"
                    fullWidth />
                </div>

                <div className="form-floating mb-3">
                  <TextField
                    label="Nombre"
                    type="nombre"
                    placeholder="Thalia"
                    fullWidth />
                </div>

                <div className="form-floating mb-3">
                  <TextField
                    label="Apellido"
                    type="apellido"
                    placeholder="Alcivar"
                    fullWidth />
                </div>

                <div className="form-floating mb-3">
                  <TextField
                    label="Telefono"
                    type="telefono"
                    placeholder="0987654321"
                    fullWidth />
                </div>

                <div className="form-floating mb-3">
                  <TextField
                    label="Correo"
                    type="correo"
                    placeholder="correo@example.com"
                    fullWidth />
                </div>

                <div className="form-floating mb-3">
                  <TextField
                    label="Contraseña"
                    type="contraseña"
                    placeholder="*********"
                    fullWidth />
                </div>
                <div className="form-floating mb-3">
                  <TextField
                    label="Repetir Contraseña"
                    type="repetir contraseña"
                    placeholder="*********"
                    fullWidth />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg btn-block">Registrarse</button>
                </div>

                <div className="text-center mt-3">
                  <p>Ya tengo una cuenta <Link to="/auth/login">Login</Link></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
