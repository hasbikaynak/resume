import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { VscMail, VscMegaphone } from 'react-icons/vsc';

const About = () => {
  const style3 = { fontSize: "40px", color:"black" };
  return (
    <div className="container-fluid p-0">
     
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0 " style={{ textShadow:" 0px 11px 10px rgba(81,67,21,0.8)"}}>Mehmet Hasbi
                <span className="text-primary" > Kaynak</span>
              </h1>
              <div className="subheading mb-5 mt-2"><FiMapPin className="mr-3"/> Warsaw · POLAND ·
                <a href="tel:+48 795 719 182"><i class="fa fa-phone mr-3 ml-3"></i>+48 795 719 182</a>
               <a href="mailto:kaynakhasbi1@gmail.com"> <i class="fa fa-envelope mr-3 ml-3"></i>kaynakhasbi1@gmail.com</a>
              </div>
              <div className="subheading mb-5" style={style3}>
              <TypeAnimation
            sequence={[
              "I'm a Full-stack JAVA Developer.",
              1000,
              "I'm a Back-end Developer.",
              1000,
              "I'm Front-end Developer.",
              1000,
              () => {
                console.log("Done typing!");
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            speed={10}
          />
          </div>
              <p className="mb-5">I developed myself by combining my education life that I started in the field of Software Development, which has been my passion since childhood. In addition to this, I had the opportunity to develop myself practically with the internships I have done throughout my education life. Later on, I gained a lot of experience in many companies and now I continue my career in the field of software, which is my passion.</p>
              
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/mehmethasbikaynak/" target="_blank" rel="noreferrer" >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa-stack-1x fa-inverse mt-1"><BsLinkedin/></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/hasbikaynak" target="_blank" rel="noreferrer">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa-stack-1x fa-inverse mt-1"><BsGithub/></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
    </div>
  )
}

export default About