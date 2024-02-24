const defaultMenu = document.getElementById("menu-container");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("close-container");
const introP1 = document.getElementById("intro-p1");
const introP2 = document.getElementById("intro-p2");
const introh3 = document.getElementById("intro-h3");

const displaySidebar = () =>
{
    sidebar.removeAttribute('style');
}
const hideSidebar = () =>
{
    sidebar.setAttribute('style', 'display:none');
}
setTimeout(() => {
    introh3.removeAttribute('style');
}, 600);
setTimeout(() => {
    introP1.removeAttribute('style');
}, 1200);
setTimeout(() => {
    introP2.removeAttribute('style');
}, 1800);