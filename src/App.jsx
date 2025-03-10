import { useState } from 'react';
import './App.css';
import './style.css';
import foto1 from './foto1.jpg';
import foto2 from './foto2.jpg';
import foto3 from './foto3.jpg';
import princ from './principal.jpg';
import story from './story.png';
import icon1 from './icon2.png';
import icon2 from './icon3.png';
import icon3 from './icon1.png';
import logo from './logonav2.png';
import carrito from './carro.png';
import vino from './vino.png';
import vino1 from './vino1.png';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const openModal = (texto) => {
    setModalText(texto);
    setShowModal(true);
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#rsc">RSC</a></li>
            <li><a href="#quinessomos">Quiénes Somos</a></li>
            <li>
              <a href="#tienda" style={{ display: 'flex', alignItems: 'center' }}>
                Tienda
                <img src={carrito} alt="Carrito" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
              </a>
            </li>
            <li><a href="#idioma">Idioma</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-grid">
        <section className="grid-item">
          <img src={princ} alt="Principal" />
        </section>
        <section className="grid-item">
          <h2 style={{ textAlign: 'center' }}>Enoturismo</h2>
          <p><h3>Horarios de Visita: Lunes-Domingos 9:00-18:00hs</h3></p>
          <p><h3>Turismo Gastronomico (All Inclusive) 554€</h3></p>
          <p><h3>Buffet Libre (Horario de 13:30-16hs) 15€</h3></p>
          <p><h3>Para reservas sin visita llamar al 91654456</h3></p>
          <p><h3>Cata de Vinos + Visitas (Duración 1.30hs) 15€</h3></p>
          <p><h3>Alojamiento/Cabañas 40€</h3></p>
          <p><h3>Charlas Informativas 20€</h3></p>
          <p><h3>Participación en proceso de elaboración 25€</h3></p>
        </section>
        <section className="grid-item">
          <h2 style={{ textAlign: 'center' }}>Nuestros Productos</h2>
          <div className="productos-container">
            <div className="producto" onClick={() => openModal("Nuestro Chardonnay es un vino de carácter único que fusiona la frescura cítrica con una opulencia aterciopelada. Con toques de manzana verde, melón y un suave toque de roble, es el equilibrio perfecto entre elegancia y frescura. Ideal para maridar con mariscos, platos cremosos o disfrutar solo, este vino es un verdadero regalo del cielo.")}>
              <img src={vino1} alt="Producto 1" />
              <p><b>Chardonnay de Viñedo Celestial 60€</b></p>
            </div>
            <div className="producto" onClick={() => openModal("Un vino fresco, vibrante y lleno de personalidad. El Sauvignon Blanc de Viñedo Celestial explota en tu boca con sabores a hierba fresca, frutas tropicales y una acidez brillante que refresca el paladar. Perfecto para disfrutar con ensaladas, mariscos y platos ligeros, es una explosión de frescura que te conecta directamente con la naturaleza.")}>
              <img src={vino1} alt="Producto 2" />
              <p><b>Sauvignon Blanc de Viñedo Celestial 51€</b></p>
            </div>
            <div className="producto" onClick={() => openModal("Un vino fresco, afrutado y elegante que captura la esencia de la tierra de Rueda. Nuestro Verdejo combina sabores de manzana verde, melón y un toque herbal, con una acidez viva que refresca y revitaliza. Es perfecto para acompañar pescados, mariscos o una tabla de quesos. Cada copa es una invitación a disfrutar del frescor y la autenticidad de los mejores viñedos.")}>
              <img src={vino1} alt="Producto 3" />
              <p><b>Verdejo de Viñedo Celestial 54€</b></p>
            </div>
          </div>
        </section>
        <section className="grid-item">
          <div className="productos-container">
            <div className="producto" onClick={() => openModal("Sumérgete en la intensidad de nuestro Malbec, una joya de cuerpo robusto y aromas seductores a frutos negros como mora y ciruela, acompañados de una suave pizca especiada. Cada sorbo es un viaje de sabores profundos, con taninos sedosos que hacen de este vino el compañero perfecto para carnes rojas a la parrilla. Una experiencia celestial en cada copa.")}>
              <img src={vino} alt="Producto 1" />
              <p><b>Malbec de Viñedo Celestial 60€</b></p>
            </div>
            <div className="producto" onClick={() => openModal("Un vino que desafía los sentidos, nuestro Cabernet Sauvignon es una obra maestra de complejidad y elegancia. Aromas a frutas negras maduras se mezclan con notas sutiles de hierba y roble, mientras que sus taninos firmes y estructura potente ofrecen una experiencia memorable. Ideal para una cena sofisticada, este vino es el rey de los tintos.")}>
              <img src={vino} alt="Producto 2" />
              <p><b>Cabernet Sauvignon de Viñedo Celestial 51€</b></p>
            </div>
            <div className="producto" onClick={() => openModal("Nuestro Merlot es un abrazo cálido en cada sorbo. Con una suavidad que conquista, sus sabores a cereza y ciruela se entrelazan con delicadas notas de chocolate y vainilla. Su equilibrio perfecto de acidez y taninos suaves lo convierte en un vino versátil, ideal para acompañar platos de pasta o carnes blancas. Una experiencia aterciopelada que deleita el paladar.")}>
              <img src={vino} alt="Producto 3" />
              <p><b>Merlot de Viñedo Celestial 54€</b></p>
            </div>
            <div className="producto" onClick={() => openModal("La delicadeza se encuentra con la complejidad en nuestro Pinot Noir. Con una frescura vibrante de frutos rojos como fresa y cereza, este vino seduce con sus aromas florales y toques sutiles de tierra. Su elegante acidez y taninos suaves lo hacen ideal para disfrutar en una ocasión especial, acompañado de platos ligeros o pescados grasos. Un vino que te transporta al paraíso con cada copa.")}>
              <img src={vino} alt="Producto 4" />
              <p><b>Pinot Noir de Viñedo Celestial 84€</b></p>
            </div>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section className="grid-item">
          <h2 onClick={toggleAbout} style={{ cursor: 'pointer' }}>Quiénes Somos</h2>
          <div className={`text-container ${showAbout ? 'active' : ''}`}>
            {showAbout && (
              <p>En <b>Viñedo Celestial</b> somos tres mujeres apasionadas por el vino, la tierra y las experiencias 
              que nos conecta con lo natural. Paula, Noelia y Daniela, cada una con una historia y un propósito 
              propio, nos unimos para crear un viñedo que refleja nuestro amor por la viticultura y el compromiso 
              con la calidad. Nuestro objetivo es ofrecer vinos que no solo cautiven el paladar, sino que cuenten una historia de 
              dedicación, tradición y trabajo en equipo. Desde la selección de las mejores uvas hasta el proceso 
              artesanal de vinificación, cada botella que producimos lleva consigo la esencia de nuestra visión.</p>
            )}
          </div>
          <div className="team-container">
            <div className="team-member">
              <img src={foto1} alt="Nombre 1" />
              <p><b>Noelia Guarnizo Peña</b></p>
            </div>
            <div className="team-member">
              <img src={foto2} alt="Nombre 2" />
              <p><b>Paula Aranda</b></p>
            </div>
            <div className="team-member">
              <img src={foto3} alt="Nombre 3" />
              <p><b>Daniela Doval</b></p>
            </div>
          </div>
        </section>

        {/* Misión, Visión y Valores */}
        <section className="grid-item">
          <div className="button-container">
            <div className="button-column">
              <h2 onClick={() => toggleSection('mision')} style={{ cursor: 'pointer' }}>Misión</h2>
              <div className={`text-container ${activeSection === 'mision' ? 'active' : ''}`}>
                {activeSection === 'mision' && (
                  <p>"En Viñedo Celestial, nos dedicamos a la producción y comercialización de vinos de alta calidad, combinando tradición e innovación para ofrecer experiencias únicas a nuestros clientes..."</p>
                )}
              </div>
            </div>
            <div className="button-column">
              <h2 onClick={() => toggleSection('vision')} style={{ cursor: 'pointer' }}>Visión</h2>
              <div className={`text-container ${activeSection === 'vision' ? 'active' : ''}`}>
                {activeSection === 'vision' && (
                  <p>"Ser reconocidos como un viñedo referente en la producción de vinos premium, destacándonos por nuestra pasión, sostenibilidad y compromiso con la calidad..."</p>
                )}
              </div>
            </div>
            <div className="button-column">
              <h2 onClick={() => toggleSection('valores')} style={{ cursor: 'pointer' }}>Valores</h2>
              <div className={`text-container ${activeSection === 'valores' ? 'active' : ''}`}>
                {activeSection === 'valores' && (
                  <p>
                  <b>Calidad y Excelencia:</b> Vinos de la más alta calidad, cuidando cada detalle.<br />
                  <b>Tradición e Innovación:</b> Combinamos métodos tradicionales con creatividad.<br />
                  <b>Autenticidad:</b> Vinos que reflejan nuestra esencia y terroir.<br />
                  <b>Sostenibilidad:</b> Compromiso con el medio ambiente y un futuro responsable.<br />
                  <b>Experiencia:</b> El vino como una vivencia especial en buena compañía.<br />
                </p>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="grid-item">
          <a href="#video-modal" className="video-link">
          <img src={story} alt="story" />
          </a>
        </section>
        <section className="grid-item">
          <h2 style={{ textAlign: 'center' }}>Resposabilidad Social Coorporativa</h2>
          <p><h3>En nuestra empresa, trabajamos para promover el bienestar de la comunidad y el cuidado del medio ambiente, asegurando un futuro sostenible. Nos enfocamos en:</h3><br />

        <b>Sostenibilidad Ambiental:</b> Fomentamos prácticas agrícolas sostenibles, utilizamos energías renovables y gestionamos los residuos de forma responsable.<br />
        <b>Compromiso con la Comunidad:</b> Apoyamos la economía local al contratar proveedores y personal de la zona y ofrecer programas de formación en prácticas sostenibles.<br />
        <b>Bienestar Social y Laboral:</b> Aseguramos condiciones laborales justas y un entorno seguro, promoviendo la salud y la diversidad entre nuestros empleados.<br />
        <b>Transparencia y Ética:</b> Mantenemos una comunicación abierta sobre nuestras prácticas de Responsabilidad Social Corporativa (RSC) y promovemos relaciones comerciales éticas.</p>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
              <p>{modalText}</p>
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-column">
          <table>
            <tbody>
              <h3>Datos de Contacto</h3>
              <p>Tel: +34 622587754 </p>
              <p>Carretera Aranda, Km 66 COD: 09443 Gumiel de Mercado, Burgos España</p>
            </tbody>
          </table>
        </div>
        <div className="footer-column">
          <table>
            <tbody>
              <h3>Comunicación</h3>
              <p>Trabaja con nosotros</p>
              <p>Preguntas Frecuentes</p>
            </tbody>
          </table>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <p>Aviso Legal</p>
          <p>Politica de privacidad</p>
          <p>Politica de cookies</p>
        </div>
        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <img src={icon1} alt="icon2" />
          <img src={icon2} alt="icon3" />
          <img src={icon3} alt="icon1" />
        </div>
      </footer>
    </>
  );
}

export default App;

