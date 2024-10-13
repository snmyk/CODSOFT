import './index.css'
import './Animation.css'
import './Reveal'
import { displaySidebar, hideSidebar } from './Portfolio'
import { projects } from './Projects'
import { ProjectDisplayCard } from './ProjectCard'
import React from 'react'





function App() 
{
  return (
    <>
      <>
        <header>
            <nav className='w-full h-14 top-0 flex justify-end items-center fixed z-10'>
              <ul className='default-menu w-full h-14 flex justify-end items-center'>
                <li><img className='h-14 p-1' src='/Images/logo.png' alt='sphiwe'/><p className='inline text-white text-2xl'>Sphiwe Nyoni</p></li>
                <li><a href='#home'>home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li id="menu-icon" onClick={displaySidebar}><img className='h-10 pr-2.5 pl-2.5' src='/Images/Icons/menu.svg' alt='menu'/></li>
              </ul>
              
              <ul id='sidebar' className='sidebar h-screen fixed flex justify-start items-start flex-col -top-0 -right-0 z-50' style ={{display:'none'}}>
                <li id="close-icon" onClick={hideSidebar}><img className='h-10 pr-2.5 pl-2.5' src='/Images/Icons/close.svg'/></li>
                <li><a href='#home'>home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
            </nav>
        </header> 
      </>
      <>
        <section id='home' className='home h-full w-full relative mt-14 '>
          <div className='mt-20 h-fit text-center text-7xl  w-full tracking-wide'>
            <h2 className='hello font-codyStar  text-9xl text-center font-extrabold h-fit' >HELLO</h2>
          </div>

          <div className='flex justify-center items-center  w-full tracking-wide'>
            <div className='intro-text'>
              <h3 className='text-white text-4xl pl-2.5'>I am a <span className='font-codyStar'>Software Engineer</span> with experience working with muliple tech stack.</h3>
              <p className='font-anta text-white text-3xl pt-5 pl-2.5'>Crafting code with the <span>precision</span> of a surgeon and the <span>creativity</span> of an artist, I turn ideas into elegant, <span>functional</span> realities, one line at a time.</p>
            </div>
            <div className='intro-cv'>
              <p className='font-roboto text-white text-3xl pl-2.5 text-center'>Get My Resume!</p>
              <div className='flex items-center justify-center'>
                <a target='blank' href='https://drive.google.com/file/d/1KIXCPJGZj5qX4sEw25v4iBegL4GwZSCj/view?usp=drive_link'
                  className=' text-white border-dashed h-8 m-2 w-32'>
                  Get .pdf
                </a>
                <a target='blank' href='https://docs.google.com/document/d/1YTuZhpSsBIY-cV_RQFi-_5xbbGI6eClm/edit?usp=sharing&ouid=108224675991313654284&rtpof=true&sd=true'
                className=' text-white border-dashed h-8 m-2 w-32'> 
                  Get .docx
                </a>
                
              </div>
            </div>
          </div>
          
          <div className='down-icon  cursor-pointer mt-2.5 h-28 flex justify-center items-center'>
            <a href='#about' className='h-full'>
              <img className='down-icon-img h-full' src='/Images/Icons/caret-down-fill.svg' alt='go down'/>
            </a>
            
          </div>
          
        </section>
      </>  
      <>
        <section id='about' className='about h-full'>
          <h3 className='about-me-header font-codyStar text-4xl  text-center text-gold tracking-widetracking-wide tracking-wide mb-20'>ABOUT ME</h3>
          <div className='about-info flex justify-center items-center flex-wrap mt-5'>
            <div>
              <img src='/Images/Icons/sphiwe.png' alt='me'/>
            </div>
            <div>
              <h3 className=' mb-8 px-2.5 text-3xl font-anta text-green-600'>Sphiwe Nyoni</h3>
              <p className='text-white mb-5 px-2.5 font-roboto tracking-wider'>
                A graduate from the University of Cape Town with a Bachelor's degree in Computer Science and Biochemistry.
                During my time at UCT I gained practical experience in various programming languages such as Java and Python.
                My coursework provided me with a theoretical understanding and practical skills in <span>developing</span> and debugging computer <span>software</span>.
                Furthermore my coursework provided me the understanding of <span>software design patterns</span> (including SOLID) and system architectures such as MVC and layered architecture.  
                I actively engaged in various personal and coursework projects, allowing me to apply my theoretical knowledge to solve practical problems.
              </p>
              <p className='text-white px-2.5 font-roboto tracking-wider'>   
                I am very <span>flexible</span> and <span>adaptable</span>, especially with my tech stack. I believe that being a software engineer it is crucial to adapt your tech stack as dictated by the project.
                Additionally, I value collaboration and <span>teamwork</span> which I also believe should be an attribute a software engineer should have.
              </p>
            </div>
          </div>
        </section>
      </>  
      <>
        <section id='skills' className='skills h-full w-full'>
          <h3 className='skills-header font-codyStar text-4xl  text-center text-gold tracking-widetracking-wide tracking-wide mb-20'>My Skills</h3>
          <div className='skills-info flex justify-center items-center mt-5'>
            <div className='skills-list'>
              <p className='inline'>Java</p>
              <p className='inline'>C#</p>
              <p className='inline-block'>Python</p><br/>
              <p className='inline'>Java Springboot</p>
              <p className='inline'>Python-django</p>
              <p className='inline'>Umbraco CMS</p>
              <p className='inline-block'>Radzen Blazor</p><br/>
              <p className='inline'>JavaScript</p>
              <p className='inline'>React</p>
              <p className='inline'>HTML</p>
              <p className='inline'>CSS</p>
              <p className='inline-block'>Tailwind CSS</p><br/>
              <p className='inline'>Git/Gitlab</p>
              <p className='inline'>MySQL</p>
              <p className='inline'>Web development</p>
              <p className='inline'>Azure</p>
            </div>
            <div className='flex justify-center items-center'>
              <img src='/Images/Icons/skills-image.png' alt='picture'/>
            </div>

          </div>
        </section>
      </>
      <>
        <section id='projects' className='projects h-full w-full'>
          <h3 className='projects-header font-codyStar text-4xl  text-center text-gold tracking-widetracking-wide tracking-wide mb-20'>My Projects</h3>
          <div className='flex justify-center items-center flex-wrap'>
            {
              projects.map((project)=>{
                return <ProjectDisplayCard project = {project}/>
              })
            }
          </div>
          
        </section>
      </> 
      <>
        <footer id='contact' className='contact h-screen'>
          <h3 className='contact-header font-codyStar text-4xl  text-center text-gold tracking-widetracking-wide tracking-wide mb-20'>reach out</h3>
          <div className='text-white leading-relaxed font-roboto text-2xl tracking-wider text-center flex flex-wrap p-2.5'>
            <p className='mb-10'>I am enthusiastic about launching my career at a company that prioritizes <span>growth</span> and <span>learning</span>.  
              I thrive in environments that value teamwork and collaboration, while also recognizing the importance of individual brilliance. 
            </p>
            <p className='mb-10'>
              I am currently seeking a <span>junior/part-time</span> opportunity where I can apply my skills and further enhance them through hands-on experience. 
              If your company is in need of a <span>software engineer/developer</span>, I would love to discuss how I can contribute to your team.
            </p>
          </div>
          <ul className='contact-list flex justify-center items-center flex-wrap w-fit mt-20 '>
            <li><a target='blank' href='https://wa.me/qr/DQZTXNFTMPUHK1'><img src='/Images/Icons/whatsapp.svg' alt='whatsapp'/></a></li>
            <li><a target='blank' href='https://www.linkedin.com/in/sphiwe-nyoni-075692168/'><img src='/Images/Icons/linkedin.svg' alt='linkedin'/></a></li>
            <li><a target='blank' href='https://www.instagram.com/sphiwe_nyoni/?igsh=dmoxc3J6djAzdXI0'><img src='/Images/Icons/instagram.svg' alt='instagram'/></a></li>
            <li><a target='blank' href='https://www.facebook.com/sphiwe.nyoni.73/'><img src='/Images/Icons/facebook.svg' alt='facebook'/></a></li>
            <li><a target='blank' href='https://github.com/snmyk'><img src='/Images/Icons/github.svg' alt='github'/></a></li>
            <li><a target='blank' href='mailto:michaelnyoni16@gmail.com'><img src='/Images/Icons/envelope-at.svg' alt='email'/></a></li>
          </ul>
          <p className='text-white flex items-center justify-center flex-wrap font-roboto mt-8'>082 615 6668 / 078 106 3809 / 067 268 0384</p>
          <div className='flex justify-center items-center flex-wrap mt-8'>
            <img className='inline mr-5 w-8' src='/Images/Icons/c-circle.svg' alt='copyright'/>
            <p className='text-white font-anta inline text-lg tracking-wider'>2024 Sphiwe Nyoni</p>
          </div>
          
        </footer>
      </>
    </>   
  )
}

export default App
