import React from "react"
import './Projects.css'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {Button} from '@material-ui/core'
import Stack from '@mui/material/Stack';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const Projects=(props)=>{
  return(
    <>
    <body>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="top">
    <div className="container">
    <a className="navbar-brand" href="#1" id="navbrand"> <b>{<KeyboardArrowLeftIcon size="large"/>}kumaran /{<KeyboardArrowRightIcon size="large"/>} </b></a>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="https://kumaran-dev.netlify.app/" className="nav-link"><b>{<KeyboardArrowLeftIcon size="large"/>}HOME</b></a></li>
    </ul>
    </div>
    </nav>
    <section id="section6">
    <h1 className="text-center">Projects I Have Worked On
    <img src="Assets/images/wave2.png" class="img-fluid" alt="..." id="pro"/></h1>
    <div className="container" id="scroll4">
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
                <p>Users will be able to select their preferable food items from the existing menu card. </p>
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
                <div class="row">
                 <div class="col col-lg-2">
                   <div className="skills1"><img src="Assets/images/rreact.png" alt="..."/></div>
                 </div>
                 <div class="col col-lg-2">
                   <div className="skills1"><img src="Assets/images/bootstrap.png" alt="..."/></div>
                 </div>
                 <div class="col col-lg-2">
                   <div className="skills1"><img src="Assets/images/material-ui.png" alt="..."/></div>
                 </div>
                </div>
            </div>
        </div>
        <br/>
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
                  <Button endIcon={<GitHubIcon />} variant="contained" color='inherit' style={{borderRadius:100}} id='source' href='https://github.com/KUMARAN1601/client_loan_apply_site'>SOURCE CODE</Button>
                  <Button endIcon={<OpenInNewIcon />} variant="contained" color='inherit' style={{borderRadius:100}} id='source' href='http://www.c2c.epizy.com/homepage.php?i=3'>LIVE PROJECT</Button>
                </Stack>
                <div class="row">
                 <div class="col col-lg-2">
                   <div className="skills1"><img src="Assets/images/javascript.png" alt="..."/></div>
                 </div>
                 <div class="col col-lg-2"><div className="skills1"><img src="Assets/images/bootstrap.png" alt="..."/></div>
                 </div>
                 <div class="col col-lg-2"><div className="skills1"><img src="Assets/images/php.png" alt="..." id="php"/></div>
                 </div>
                </div>
            </div>
        </div>
    
    </div>
    </section>
    </body>
    </>
  )
}

export default Projects 