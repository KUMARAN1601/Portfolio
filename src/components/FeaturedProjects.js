import './FeaturedProjects.css'
import {Button} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const FeaturedProjects=(props)=>{
    const navigate = useNavigate()

   // handle the navigation on the click => as a query string
   const goToFilterPage = Projects => navigate(`/projects?projects=${Projects}`)
  return(
    <>
    <section id='section3'>
    <div className="container" id='scroll3'>
     <div><h1 className="text-center" color='inherit'> Featured Projects </h1></div>
     <h4 className='text-center'>Food Ordering Web App</h4>
        <div className="row">
            <div className="col-md-6">
                <img class="img-fluid rounded-start" src="Assets/images/project1.png" alt="..."/>
            </div>
            <div className="col-md-6">
                <p id='p1'>
                    This was my very first <span style={{color:'yellow'}}>fullstack</span> web application.
                </p>
                <p>The frontend is build using with <span style={{color:'yellow'}}>React</span> with <span style={{color:'yellow'}}>Bootstrap</span> for styling.
                </p>
                <p>
                   The backend is build with <span style={{color:'yellow'}}>Node.js</span> with <span style={{color:'yellow'}}>Express.js</span> framework along with <span style={{color:'yellow'}}>MongoDB</span> Database. User can register and Login .
                </p>
                <p>
                    This application used to search the <span style={{color:'yellow'}}>restaurants</span> to the location, features of the app are <span style={{color:'yellow'}}>filtering</span> the restaurants by <span style={{color:'yellow'}}>category</span>.
                </p>
                <p>Users will be able to select their preferable food items from the existing menu card </p>
                <Stack spacing={2} direction='row'>
                  <Button endIcon={<GitHubIcon />} variant="contained" color='inherit' style={{borderRadius:100}} id='source' href='https://github.com/KUMARAN1601/Food-ordering-web-App'>Source code</Button>
                </Stack> 
                <div className="row">
                  <div className="col col-lg-2">
                   <div className="skills1">
                    <img src="Assets/images/rreact.png" alt="..."/>
                   </div>
                  </div>
                  <div className="col col-lg-2">
                   <div className="skills1">
                    <img src="Assets/images/node.png" alt="..."/>
                   </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="skills1">
                      <img src="Assets/images/bootstrap.png" alt="..."/>
                    </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="skills1">
                      <img src="assets/images/mongodb.png" alt="..."/>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <br/>
        <h4 className='text-center'>My Portfolio</h4>
        <div className="row">
            <div className="col-md-6">
                <img class="img-fluid rounded-start" src="Assets/images/myporfolio.png" alt="..."/>
            </div>
            <div className="col-md-6">
                <p id="p2">
                    My Portfolio website build with <span style={{color:'yellow'}}>React</span> and styling is done using <span style={{color:'yellow'}}>material-ui</span> and <span style={{color:'yellow'}}>bootstrap</span>.
                </p>
                <p>
                   The project is easy to maintain and the source code is very <span style={{color:'yellow'}}>moduler</span> allowing easy <span style={{color:'yellow'}}>debugging</span>.
                </p>
                <p>Text and images automatically reformat and resize to be readable and spaced correctly.</p>
                <p>
                   The Project component takes in props for links, icons, title, images, etc...
                </p>
                <Stack spacing={2} direction='row'>
                  <Button endIcon={<GitHubIcon />} variant="contained" color='inherit' style={{borderRadius:100}} id='source' href='https://github.com/KUMARAN1601'>Source code</Button>
                </Stack> 
                <div className="row">
                  <div className="col col-lg-2">
                   <div className="skills1">
                    <img src="Assets/images/rreact.png" alt="..."/>
                   </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="skills1">
                      <img src="Assets/images/bootstrap.png" alt="..."/>
                    </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="skills1">
                      <img src="assets/images/material-ui.png" alt="..."/>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <br/>
        <h4 className='text-center'>Personal Loan Lending Platform</h4>
        <div className="row">
            <div className="col-md-6">
                <img class="img-fluid rounded-start" src="Assets/images/c2c.png" alt="..."/>
            </div>
            <div className="col-md-6">
                <p id="p2">
                   In this web application where <span style={{color:'yellow'}}>users</span> can ask or give <span style={{color:'yellow'}}>personal loans to other users</span> of the application.
                </p>
                <p>
                  This platform can also be called as a C2C <span style={{color:'yellow'}}>(Customers to customers)</span> personal loan lending platform.   
                </p>
                <p>The frontend is build using with <span style={{color:'yellow'}}>HTML</span> with <span style={{color:'yellow'}}>CSS & Bootstrap</span> for styling.</p>
                <p>The backend is build with <span style={{color:'yellow'}}>php</span>.</p>
                <p><PersonIcon fontSize="large" style={{color:"white"}}/>&nbsp; with Kumaresh</p>
                <Stack spacing={2} direction='row' style={{alignContent:"center"}}>
                  <Button endIcon={<GitHubIcon />} variant="contained" color='inherit' style={{borderRadius:100}} id='source' href='https://github.com/KUMARAN1601/client_loan_apply_site'>Source code</Button>
                  <Button endIcon={<OpenInNewIcon />} variant="contained" color='inherit' style={{borderRadius:100}} id='source' href='http://www.c2c.epizy.com/homepage.php?i=3'>LIVE PROJECT</Button>
                </Stack>
                <div className="row">
                  <div className="col col-lg-2">
                   <div className="skills1">
                    <img src="Assets/images/javascript.png" alt="..."/>
                   </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="skills1">
                      <img src="Assets/images/bootstrap.png" alt="..."/>
                    </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="skills1">
                      <img src="Assets/images/php.png" alt="..." id='php'/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <div className='text-center'>
    <Button onClick={e=>goToFilterPage('Projects')} endIcon={<KeyboardArrowRightIcon />} variant="outlined" color='inherit' style={{color:"#c6ff00"}} id="fbtn"><b>VIEW ALL PROJECTS</b></Button>
    </div>
    </>
  )
}

export default FeaturedProjects 