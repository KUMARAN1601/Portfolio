import './Banner.css';

const Skills=(props)=>{
  return(
    <>
     <section className="skill-area" id='scroll2'>
     <div><h2 className="text-center"> My Tech Stack</h2></div>
     <p className="text-center">These are the few Technologies , languages and frameworks that I work on a regular basis..</p>
       <div className="container">
        <div className="row">
        <div className="row">
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/html.png" alt="..."/>
              HTML</p>
            </div>
            </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/css.png" alt="..."/>
              CSS</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/bootstrap.png" alt="..."/>
              Bootstrap 4</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="assets/images/javascript.png" alt="..."/>
              Javascript</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/rreact.png" alt="..."/>
              React Js</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/material-ui.png" alt="..."/>
              Material-UI</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/node.png" alt="..."/>
              Node Js</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills">
              <p><img src="Assets/images/mongodb.png" alt="..."/>
              Mongodb</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="skills">
              <p><img src="Assets/images/c.png" alt="..."/>
              C </p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="skills">
              <p><img src="Assets/images/python.png" alt="..."/>
              Python</p>
            </div>
        </div>
        <div className="col-lg-4">
          <div className="skills">
            <p><img src="Assets/images/git.png" alt="..."/>
            Git</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="skills">
            <p><img src="Assets/images/github.png" alt="..." style={{color:'white'}}/>
            Github</p>
          </div>
        </div>
      </div>
      </div>
     </div>
    </section>
   </>
  )
}

export default Skills;