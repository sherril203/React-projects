import React from 'react'
import NavComponent from './NavComponent.jsx'
import ProjectCard from './ProjectCard.jsx'
import WorkExperience from './WorkExperience.jsx'
import FooterContent from './FooterContent.jsx'
import NavSidebar from './NavSideBar.jsx'
import Education from './Education.jsx'
const PortFolio = () => {
  return (
    <div className='text-center bg-teal-500'>
        <NavComponent/>
        <div className='p-8 text-center'>
             <h2 className=' font-bold text-2xl'>Profile Info</h2>
            <p className='p-3 text-3xl'>M Sherril James Kumar</p>
            <p className=' text-2xl'>MERN Stack Developer</p>
        </div>
        <div className='bg-purple-300 p-8'>
            <h2 className='text-center font-bold text-2xl'>Objective</h2>
             <p className='text-xl'>Aspiring to join a forward-thinking development team and contribute through strong front-end and back-end capabilities. 
             Experienced in building scalable, user-centric web applications using technologies like React, Node.js, and RESTful APIs. 
             Skilled in writing clean, maintainable code following modern development standards. Adept at debugging, optimizing performance, and integrating third-party services. 
             Passionate about solving real-world problems through efficient and innovative solutions. 
             Committed to supporting business growth through high-quality software development.</p>
        </div>
        <div className=" bg-lime-300 w-full min-screen flex flex-col items-center justify-center p-8 gap-6">
              <h2 className='text-center font-bold text-2xl'>Work Experience</h2>
        <div className= "w-full h-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <WorkExperience
         Role={"MERN Stack Developer Intern "}
         Company={"WHY Global Services"}
         Duration={"February 2025- Present"}
         description={"Developed responsive web interfaces using HTML, CSS, and Bootstrap; created interactive layouts using JavaScript and Figma for UI/UX design.Working for five months of hands-on training."}
         TechTools={"Tech Stack: Figma, HTML, CSS, JS, Bootstrap and MERN Stack"}
        />
        <WorkExperience
         Role={"Web Designer Intern "}
         Company={"Digit Info Solutions"}
         Duration={"July 2023- August 2023	"}
         description={"Built interactive website using WordPress, HTML, CSS, and JavaScript.Improved user navigation and mobile responsiveness"}
         TechTools={"Tech Stack: WordPress, HTML, CSS, and JS"}
        />
        <WorkExperience
         Role={"Full Stack Development"}
         Company={"Internezy (Virtual)"}
         Duration={"August 2022- September 2022"}
         description={"Develop your website development skills by learning HTML, CSS, JS, and other frameworks such as React JS."}
         TechTools={"Tech Stack: HTML, CSS, JS and React JS"}
        />
        </div>
        </div>
        <div className=" bg-fuchsia-300 w-full min-screen flex flex-col items-center justify-center p-8 gap-6">
              <h2 className='text-center font-bold text-2xl'>Projects</h2>
        <div className= "w-full h-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectCard
         title={"Diy Website"}
         description={"Built a craft and art supply e-commerce website using HTML, CSS, and Bootstrap with a fully responsive frontend interface.Developed core pages and styling for smooth browsing and user-friendly purchasing experience."}
         Role={"Role: Frontend Developer"}
         TechTools={"Tech Stack: HTML, CSS, Bootstrap"}
        />
        <ProjectCard
         title={"Cooking Website"}
         description={"Collaborated in a team to build a web application for cooking tutorials and grocery shopping.Contributed to both frontend UI (React JS) and backend development (Node.js, MongoDB).Implemented features to display cooking recipes, manage user inputs, and handle product listings for grocery purchases."}
         Role={"Role: Backend & Frontend."}
         TechTools={"Tech Stack: HTML, CSS, JavaScript, React JS, Node.js, MongoDB"}
        />
         <ProjectCard
         title={"Ticket Book Website "}
         description={"Designed a responsive ticket booking website in Figma, enhancing features for easier and smoother booking.Focused on intuitive navigation and a clean layout to improve overall user experience."}
         Role={"Role: UI/UX Designer"}
         TechTools={"Tech Stack: Figma"}
       />
        </div>
        </div>
        <div className=" bg-orange-300 w-full min-screen flex flex-col items-center justify-center p-8 gap-6">
             <h2 className='text-center font-bold text-2xl'>Skills</h2>
             <div className= "w-full h-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className='bg-cyan-50 px-2 p-5 rounded text-center'>
                  <p><b>Languages:</b>	Python, HTML, CSS, JavaScript, Bootstrap</p>
                </div>
                <div className='bg-cyan-50 px-2 p-5 rounded text-center'>
                  <p ><b>Frameworks:</b>	Pandas, NumPy, React, Nodejs, MongoDB</p>
                </div>
                <div className='bg-cyan-50 px-2 p-5 rounded text-center'><p > <b>Tools:</b>	Excel, PowerPoint, Figma, Git</p></div>
                <div className='bg-cyan-50 px-2 p-5 rounded text-center'><p ><b>Platforms:</b> Jupyter Notebook, Visual Studio Code</p></div>
                <div className='bg-cyan-50 px-2 p-5 rounded text-center'><p><b>Soft Skills:</b> Problem Solving, Decision Making</p></div>
             </div>
        </div>
        <div className=" bg-cyan-400 w-full min-screen flex flex-col items-center justify-center p-8 gap-6">
              <h2 className='text-center font-bold text-2xl'>Projects</h2>
        <div className= "w-full h-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Education
        place={"Jeppiaar Institute of Technology"}
        location={"Kunnam, Chennai"}
        degree={"B.Tech IT"}
        year={"2021-2025"}
        Marks={"CGPA:7.935"}/>
         <Education
        place={"Maria Rafols Matric Higher Secondary School"}
        location={"Puttoor,Kanyakumari"}
        degree={"12th"}
        year={"2019-2021"}
        Marks={"Percentage:82.9"}/>
        <Education
        place={"Joseph Matric Higher Secondary School"}
        location={"Sathankarai,Kanyakumari"}
        degree={"10th"}
        year={"2018-2019"}
        Marks={"Percentage:77.2"}/>
        </div>
        </div>
        <FooterContent/>
       
        
        
    </div>
    
  )
}

export default PortFolio