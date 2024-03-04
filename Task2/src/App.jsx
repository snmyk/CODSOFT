import './index.css'
import './Animation.css'
import { displaySidebar, hideSidebar } from '../Portfolio'




function App() {
  return (
    <>
      <>
        <header>
            <nav className='w-full h-14 top-0 flex justify-end items-center fixed z-10'>
              <ul className='default-menu w-full h-14 flex justify-end items-center'>
                <li><img className='h-14 p-1' src='public/images/logo.png'/><p className='inline text-white text-2xl'>Sphiwe Nyoni</p></li>
                <li><a href='home'>home</a></li>
                <li><a href='about'>About</a></li>
                <li><a href='skills'>Skills</a></li>
                <li><a href='projects'>Projects</a></li>
                <li><a href='contact'>Contact</a></li>
                <li id="menu-icon" onClick={displaySidebar}><img className='h-10 pr-2.5 pl-2.5' src='public/images/Icons/menu.svg'/></li>
              </ul>
              
              <ul id='sidebar' className='sidebar h-screen w-40 fixed flex justify-start items-start flex-col -top-0 -right-0 z-50' style ={{display:'none'}}>
                <li id="close-icon" onClick={hideSidebar}><img className='h-10 pr-2.5 pl-2.5' src='public/images/Icons/close.svg'/></li>
                <li><a href='home'>home</a></li>
                <li><a href='about'>About</a></li>
                <li><a href='skills'>Skills</a></li>
                <li><a href='projects'>Projects</a></li>
                <li><a href='contact'>Contact</a></li>
              </ul>
            </nav>
        </header> 
      </>
      <>
        <section className='h-screen relative mt-14 '>
          <div className=' mt-3.5 text-center text-7xl  w-full tracking-wide'>
            <h2 className='hello font-codyStar text-9xl text-center font-extrabold h-full' >HELLO</h2>
          </div>

          <div className='flex justify-center items-center  w-full tracking-wide'>
            <div className='intro-text'>
              <h3 className='text-white text-4xl pl-2.5'>I am a <span className='font-codyStar'>Software Engineer</span> with experience working with muliple tech stack.</h3>
              <p className='font-anta text-white text-3xl pt-5 pl-2.5'>Crafting code with the <span>precision</span> of a surgeon and the <span>creativity</span> of an artist, I turn ideas into elegant, <span>functional</span> realities, one line at a time.</p>
            </div>
            <div className='intro-cv'>
              <p className='font-roboto text-white text-3xl pl-2.5 text-center'>Get My Resume!</p>
              <div className='flex items-center justify-center'>
                <a target='blank' href='https://drive.google.com/file/d/191h8fDiL-wLJYV6clZoXAL7PkpVHkqlv/view?usp=drive_link'
                  className='border-2 text-white border-dashed h-8 m-2 w-32'>
                  Get .pdf
                </a>
                <a target='blank' href='https://docs.google.com/document/d/1DrJy960M3a06ynG8WX-rkV7x__Oci12P/edit?usp=drive_link&ouid=108224675991313654284&rtpof=true&sd=true'
                className='border-2 text-white border-dashed h-8 m-2 w-32'> 
                  Get .docx
                </a>
                
              </div>
            </div>
          </div>
          
          <div className='down-icon  cursor-pointer mt-2.5 h-28 flex justify-center items-center'>
            <a href='about' className='h-full'>
              <img className='down-icon-img h-full' src='public/Images/Icons/caret-down-fill.svg' alt='go down'/>
            </a>
            
          </div>
          
        </section>
      </>  
      <>
        <section className='h-screen'>
          <h3 className='about-me-header font-codyStar text-4xl  text-center text-red-500 tracking-widetracking-wide tracking-wide mb-20'>ABOUT ME</h3>
          <div className='about-info flex justify-center items-center mt-5'>
            <div>
              <img src='public/Images/Icons/sphiwe.png' alt='me'/>
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
        <section className='h-screen'>
          <h3 className='about-me-header font-codyStar text-4xl  text-center text-red-600 tracking-widetracking-wide tracking-wide mb-20'>My Skills</h3>
          <div className='skills-info flex justify-center items-center mt-5'>
            <div className='skills-list'>
              <p className='inline'>Java</p>
              <p className='inline'>Java Springboot</p>
              <p>Python</p>
              <p className='inline'>JavaScript</p>
              <p className='inline'>React</p>
              <p className='inline'>HTML</p>
              <p className='inline'>CSS</p>
              <p>Tailwind CSS</p>
              <p className='inline'>Git/Gitlab</p>
              <p className='inline'>MySQL</p>
              <p>Web development</p>
            </div>
            <div className='flex justify-center items-center'>
              <img src='public/Images/Icons/skills-image.png' alt='picture'/>
            </div>

          </div>
        </section>
      </> 
    </>   
  )
}

export default App
