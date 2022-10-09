import React from 'react'

const Skill = () => {
  return (
    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline list-icons ">
                <li className="list-inline-item ">
                  <i className="devicon-html5-plain colored"></i>
                </li>
                <li className="list-inline-item ml-4">
                  <i className="devicon-css3-plain colored"></i>
                </li>
                <li className="list-inline-item ml-4">                  
                <i className="devicon-bootstrap-plain colored"></i>
                </li>
                <li className="list-inline-item ml-4">   
                  <i className="devicon-javascript-plain colored"></i>
                </li>
                <li className="list-inline-item ml-4">
                  <i className="devicon-react-original colored" />
                </li>
                <li className="list-inline-item ml-4">
                  <i className="devicon-java-plain colored" />
                </li>
                <li className="list-inline-item ml-4">
                  <i className="devicon-postgresql-plain colored" />
                </li>
                <li className="list-inline-item ml-4">
                  <i className="devicon-spring-plain colored" />
                </li>
              </ul>
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check" />
                  Back-end development</li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Database &amp; Debugging</li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Front-end development</li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Agile Development &amp; Scrum</li>
              </ul>
            </div>
          </section>
    </div>
  )
}

export default Skill