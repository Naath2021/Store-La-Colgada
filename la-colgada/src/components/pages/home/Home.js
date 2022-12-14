import { faGlobe, faHandSparkles, faTruck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import db from "../../..";
// import { getDocs, collection } from 'firebase/firestore';
import Category1 from "../../../assets/image/backgrounds/home.png"
import Category2 from "../../../assets/image/backgrounds/home.png"
import Category3 from "../../../assets/image/backgrounds/home.png"

const baseUrl = "/img/"

const Home = () => {


    return (
        <>
            <div className="sections-container">
                <div className="welcoming ">
                    <h1 className="titles-web welcoming-title">manufactura estimulante de objetos únicos...</h1>
                </div>
                <div className="description" >
                    <div className="text-container b-radius">
                        <h2 className="texts">la colgada es sensibilidad artística comprometida con explorar la noble manufactura y su trascender en objetos cotidianos.</h2>
                    </div>
                </div>

                <div className="brand-details">
                    <div className="detail-container">
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <h2 className="texts detail-title">envíos a todo el país</h2>
                        <h3 className="texts detail-desc">compra desde cualquier parte de Argentina y del mundo</h3>
                    </div>

                    <div className="detail-container">
                        <FontAwesomeIcon icon={faHandSparkles} className="icon" />
                        <h2 className="texts detail-title">piezas únicas</h2>
                        <h3 className="texts detail-desc">todos los productos tienen originalidad y personalidad</h3>
                    </div>

                    <div className="detail-container">
                        <FontAwesomeIcon icon={faTruck} className="icon" />
                        <h2 className="texts detail-title">devoluciones seguras</h2>
                        <h3 className="texts detail-desc">tu compra protegida por nuestra política de devoluciones de 30 días.</h3>
                    </div>
                </div>

                <div className="categories-container">
                    <h2 className="titles-web category-title">categorías</h2>
                    <div className="card-container">
                        <Link to={"products/category/macetas"} className="link-router">
                            <div className="categories">
                                <img src={Category1} alt="categoria-macetas" className="category-img b-radius" />
                                <h3>macetas</h3>
                            </div>
                        </Link>
                        <Link to={"products/category/utensilios"} className="link-router">
                            <div className="categories">
                                <img src={Category2} alt="categoria-macetas" className="category-img b-radius" />
                                <h3>utensilios</h3>
                            </div>
                        </Link>
                        <Link to={"products/category/combos"} className="link-router">
                            <div className="categories">
                                <img src={Category3} alt="categoria-macetas" className="category-img b-radius" />
                                <h3>combos</h3>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="about">
                    <div className="text-container b-radius">
                        <h2 className="titles-web about-title">acerca de</h2>
                        <h3 className="texts about-desc">Sensibilidad artística comprometida con explorar la noble manufactura y su trascender en objetos cotidianos. Son piezas únicas hechas a mano, con estilos especiales y blah blah blah. Hagamos un párrafo más largo para describir la marca.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home