
import { SeeProduct } from "../../buttons/Buttons"
import homeBg from "../../../assets/image/backgrounds/home.png"
// import brandInfo from "../../../assets/image/backgrounds/brand-description.png"

const Home = () => {
    return (
        <>
            <div className="sections-container">

                <div className="home-welcoming-and-info">
                    <img src={homeBg} className="bg-img" alt="home-welcoming" />
                    
                </div>
                <div className="home-product-link">
                    <h2 className="section-description texts">Sensibilidad artística comprometida con explorar la noble manufactura y su trascender en objetos cotidianos.</h2>
                    <SeeProduct />
                </div>
            </div>
        </>
    )
}

export default Home