import './Login.css'

function Login() {

  return (

    <div className="login-page">

      <div className="login-container">

        {/* PANEL IZQUIERDO */}

        <div className="login-left">


        </div>

        {/* PANEL DERECHO */}

        <div className="login-right">

          <div className="login-box">

            <h1 className="welcome">
              Bienvenido de nuevo
            </h1>

            <p className="login-text">
              Inicia sesión para continuar
            </p>

            {/* FORMULARIO */}

            <form>

              {/* USUARIO */}

              <div className="mb-4">

                <label className="form-label">
                  Usuario o correo electrónico
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu usuario o correo"
                />

              </div>

              {/* CONTRASEÑA */}

              <div className="mb-4">

                <label className="form-label">
                  Contraseña
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                />

              </div>

              {/* OPCIONES */}

              <div className="options">

                <div className="remember">

                  <input type="checkbox" />

                  <span>
                    Recordarme
                  </span>

                </div>

                <a href="#" className="forgot">
                  ¿Olvidaste tu contraseña?
                </a>

              </div>

              {/* BOTON */}

              <button className="login-btn">

                Iniciar sesión

              </button>

            </form>

            {/* DIVIDER */}

            <div className="divider">

              <span>
                o continúa con
              </span>

            </div>

            {/* GOOGLE */}

            <button className="google-btn">

              Continuar con Google

            </button>

            {/* FOOTER */}

            <div className="footer">

              ¿Necesitas ayuda?
              <span> Contáctanos al 614 456 8899</span>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER GENERAL */}

      <div className="page-footer">

  © 2026 Centro Médico San Aurora.
  Todos los derechos reservados.

</div>

    </div>

  )
}

export default Login