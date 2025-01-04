import NavBar from "../../components/NavBar/NavBar"
import Slide from "../sections/slide-section/slide"
import Services from "../sections/service-section/services"

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
            {/* <div id="about">
          <About />
      </div>
      <div id="contact">
          <Contact />
      </div>*/}
        </>
    )
}
export default Home
