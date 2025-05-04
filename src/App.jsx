import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RoomsPage from "./Pages/RoomsPage";
import RoomDetailsPage from "./Pages/RoomDetailsPage";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={ <HomePage />}/>
          <Route path="/About" element={ <AboutPage />}/>
          <Route path="/Rooms" element={ <RoomsPage />}/>
          <Route path="/Rooms/:id" element={ <RoomDetailsPage />}/>
          <Route path="/Contact" element={ <ContactPage />}/>
          <Route path="*" element={ <NotFoundPage />}/>
        </Routes>
    </>
  )
}

export default App
