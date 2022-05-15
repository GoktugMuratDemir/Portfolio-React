// first-project
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Experience from './Components/Experience'
import Portfolio from './Components/Portfolio';
import Team from './Team/Team';
import Footer from './Components/Footer';
import ContactsSoon from './Components/ContactSoon';




// import Particles from "react-tsparticles";  // Başka bir zaman ayrıntılı bak



function App() {
  return (
    <>

     <Navbar />
     

      {/* <Particles  

        params={ {
          particles : {
            number : {
              value : 30 ,
              density : {
                enable : true , 
                value_area : 900
              }
            }
          }
        } }

      /> */}  {/* Öğren */}


      <Navbar />

      <Header />

      <AboutMe />

      <Services />

      <Experience />

      <Portfolio />
      


      {/* <PopUpExtra /> */}

      <Team />

      {/* <Contacts /> */}

      <ContactsSoon />


      {/* <ContactsExtra /> */}

      <Footer />


    
    
    </>
  );
}

export default App;

