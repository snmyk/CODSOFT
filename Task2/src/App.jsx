import './index.css'
import { displaySidebar, hideSidebar } from '../Portfolio'




function App() {
  return (
    <>
      <>
        <header>
            <nav className='w-full h-14 top-0 flex justify-end items-center fixed z-10'>
              <ul className='default-menu w-full h-14 flex justify-end items-center'>
                <li><img className='h-14 p-1 rounded-lg' src='public/images/logo.png'/><p className='inline text-white text-2xl'>Sphiwe Nyoni</p></li>
                <li><a href='about'>About</a></li>
                <li><a href='skills'>Skills</a></li>
                <li><a href='projects'>Projects</a></li>
                <li><a href='contact'>Contact</a></li>
                <li id="menu-icon" onClick={displaySidebar}><img className='h-10 pr-2.5 pl-2.5' src='public/images/Icons/menu.svg'/></li>
              </ul>
              
              <ul id='sidebar' className='sidebar h-screen w-40 fixed flex justify-start items-start flex-col top-0 -right-0 z-50' style ={{display:'none'}}>
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
          <div className='absolute mt-3.5 text-center text-7xl  w-full'>
            <h2 className='hello relative font-codyStar text-9xl text-center font-extrabold' >HELLO</h2>
          </div>
          <div className='flex justify-center items-center h-screen w-full'>
            <div className='intro-text'>
              <h3 className='text-white text-4xl pl-2.5'>I am a <span className='font-codyStar'>Software Engineer</span> with experience working with muliple tech stack.</h3>
              <p className='font-anta text-white text-3xl pt-5 pl-2.5'>Crafting code with the <span>precision</span> of a surgeon and the <span>creativity</span> of an artist, I turn ideas into elegant, <span>functional</span> realities, one line at a time.</p>
            </div>
            <div className='intro-img'>
              <img src='public/Images/Icons/blackflower.jpg' alt='image' className='w-full h-full'/>
            </div>
          
          </div>
          
        </section>
      </>     
    </>   
  )
}

export default App
