import { Link } from "react-router-dom"
import { SendForm } from "../buttons/Buttons"


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-nav-container">
                <div className="conect">
                    <h2 className="texts section-title">conecta</h2>
                    <a href="https://www.instagram.com/la.colgada/">instagram</a>
                    <a href="https://es-la.facebook.com/">facebook</a>
                    <a href="https://www.tiktok.com/es/">tiktok</a>
                </div>
                <div className="explore">
                    <h2 className="texts section-title">explora</h2>
                    <Link to={"/"} className="link-router">inicio</Link>
                    <Link to={"products"} className="link-router">productos</Link>
                    <Link to={"faq"} className="link-router">Faq</Link>
                    <Link to={"contacto"} className="link-router">contacto</Link>
                </div>
                <div className="subscribe">
                    <h2 className="texts section-title">suscríbete</h2>
                    <input type="email" className="footer-input"></input>
                    <SendForm />
                </div>
                <div className="contact">
                    <h2 className="texts section-title">contacto</h2>
                    <h3 className="texts">si@lacolgada.com.ar</h3>
                    <h3 className="texts">la.colgada.com.ar</h3>
                    <h3 className="texts">@la.colgada</h3>
                </div>
            </div>

            <div className="disclaimer">
                <h4>&copy; Buenos Aires - Argentina 2022. | Todos los derechos reservados.</h4>
            </div>

        </div>
    )
}

export default Footer