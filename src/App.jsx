import './App.css'
function App() {

  return (
    <>


      <section id="mostrar-caso">
        <div class="contenedor">
          <h1>Descubre la Magia de Juxtlahuaca</h1>
          <p>Bienvenido a Santiago Juxtlahuaca, un tesoro escondido en el corazón de Oaxaca, México. Déjate cautivar por su rica historia, vibrante cultura Triqui, impresionantes paisajes naturales y la calidez de su gente.</p>
        </div>
      </section>

      <section id="cajas">
        <div class="contenedor">
          <div class="caja">
            <img src="icono-historia.png" alt="Historia" />
            <h3>Historia Rica</h3>
            <p>Desde su fundación prehispánica, Juxtlahuaca ha sido un crisol de culturas. Explora vestigios arqueológicos y conoce su papel crucial en la región Triqui a través de los siglos.</p>
          </div>
          <div class="caja">
            <img src="icono-turismo.png" alt="Turismo" />
            <h3>Turismo Encantador</h3>
            <p>Descubre la belleza natural de la región Triqui, desde la imponente Peña del León hasta las enigmáticas Grutas de Juxtlahuaca. Aventúrate en senderos y cascadas escondidas.</p>
          </div>
          <div class="caja">
            <img src="icono-cultura.png" alt="Cultura" />
            <h3>Cultura Vibrante</h3>
            <p>Sumérgete en la cultura Triqui, una de las más ricas y mejor conservadas de Oaxaca. Admira la maestría textil, la música, la danza y las festividades ancestrales.</p>
          </div>
        </div>
      </section>

      <section id="historia" class="seccion">
        <div class="contenedor">
          <h2>Historia de Juxtlahuaca</h2>
          <p>Santiago Juxtlahuaca, cuyo nombre en náhuatl significa "Llanura de Conejos", tiene una historia que se remonta a tiempos prehispánicos. La región ha sido habitada por el pueblo Triqui durante siglos, conservando su lengua, tradiciones y costumbres hasta el día de hoy. Durante la época colonial, Juxtlahuaca fue un importante centro religioso y comercial. La iglesia principal, dedicada a Santiago Apóstol, es un testimonio de esta época. En el siglo XIX, Juxtlahuaca participó activamente en la vida política y social de Oaxaca y México. Hoy en día, Santiago Juxtlahuaca es un municipio próspero que busca preservar su patrimonio cultural y natural, al tiempo que se abre al turismo sostenible.</p>
        </div>
      </section>

      <section id="turismo" class="seccion">
        <div class="contenedor">
          <h2>Turismo en Juxtlahuaca</h2>
          <p>Juxtlahuaca ofrece una variedad de atractivos turísticos para los amantes de la naturaleza, la cultura y la aventura:</p>
          <div id="galeria">
                <img src="grutas-juxtlahuaca.jpg" alt="Grutas de Juxtlahuaca"/>
                <img src="pena-del-leon.jpg" alt="Peña del León"/>
                <img src="cascada-rio-salado.jpg" alt="Cascada Río Salado"/>
          </div>
            <p><b>Grutas de Juxtlahuaca:</b>  Explora estas impresionantes grutas conocidas por sus pinturas rupestres, formaciones geológicas y ríos subterráneos.  Se requiere contratar guías locales para la visita. <br/>
            <b>Peña del León:</b>  Admira esta formación rocosa con forma de león, un símbolo natural de la región Triqui, ideal para caminatas y fotografía de paisaje.<br/>
            <b>Cascada Río Salado:</b> Disfruta de esta hermosa cascada y sus pozas naturales, perfectas para un día de campo y relajación en contacto con la naturaleza.<br/>
            <b>Textiles Triquis:</b>  Descubre la riqueza del arte textil Triqui, famoso por sus diseños coloridos y complejos. Visita talleres artesanales y mercados locales para adquirir piezas únicas directamente de los productores.</p>

        </div>
      </section>

      <section id="eventos" class="seccion">
        <div class="contenedor">
            <h2>Eventos y Festividades</h2>
            <p>Santiago Juxtlahuaca celebra diversas festividades a lo largo del año, reflejo de su rica herencia cultural:</p>
            <ul>
                <li>
                    <h3>Fiesta de Santiago Apóstol</h3>
                    <p>Fecha aproximada: 25 de Julio.  La fiesta patronal en honor a Santiago Apóstol, santo patrono del pueblo. Incluye misas, procesiones, música, danza tradicional Triqui,  fuegos artificiales y eventos culturales.</p>
                </li>
                <li>
                    <h3>Festival Cultural Triqui</h3>
                    <p>Fecha aproximada:  Noviembre.  Un evento anual que celebra la cultura Triqui en su máxima expresión.  Presentaciones de música y danza tradicional, exposiciones de textiles y artesanías, gastronomía local, talleres y conferencias sobre la cultura Triqui.</p>
                </li>
                <li>
                    <h3>Día de Muertos</h3>
                    <p>Fecha aproximada: 1 y 2 de Noviembre.  Como en todo México, el Día de Muertos se celebra con altares coloridos, ofrendas, visitas al panteón y rituales ancestrales, con un toque especial de las tradiciones Triquis.</p>
                </li>
                 <li>
                    <h3>Carnaval Triqui</h3>
                    <p>Fecha aproximada:  Febrero/Marzo (variable).  Una celebración pre-cuaresma llena de color, música y danzas, con elementos únicos de la tradición Triqui.</p>
                </li>
            </ul>
        </div>
    </section>

      <section id="galeria-seccion" class="seccion">
        <div class="contenedor">
          <h2>Galería de Imágenes</h2>
          <div id="galeria">
          <img src="juxtlahuaca-centro.jpg" alt="Centro de Juxtlahuaca"/>
                <img src="juxtlahuaca-iglesia.jpg" alt="Iglesia de Santiago Apóstol"/>
                <img src="juxtlahuaca-mercado.jpg" alt="Mercado de Juxtlahuaca"/>
                <img src="juxtlahuaca-textiles.jpg" alt="Textiles Triquis"/>
                <img src="juxtlahuaca-danzantes.jpg" alt="Danzantes Triquis"/>
                <img src="juxtlahuaca-paisaje.jpg" alt="Paisaje de Juxtlahuaca"/>
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
