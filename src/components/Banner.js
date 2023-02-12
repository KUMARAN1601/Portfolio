//import './Typing';
import './Banner.css';
import Typewriter from 'typewriter-effect';
import {Button} from '@material-ui/core'
import Stack from '@mui/material/Stack';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useNavigate } from 'react-router-dom'



const Banner =(props)=>{
  const navigate = useNavigate()

   // handle the navigation on the click => as a query string
   const goToFilterPage = Projects => navigate(`/projects?projects=${Projects}`)

  return(
    <>
     <header>
    <div className="intro">
       <h1><span style={{color:"red", alignContent:"center"}}> Hi,</span> I'm Kumaran </h1>

    <div className="typing">
    <Typewriter
    onInit={(typewriter)=>{
    typewriter
     .typeString(" A Web Developer.")
     .pauseFor(6000)
    //  .deleteAll()
     .typeString("")
     .start();
    }}
    />
    </div>
    </div>
    <div style={{alignContent:"center"}}> 
    <IconButton aria-label="Github" size="large" href='https://github.com/KUMARAN1601'>
        <GitHubIcon fontSize="large" style={{color:"white"}}/>
    </IconButton>
    <IconButton aria-label="LinkedIn" size="large" href='https://www.linkedin.com/in/kumaran-t-e-87b28b228/'>
        <LinkedInIcon fontSize="large" style={{color:"white"}}/>
    </IconButton>
    <IconButton aria-label="Email" size="large" id='github' href="mailto:tekumarantselumali@gmail.com">
        <EmailIcon fontSize="large" style={{color:"white"}}/>  
    </IconButton>
    
  </div>
   <br/>
   <Stack spacing={2} direction='row'>
    <Button startIcon={<QuestionAnswerIcon />} variant="contained" color='inherit' id='btncolor' href='#last'>GET IN TOUCH</Button>
    <Button startIcon={<CodeIcon />} onClick={e=>goToFilterPage('Projects')}  variant="outlined" color='inherit' style={{color:"#c6ff00"}}><b>SEE MY WORK</b></Button>
   </Stack> 
  </header>
  <section>
  <div>
    <div className="container" id='scroll1'>
      <div className="card">
      <div className="about">
          <img src="Assets/images/kumaran.jpeg" class="img-fluid" alt="..."/>
          <br/>
          <h3 className="text-center" id="aboutme">About me.</h3>
          <p className="text-center">
            Hi👋 I'm Kumaran. I am Electronics and Communication student from <br/>
            Rajalakshmi Engineering College , Chennai. I am Currently in my Third year of studies. 
          </p>
          <p className="text-center">
            I have keen interest on web application development. If there any way I can be relied upon to <br/>help your company acheive its goal by providing
              sustainable and scaleble solutions.
          </p> 
          <p className="text-center"><b>What I do:</b> Web application development using MERN (MongoDB, Express JS, React JS, Node JS).<br/>Have done some valuable projects on MERN stack
          </p>
            
      </div>
        </div>
       </div>
  </div>
  </section>
  
  </>
  )
}
export default Banner;
