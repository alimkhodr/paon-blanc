import NavBar from "../../components/NavBar/NavBar"
import Slide from "../sections/slide-section/slide"
import Services from "../sections/service-section/services"
import Gallery from "../sections/gallery-section/gallery-section"
import Contact from "../sections/contact-section/contact"
import Form from "../sections/form-section/form"
import { Fab } from "@mui/material"
import Products from "../sections/products-section/products"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from "../sections/footer-section/footer"

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
            <div id="products">
                <Products />
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div id="contact">
                <Form />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div style={{ position: 'sticky', bottom: 0}}>
                <Fab
                    color="primary"
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        backgroundColor: "#2ba048"
                    }}
                    onClick={() => window.open('https://wa.me/5512996119002?text=Olá!', '_blank')}
                >
                    <WhatsAppIcon sx={{ color: "background.default" }} />
                </Fab>
            </div>

            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default Home
