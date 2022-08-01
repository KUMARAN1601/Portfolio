import './Contact.css'
import React, { useRef } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import emailjs from 'emailjs-com';


const Contact=()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9z2js9', 'template_a5jmd2a', form.current, 'rraGJKdhzfqeJopIg')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
    };

  return(
  <>
   <section id="section4">
   <img src="Assets/images/Wave.png" class="img-fluid" alt="..."/>
    <div className="container" id='scroll5'>
      <div className="row" id='last'>
        <div className="col-md-6">
        <h3 className="text-center" id="connect">Connect with me</h3>
          <IconButton aria-label="Github" size="large" id='github' href='https://github.com/KUMARAN1601'>
            <GitHubIcon fontSize="large" style={{color:"white"}}/> &nbsp; Github
          </IconButton>
          <br/>
          <IconButton aria-label="LinkedIn" size="large" id='github' href='https://www.linkedin.com/in/kumaran-t-e-87b28b228/'>
            <LinkedInIcon fontSize="large" style={{color:"white"}}/> &nbsp; Linkedin
          </IconButton>
          <br/>
          <IconButton aria-label="Twitter" size="large" id='github' href='https://twitter.com/home'>
            <TwitterIcon fontSize="large" style={{color:"white"}}/> &nbsp; Twitter
          </IconButton>
          <br/>
          <IconButton aria-label="Email" size="large" id='github' href="mailto:tekumarantselumali@gmail.com">
            <EmailIcon fontSize="large" style={{color:"white"}}/> &nbsp; tekumarantselumalai@gmail.com
          </IconButton>
        </div>
        <div className="col-md-6">
        <h3 className="" id='message'>Write a Message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-group">
            <div class="form-row">
              <div class="col">
               <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
              </div>
              <br/>
              <div class="col">
               <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
              </div>
              <br/>
            </div>
          </div>
          <div class="form-group">
             <textarea placeholder="Your Message" class="form-control" name="message" rows="3" required></textarea>
          </div>
          <br/>
          <Button type="submit" endIcon={<SendIcon />} variant="outlined" color='inherit' style={{color:"#c6ff00"}}> Send </Button>
        </form>
        </div>
       </div>  
    </div>

   </section>
  </>
  );
}
export default Contact



    