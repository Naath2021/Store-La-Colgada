
import { SeeProduct } from "../../buttons/Buttons"
import homeBg from "../../../assets/image/backgrounds/home.png"
import brandInfo from "../../../assets/image/backgrounds/brand-description.png"

const Home = () => {
    return (
        <>
            <div className="sections-container">

                <div className="home-welcoming-and-info">
                    <img src={homeBg} className="bg-img" alt="home-welcoming" />
                    <img src={brandInfo} className="brand-info-img" alt="brand-info-img" />
                </div>
                <div className="home-product-link">
                    <h1 className="section-title">Macetas Colgantes</h1>
                    <h2 className="section-description">Pequeña descripción de las macetas que atraiga la atención del usuario para ingresar al link.</h2>
                    <SeeProduct />
                </div>
            </div>
        </>
    )
}

export default Home