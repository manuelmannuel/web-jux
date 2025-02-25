import './App.css'
function App() {

  return (
    <>


      <section id="mostrar-caso">
        <div class="contenedor">
          <h1>Descubre la Magia de Juxtlahuaca</h1>
          <p>Un rincón encantador en Oaxaca lleno de historia, cultura y belleza natural.</p>
        </div>
      </section>

      <section id="cajas">
        <div class="contenedor">
          <div class="caja">
            <img src="icono-historia.png" alt="Historia" />
            <h3>Historia Rica</h3>
            <p>Conoce los orígenes y la evolución de nuestro pueblo, desde sus raíces ancestrales hasta la actualidad.</p>
          </div>
          <div class="caja">
            <img src="icono-turismo.png" alt="Turismo" />
            <h3>Turismo Encantador</h3>
            <p>Explora los atractivos turísticos, desde paisajes naturales hasta arquitectura colonial y actividades únicas.</p>
          </div>
          <div class="caja">
            <img src="icono-cultura.png" alt="Cultura" />
            <h3>Cultura Vibrante</h3>
            <p>Sumérgete en nuestras tradiciones, festivales, gastronomía y la calidez de nuestra gente.</p>
          </div>
        </div>
      </section>

      <section id="historia" class="seccion">
        <div class="contenedor">
          <h2>Historia de Juxtlahuaca</h2>
          <p>Aquí puedes agregar un texto detallado sobre la historia del pueblo. Desde su fundación, los eventos más importantes, personajes destacados y cómo ha evolucionado a lo largo del tiempo. Incluye detalles interesantes y relevantes que capturen la esencia histórica del lugar.</p>
        </div>
      </section>

      <section id="turismo" class="seccion">
        <div class="contenedor">
          <h2>Turismo en Juxtlahuaca</h2>
          <p>Describe los principales atractivos turísticos. Podrían ser iglesias antiguas, parques naturales, ríos, montañas, museos, mercados locales, etc.  Menciona actividades que los turistas pueden realizar como senderismo, paseos a caballo, tours gastronómicos, visitas a talleres artesanales, y experiencias culturales. Incluye información práctica como horarios, costos y recomendaciones.</p>
          <div id="galeria">
            <img src="imagen-turismo-1.jpg" alt="Lugar Turístico 1" />
            <img src="imagen-turismo-2.jpg" alt="Lugar Turístico 2" />
            <img src="imagen-turismo-3.jpg" alt="Lugar Turístico 3" />
          </div>
        </div>
      </section>

      <section id="eventos" class="seccion">
        <div class="contenedor">
          <h2>Eventos y Festividades</h2>
          <p>Lista los eventos más importantes y festividades que se celebran en el pueblo a lo largo del año. Incluye fechas aproximadas, descripciones de los eventos y por qué son especiales. Esto puede incluir fiestas patronales, festivales de música, ferias artesanales, celebraciones tradicionales, etc.</p>
          <ul>
            <li>
              <h3>[Nombre del Evento 1]</h3>
              <p>Fecha aproximada: [Fecha]. Descripción breve del evento y su importancia.</p>
            </li>
            <li>
              <h3>[Nombre del Evento 2]</h3>
              <p>Fecha aproximada: [Fecha]. Descripción breve del evento y su importancia.</p>
            </li>
            <li>
              <h3>[Nombre del Evento 3]</h3>
              <p>Fecha aproximada: [Fecha]. Descripción breve del evento y su importancia.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="galeria-seccion" class="seccion">
        <div class="contenedor">
          <h2>Galería de Imágenes</h2>
          <div id="galeria">
            <img src="imagen-galeria-1.jpg" alt="Imagen del Pueblo 1" />
            <img src="imagen-galeria-2.jpg" alt="Imagen del Pueblo 2" />
            <img src="imagen-galeria-3.jpg" alt="Imagen del Pueblo 3" />
            <img src="imagen-galeria-4.jpg" alt="Imagen del Pueblo 4" />
            <img src="imagen-galeria-5.jpg" alt="Imagen del Pueblo 5" />
            <img src="imagen-galeria-6.jpg" alt="Imagen del Pueblo 6" />
          </div>
        </div>
      </section>

      <section id="contacto" class="seccion">
        <div id="contacto" class="seccion">
          <div class="contenedor">
            <h2>Contacto</h2>
            <p>¿Tienes preguntas o deseas más información? ¡Contáctanos!</p>
            <form>
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Correo Electrónico" />
              <textarea placeholder="Mensaje"></textarea>
              <button type="submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>




    </>
  )
}

export default App
