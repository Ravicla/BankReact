import './LoginPage.css';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

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
                  <TextField
                    label="Correo"
                    type="correo"
                    placeholder="correo@example.com"
                    fullWidth />
                </div>

                <div className="form-floating mb-3">
                  <TextField
                    label="Contraseña"
                    type="password"
                    placeholder="********"
                    fullWidth />
                </div>





                <div className="row">
                  <div className="col-md-6">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-outline-primary">Ingresar</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-outline-primary">Ingresar con Google</button>
                    </div>
                  </div>
                </div>


                <div className="text-center mt-3">
                  <p>Aun no tienes una cuenta? <Link to="/auth/register">Registrate</Link></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
