import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
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
                  <label for="floatingInput">Correo</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Contraseña</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
                </div>

                <div className="text-center mt-3">
                  <p>Aun no tienes una cuenta? <Link to="/register">Registrate</Link></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
