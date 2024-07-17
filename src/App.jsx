import { BrowserRouter } from "react-router-dom";
import {Navbar, About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas} from "./components";

const App=()=>{
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      
      <About />
      </div>
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="realtive z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App