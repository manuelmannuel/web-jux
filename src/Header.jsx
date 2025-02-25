import './Header.css'
function Header() {

  return (
    <>
      <header>
        <div class="contenedor">
          <div id="marca">
            <h1><span class="resaltar">Pueblo Mágico</span> de Juxtlahuaca</h1>
          </div>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="historia.html">Historia</a></li>
              <li><a href="turismo.html">Turismo</a></li>
              <li><a href="eventos.html">Eventos</a></li>
              <li><a href="galeria.html">Galería</a></li>
              <li><a href="contacto.html">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header