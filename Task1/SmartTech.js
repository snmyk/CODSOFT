const defaultMenu = document.getElementById("menu-container");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("close-container");

const displaySidebar = () =>
{
    sidebar.removeAttribute('style');
}
const hideSidebar = () =>
{
    sidebar.setAttribute('style', 'display:none');
}