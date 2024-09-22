import NavBar from "../../components/NavBar/NavBar"
import Slide from "../sections/Slide/Slide"
import Services from "../sections/Services/Services"

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
