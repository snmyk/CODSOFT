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
        console.log('here')
    }
    
}
export const hideSidebar = () =>
{
    if(sidebar)
    {
        sidebar.setAttribute('style', 'display:none');
    }
  
}
