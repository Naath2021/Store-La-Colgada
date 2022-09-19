
import { SeeProduct } from "../../buttons/Buttons"
import homeBg from "../../../assets/image/backgrounds/home.png"
// import brandInfo from "../../../assets/image/backgrounds/brand-description.png"

const Home = () => {
    return (
        <>
            <div className="sections-container">

                <div className="home-welcoming-and-info">
                    <img src={homeBg} className="bg-img" alt="home-welcoming" />
                    {/* <img src={brandInfo} className="brand-info-img" alt="brand-info-img" /> */}
                </div>
                <div className="home-product-link">
                    {/* <h1 className="section-title">Manufactura decorativa</h1> */}
                    <h2 className="section-description">Sensibilidad artística comprometida con explorar la noble manufactura y su trascender en objetos cotidianos.</h2>
                    <SeeProduct />
                </div>
            </div>
        </>
    )
}

export default Home