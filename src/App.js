import profiles from './images/profiles-svg.svg'
import about from './images/abouts.svg'
import work from './images/intern-img.jpg'
import './App.css';

function App() {
  return (
    <>
    <body className="bg-image">
      <div className="d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-4">
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                <a className="nav-link active" href="#about">About</a>
                <a className="nav-link active" href="#portfolio">Portfolio</a>
                <a className="nav-link active" href="#internship">Internship</a>
                <a className="nav-link active" href="#profiles">Profiles</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <section id="home" className="home py-2">
          <div className="d-flex justify-content-center">
            <img src="./dp.jpg" className="dp-pic" alt="dp" />
          </div>
          <br/>
          <h1 className="text-center text-light fw-bold">
            Hi! I'm Jatin Srivastava
          </h1>
          <br />
          <h4 className="text-center text-light">
            I'm a Front end Developer and a Competitive Programmer
          </h4>
          <br />
          <br />
          <br />
        </section>
      </div>
      <section id="about" className="about bg-light">
        <img src={about} style={{float: "right", maxWidth: "100%", width: "450px", marginTop: "50px"}} alt="purple-img" />
        <div className="container-fluid">
          <h2 className="text-dark py-5 p-4 fw-bold">
            About Me
          </h2>
          <p className="text-dark fs-5 p-4 py-0" style={{marginTop: '-35px'}}>
            I am front end web developer from India, who also likes to do competitive programming and programming in Python.
          </p>
          <p className="text-dark fs-5 py-0 p-4">
            I also like to use GitHub, I use GitHub for Saving my code, Contributing to other open source projects, Hosting a Website and many more things. Also, I have <b style={{letterSpacing: '1px'}}>700+ Contributions </b>, <b style={{letterSpacing: '1px'}}>600+ Commits </b>, <b style={{letterSpacing: '1px'}}>15+ Repositories </b><b style={{letterSpacing: '1px'}}>31+ Pull Requests </b> on GitHub.
          </p>
          <br />
          <h2 className="text-dark fw-bold py-0 p-4">
            Languages
          </h2>
          <br />
          <p className="text-dark fs-5 py-0 p-4" style={{marginTop: '-5px'}}>
            I know languages like React JS, Java Script, HTML, CSS, Git & GitHub, Tailwind CSS, Python, Flask, and Bootstrap
          </p>
          <br />
          <br />
          <ul class="about-profiles-ul">
          <li><a href="https://codechef.com/users/strangercoders" className="text-dark"><i className="fa fa-cc text-dark"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jatin-srivastava05" className="text-dark"><i className="fa fa-linkedin text-dark"></i></a></li>
          <li><a href="https://github.com/jatincse" className="text-dark"><i className="fa fa-github text-dark"></i></a></li>
          <li><a href="mailto:jatinsrivastava13@gmail.com " className="text-dark"><i className="fa fa-envelope text-dark"></i></a></li>
          </ul>
          <br />
          <br />
        </div>
      </section>
      <section id="portfolio" className="portfolio bg-dark">
        <div className="container-fluid">
          <h2 className="fw-bold text-center text-light py-5">
            Things I Created / Projects
          </h2>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row row-1" style={{marginTop: '-30px'}}>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/jatincse/fitness-app" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                fitness-app
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Home Workouts provides daily workout routines for all your main muscle groups. In just a few minutes a day, you can build muscles .
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
              <a href="https://github.com/jatincse/to_do-application" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                To_do-application
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                Use a to-do list to capture every task and collaborate with teammates in one place.
                </h5>
              </div>
            </div>
            <div className="col-md-4 shadow-lg">
              <div className="container-item bg-light p-5 rounded">
                <a href="https://jatincse.github.io/e-Learning-Website-Project/" className="text-decoration-none">
                <h4 className="text-dark fw-bold">
                E-Learning-Website-Project
                </h4>
                </a>
                <h5 className="text-muted" style={{marginTop: '10px', lineHeight: '36px'}}>
                eLearning, or electronic learning, is the delivery of learning and training through digital resources. Although eLearning is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet.
                </h5>
              </div>
            </div>
          </div>
          
          <br />
          <br />
          </div>
      </section>
      <section id="internship" className="internship bg-light">
        <div className="container-fluid py-5">
          <img src={work} className="intern-img" alt="office" style={{marginTop: '-45px'}} />
          <h2 className="py-2 p-5 fw-bold">
            Internship
          </h2>
          <h5 className="py-2 p-5" style={{maxWidth: '100%', width: '700px', lineHeight: '34px'}}>
            Here is a list of all the Internships, I have done between the year 2021 - 2022
          </h5>
          <h3 className="py-2 p-5 fw-bold">
            LOADING....
          </h3>
          <h5 className="text-muted py-0 p-5" style={{maxWidth: '100%', width: '600px', lineHeight: '34px'}}>
          LOADING....
          </h5>
        </div>
      <br/>
      </section>
      <section id="profiles" className="profiles bg-dark">
        <div className="profiles-img-d">
          <img src={profiles} className="profiles-img" alt="profiles-img" />
        </div>
        <h2 class="text-light py-4 p-5 fw-bold" style={{position: 'relative', top: '10px'}}>
          Profiles
        </h2>
        <h5 className="text-muted py-0 p-5" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          Here are all my Open Source Profiles, i.e. GitHub, Linkedin, Competitive Programming Websites Profiles, like AtCoder, CodeChef, and many more.
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          CodeChef - strangercoders
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          CodeChef is a competitive programming website, CodeChef Holds 3 Programming Contest every moth, Long Challenge, Cook off, and Lunch Time
        </h5>
       
    
        <h3 class="text-light fw-bold py-3 p-5">
          GitHub - jatincse
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          Linkedin - Jatin Srivastava
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
          LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.
        </h5>
        <h3 class="text-light fw-bold py-3 p-5">
          Codeforces - Jatincd
        </h3>
        <h5 className="text-muted p-5 py-0" style={{marginTop: '-10px', maxWidth: '100%', width: '900px', lineHeight: '33px'}}>
        Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov.
        </h5>
        <br/>
      </section>
    </body>
    </>
  );
}

export default App;
