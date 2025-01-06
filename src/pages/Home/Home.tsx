import NavBar from "../../components/NavBar/NavBar"
import Slide from "../sections/slide-section/slide"
import Services from "../sections/service-section/services"
import Gallery from "../sections/gallery-section/gallery-section"
import Contact from "../sections/contact-section/contact"
import Form from "../sections/form-section/form"

const Home = () => {
    return (
        <>
            <NavBar />
            <div id="slide">
                <Slide />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div id="contact">
                <Form />
            </div>
            <div id="">
                <Contact />
            </div>
        </>
    )
}
export default Home
