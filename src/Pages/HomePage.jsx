import Menu from "../components/menu";
import Banner from "../components/banner";
import Rooms from "../components/Rooms";
import About from "../components/About";
import Ours from "../components/Ours";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



export default function HomePage() {
  return (
     <>
         <Menu />
         <Banner />
         <div className="w3-content" style={{"maxWidth":"1532px"}}>
            <Rooms />
            <About />
            <Ours />
            <Contact />
         </div>
         <Footer />
    </>
  )
}
