let sidebar;

document.addEventListener('DOMContentLoaded', () =>{
    setTimeout(() =>{
        sidebar = document.getElementById('sidebar');
        
    }, 1000)   
});

export const displaySidebar = () =>
{
    if(sidebar)
    {
        sidebar.removeAttribute('style');
    }
    
}
export const hideSidebar = () =>
{
    if(sidebar)
    {
        sidebar.setAttribute('style', 'display:none');
    }
  
}
const scroll = ScrollReveal({
    duration: 1500,
    delay: 0,
    distance: '100px',
    origin: 'top',
    easing: 'ease',
    reset: true, 
});
scroll.reveal(".about", {delay: 300})
scroll.reveal(".skills", {delay: 300})
scroll.reveal(".projects", {delay: 300})
scroll.reveal(".contact", {delay: 300})

