import { Box } from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"
import Slide from "../sections/Slide/Slide"
import Services from "../sections/Services/Services"

const Home = () => {
    return (
        <>
            <NavBar />
            <Box sx={{ height: '80px' }}></Box>
            <div id="slide">
                <Slide />
            </div>
            <div id="service">
                <Services />
            </div>
            {/* <div id="about">
          <About />
      </div>
      <div id="skills">
          <Skills />
      </div>
      <div id="projects">
          <Projects />
      </div>
      <div id="footer">
          <Footer />
      </div> */}
        </>
    )
}
export default Home
