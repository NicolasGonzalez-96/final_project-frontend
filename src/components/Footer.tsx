import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import '../Styles/Footer.css'

export default function FooterComponent() {
  return (
    <Nav className="footer-component text-white">
      <div className='container-fluid footer-grid'>
        <div className='row footer-grid2'>
          <div className='col-xs-12 col-md-6 col-lg-3'>
            <Nav.Link href="/home"><img src="/logo.ico" alt="" /></Nav.Link>
          </div>
          <div className='col-xs-12 col-md-6 col-lg-3'>
            <p>Navega</p>
            <div className='mb-3'>
              <a href="/catalogo" className='textdecoration'>Catálogo</a>
            </div>  
            <div className='mb-3'>
              <a href="/perfiltienda" className='textdecoration'>Tiendas</a>
            </div>  
          </div>
          <div className='col-xs-12 col-md-6 col-lg-3'>
            <p>Contáctanos</p>
            <div className='mb-3'>
              <p>Instragram <FaInstagram /></p>
              <p>Facebook <FaFacebook /></p>
            </div> 
          </div>
        </div>
        <div className='divisor'></div>
        <p className='parrafo-footer'>THE MARKET PLACE | Todos los derechos reservados | Santiago de Chile 2024</p>
      </div>
    </Nav>
  );
}
