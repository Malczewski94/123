import { Link } from "react-router-dom";
import logo from '../NavBar/Vault-Tec_Logo.svg (1).png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_contain">
                <div className="footer_section">
                    <div>
                        <h2 className="title_footer">EXPLORAR</h2>
                    </div>
                    <div className="footer_section_text">
                        <Link to='/'>
                            <p className="footer_text">Inicio</p>
                        </Link>
                        <Link to='/'>
                            <p className="footer_text">Productos</p>
                        </Link>
                        <Link to='/cart'>
                            <p className="footer_text">Carrito</p>
                        </Link>
                    </div>
                </div>
                <div className="footer_section">
                    <div>
                        <h2 className="title_footer">ASISTENCIA</h2>
                    </div>
                    <div className="footer_section_text">
                        <p className="footer_text">Centro de asistecia</p>
                        <p className="footer_text">Estado</p>
                        <p className="footer_text">Manual y documentos de seguridad</p>
                    </div>
                </div>
                <div className="footer_section">
                    <div>
                        <h2 className="title_footer">INFORMACIÓN LEGAL</h2>
                    </div>
                    <div className="footer_section_text">
                        <p className="footer_text">Política de privacidad</p>
                        <p className="footer_text">Condiciones del servicio</p>
                        <p className="footer_text">Acuerdo de licencia del usuario final</p>
                        <p className="footer_text">Información legal</p>
                        <p className="footer_text">Políticas de cookies</p>
                        <p className="footer_text">Código de conducta</p>
                        <p className="footer_text">Contacto</p>
                        <p className="footer_text">Compañia</p>
                        <p className="footer_text">Empleos</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/'><img className="logo" src={logo} alt="logo"></img></Link>
            </div>
        </footer>
    )
}

export default Footer;