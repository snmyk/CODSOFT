let sidebar;
//Get id of sidebar once DOM has loaded
document.addEventListener('DOMContentLoaded', () =>{
    setTimeout(() =>{
        sidebar = document.getElementById('sidebar');
        
    }, 1000)   
});
//Display sidebar when menu is clicked
export const displaySidebar = () =>
{
    if(sidebar)
    {
        sidebar.removeAttribute('style');
    }
    
}
//Hide the sidebar when the close menu icon is clicked
export const hideSidebar = () =>
{
    if(sidebar)
    {
        sidebar.setAttribute('style', 'display:none');
    }
  
}


