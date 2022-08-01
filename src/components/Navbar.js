import './Navbar.css';
import Banner from "./Banner";
import Skills from "./Skills";
import FeaturedProjects from "./FeaturedProjects";
import Contact from "./Contact";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Navbar =(props)=>{
  return(
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="top">
    <div className="container">
       <a className="navbar-brand" href="#brand" id="navbrand"><b>{<KeyboardArrowLeftIcon size="large"/>}kumaran /{<KeyboardArrowRightIcon size="large"/>}</b></a>
      <button className="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown"
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="#scroll1" className="nav-link"><b>ABOUT</b></a></li>
          <li className="nav-item">
            <a href="#scroll2" className="nav-link"><b>TOOLS AND SKILLS</b></a></li>
          <li className="nav-item">
            <a href="#scroll3" className="nav-link"><b>FEATURED PROJECTS</b></a></li>
            <li className="nav-item">
            <a  className="nav-link" href='/Projects' ><b>ALL PROJECTS</b></a></li>
          <li className="nav-item">
            <a href="#scroll5" className='nav-link'><b>CONTACT ME</b></a></li>
          
        </ul>

      </div>
    </div>
  </nav>
  <Banner/>
  <Skills/>
  <FeaturedProjects/>
  <Contact/>
  </>
  
  )
}


export default Navbar;