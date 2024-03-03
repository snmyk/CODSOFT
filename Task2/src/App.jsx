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
                <li><a href='about'>About</a></li>
                <li><a href='skills'>Skills</a></li>
                <li><a href='projects'>Projects</a></li>
                <li><a href='contact'>Contact</a></li>
                <li id="menu-icon" onClick={displaySidebar} style={{display: "none"}}><img className='h-10 pr-2.5 pl-2.5' src='public/images/Icons/menu.svg'/></li>
              </ul>
              
              <ul id='sidebar' className='sidebar h-screen w-40 fixed flex justify-start items-start flex-col top-0 -right-0' style ={{display:'none'}}>
                <li id="close-icon" onClick={hideSidebar}><img className='h-10 pr-2.5 pl-2.5' src='public/images/Icons/close.svg'/></li>
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
          <div className=' mt-3.5 text-center text-7xl  w-full'>
            <h2 className='hello font-codyStar text-9xl text-center font-extrabold h-full' >HELLO</h2>
          </div>
          <div className='flex justify-center items-center  w-full'>
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
          
        </section>
      </>     
    </>   
  )
}

export default App
