import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';


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
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Cedula</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Nombre</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Apellido</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Telefono</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Correo</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Contraseña</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Repetir Contraseña</label>
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
