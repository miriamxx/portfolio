import React from 'react'
import profilePic from '../assets/images/profile_pic.JPG'
import educationImg from '../assets/images/education.png'
import resumeImg from '../assets/images/resume.png'
import styles from './HomePage.module.css'

export default function HomePage(){
  return (
    <div>
      <div className="wrapper" />
      <section id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h1 style={{color: 'white', fontSize: 50}}>ABOUT ME</h1>
            <img className="fit" src={profilePic} alt="profile" width={400} height={400} />
            <h4 style={{color: 'white', fontSize: 20}}>Hi! I am currently a Cybersecurity Data Scientist. I have a passion for building scalable web applications, cloud, data, and art. Connect with me on LinkedIn for any inquiries.</h4>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <img src={educationImg} alt="education" width={60} height={60} />
          </div>
          <div className="col-sm-8">
            <h2><span style={{color: '#8470FF'}}>Education</span></h2>
            <p><strong>Eastern Connecticut State University (2018- 2021)</strong></p>
            <p>BS in Computer Science, mathematics minor. Honors: Cum Laude</p>
          </div>
        </div>
      </section>

      <section id="services" className="container-fluid text-center">
        <h2>PROGRAMMING LANGUAGES AND FRAMEWORKS</h2>
        <div className="row slideanim">
          <div className="col-sm-4">
            <h4>Angular</h4>
          </div>
          <div className="col-sm-4">
            <h4>R</h4>
          </div>
          <div className="col-sm-4">
            <h4>HTML</h4>
          </div>
        </div>
      </section>

      <section id="portfolio" className="container-fluid text-center bg-grey">
        <h2>RESUME</h2>
        <img src={resumeImg} alt="resume" width={50} height={50} />
        <br />
        <button className={`btn btn-lg ${styles.resumeButton}`} onClick={() => window.open('/client/src/assets/resume/Official Resume .pdf', '_blank')}>View</button>
      </section>

      <section id="contact" className="container-fluid bg-grey">
        <h2 className="text-center">CONTACT</h2>
        <div className="row">
          <div className="col-sm-5">
            <p>Feel free to connect with me via LinkedIn</p>
            <p><span className="glyphicon glyphicon-map-marker" /> Atlanta, GA</p>
            <p><span className="glyphicon glyphicon-phone" /> <a href="http://linkedin.com/in/miriam-espino-cambron">LinkedIn</a></p>
            <p><span className="glyphicon glyphicon-globe" /> <a href="http://github.com/miriamxx">GitHub</a></p>
          </div>
        </div>
      </section>

      <footer className="container-fluid text-center">
        <a href="#myPage" title="To Top">
          <span className="glyphicon glyphicon-chevron-up" />
        </a>
        <p>2024 Miriam Espino | Bootstrap theme by W3schools, images and icons by Unsplash and Logomakr. Artwork created by me.</p>
      </footer>
    </div>
  )
}
