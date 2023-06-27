import {BrowserRouter} from 'react-router-dom';

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas} from './components';
import Projects from './components/Projects';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-center bg-auto bg-repeat bg-hero-pattern">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects/>
        <div className="relative z-0">
            <Contact />
            
          </div>
        </div>
      </BrowserRouter>
    
  )
}

export default App
