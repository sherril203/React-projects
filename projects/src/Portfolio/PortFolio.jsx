import React from 'react'
import NavComponent from './NavComponent.jsx'
import ProjectCard from './ProjectCard.jsx'
import WorkExperience from './WorkExperience.jsx'
import FooterContent from './FooterContent.jsx'
import NavSidebar from './NavSideBar.jsx'
import Education from './Education.jsx'

const PortFolio = () => {
  return (
    <div className="text-center bg-gray-50">
      <NavComponent />

      {/* Profile Info */}
      <div className="p-12 text-center bg-white shadow-sm">
        <h2 className="font-bold text-2xl text-blue-700">Profile Info</h2>
        <p className="p-3 text-3xl font-semibold">M Sherril James Kumar</p>
        <p className="text-2xl text-gray-600">MERN Stack Developer</p>
      </div>

      {/* Objective */}
      <div className="bg-gray-100 p-12">
        <h2 className="text-center font-bold text-2xl text-blue-700">Objective</h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-5xl mx-auto">
          Aspiring to join a forward-thinking development team and contribute through strong front-end and back-end capabilities.
          Experienced in building scalable, user-centric web applications using technologies like React, Node.js, and RESTful APIs.
          Skilled in writing clean, maintainable code following modern development standards.
          Adept at debugging, optimizing performance, and integrating third-party services.
          Passionate about solving real-world problems through efficient and innovative solutions.
          Committed to supporting business growth through high-quality software development.
        </p>
      </div>

      {/* Work Experience */}
      <div className="bg-white w-full min-screen flex flex-col items-center justify-center p-12 gap-6">
        <h2 className="text-center font-bold text-2xl text-blue-700">Work Experience</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <WorkExperience
            Role={"MERN Stack Developer Intern"}
            Company={"WHY Global Services"}
            Duration={"February 2025 - Present"}
            description={"Developed responsive web interfaces using HTML, CSS, and Bootstrap..."}
            TechTools={"Tech Stack: Figma, HTML, CSS, JS, Bootstrap, MERN Stack"}
          />
          <WorkExperience
            Role={"Web Designer Intern"}
            Company={"Digit Info Solutions"}
            Duration={"July 2023 - August 2023"}
            description={"Built interactive website using WordPress, HTML, CSS, and JavaScript."}
            TechTools={"Tech Stack: WordPress, HTML, CSS, JS"}
          />
          <WorkExperience
            Role={"Full Stack Development"}
            Company={"Internezy (Virtual)"}
            Duration={"August 2022 - September 2022"}
            description={"Developed skills in HTML, CSS, JS, and frameworks like React JS."}
            TechTools={"Tech Stack: HTML, CSS, JS, React JS"}
          />
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-100 w-full min-screen flex flex-col items-center justify-center p-12 gap-6">
        <h2 className="text-center font-bold text-2xl text-blue-700">Projects</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title={"ArtsWorld"}
            description={"Built an e-commerce website using MERN Stack and TailwindCSS..."}
            Role={"Role: Frontend and Backend"}
            TechTools={"Tech Stack: MERN Stack, TailwindCSS"}
          />
          <ProjectCard
            title={"Spawell"}
            description={"Collaborated in a team to build a Spa web application."}
            Role={"Role: Backend & Frontend"}
            TechTools={"Tech Stack: MERN Stack, TailwindCSS"}
          />
          <ProjectCard
            title={"Food Hub"}
            description={"Built a web app for cooking tutorials and grocery shopping."}
            Role={"Role: Backend & Frontend"}
            TechTools={"Tech Stack: HTML, CSS, React JS, Node.js, MongoDB"}
          />
          <ProjectCard
            title={"Trip My Day"}
            description={"Designed a ticket booking website in Figma with smooth UI/UX."}
            Role={"Role: UI/UX Designer"}
            TechTools={"Tech Stack: Figma"}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white w-full min-screen flex flex-col items-center justify-center p-12 gap-6">
        <h2 className="text-center font-bold text-2xl text-blue-700">Skills</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-5 rounded shadow-sm text-center">
            <p><b>Languages:</b> Python (Basic), HTML, CSS, JavaScript, Bootstrap, Java (Basic)</p>
          </div>
          <div className="bg-gray-50 p-5 rounded shadow-sm text-center">
            <p><b>Frameworks:</b> Pandas (Basic), NumPy (Basic), MERN</p>
          </div>
          <div className="bg-gray-50 p-5 rounded shadow-sm text-center">
            <p><b>Tools:</b> Excel, PowerPoint, Figma, Git</p>
          </div>
          <div className="bg-gray-50 p-5 rounded shadow-sm text-center">
            <p><b>Platforms:</b> Jupyter Notebook, Visual Studio Code, Postman</p>
          </div>
          <div className="bg-gray-50 p-5 rounded shadow-sm text-center">
            <p><b>Soft Skills:</b> Problem Solving, Decision Making, Quick Learner</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-gray-100 w-full min-screen flex flex-col items-center justify-center p-12 gap-6">
        <h2 className="text-center font-bold text-2xl text-blue-700">Education</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <Education
            place={"Jeppiaar Institute of Technology"}
            location={"Kunnam, Chennai"}
            degree={"B.Tech IT"}
            year={"2021 - 2025"}
            Marks={"CGPA: 7.935"}
          />
          <Education
            place={"Maria Rafols Matric Higher Secondary School"}
            location={"Puttoor, Kanyakumari"}
            degree={"12th"}
            year={"2019 - 2021"}
            Marks={"Percentage: 82.9"}
          />
          <Education
            place={"Joseph's Matric Higher Secondary School"}
            location={"Sasthankarai, Kanyakumari"}
            degree={"10th"}
            year={"2018 - 2019"}
            Marks={"Percentage: 77.2"}
          />
        </div>
      </div>

      <FooterContent />
    </div>
  )
}

export default PortFolio
