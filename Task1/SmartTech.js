const defaultMenu = document.getElementById("menu-container");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("close-container");
const introP1 = document.getElementById("intro-p1");
const introP2 = document.getElementById("intro-p2");
const introh3 = document.getElementById("intro-h3");


//Function to display the sidebar menu when the menu is clicked
const displaySidebar = () =>
{
    sidebar.removeAttribute('style');
}
//Function to hide the sidebar menu when the x icon is clicked
const hideSidebar = () =>
{
    sidebar.setAttribute('style', 'display:none');
}
//The following timeout functions executes a call back function that activates the desired animation after a certain duration
setTimeout(() => {
    introh3.removeAttribute('style');
}, 600);
setTimeout(() => {
    introP1.removeAttribute('style');
}, 1200);
setTimeout(() => {
    introP2.removeAttribute('style');
}, 1800);

//Function to select all elements with the .target class to switch animation appropriately
document.addEventListener('scroll', () =>
{
    document.querySelectorAll(".target").forEach((element) => 
    {
        switchAnimation(element);
    })
});
//Function to check if an element is in the view port
const isInViewport = (element) =>
{
    //Retrieve the position of the element relative to the viewport
    const rectangle = element.getBoundingClientRect();
    return(
        rectangle.top >= 0 &&
        rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rectangle.left >= 0 &&
        rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
//Funtion to turn animation on/off based on the element's visibility in the viewport
const switchAnimation = (element) =>
{
    if(isInViewport(element))
    {
        element.classList.add('active');
        element.removeAttribute('style');
    }
    else
    {
        element.classList.remove('active');
        element.setAttribute('style', 'display:none');
    } 
};

//Initial check to see if element is already in view
switchAnimation();


