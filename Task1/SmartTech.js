import { products, currency } from "./Products.js";
import { testimonials } from "./Testimonials.js";

const defaultMenu = document.getElementById("menu-container");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("close-container");
const introP1 = document.getElementById("intro-p1");
const introP2 = document.getElementById("intro-p2");
const introh3 = document.getElementById("intro-h3");
const introh1 = document.getElementById("intro-h1");


//Function to display the sidebar menu when the menu is clicked
export const displaySidebar = () =>
{
    sidebar.removeAttribute('style');
};

//Function to hide the sidebar menu when the x icon is clicked
export const hideSidebar = () =>
{
    sidebar.setAttribute('style', 'display:none');
};
//Make the displaySidebar and hideSidebar function globally accessible
defaultMenu.addEventListener("click", displaySidebar);
sidebarIcon.addEventListener("click", hideSidebar);

//The following timeout functions executes a call back function that activates the desired animation after a certain duration
setTimeout(() => {
    introh1.removeAttribute('style');
}, 0);
setTimeout(() => {
    introh3.removeAttribute('style');
}, 600);
setTimeout(() => {
    introP1.removeAttribute('style');
}, 1200);
setTimeout(() => {
    introP2.removeAttribute('style');
}, 1800);

try
{
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
}
catch(e){console.error(e);}


let productData = '';

products.forEach((product) => 
{
    productData += `
        
    <section class="product-section">
        <div class="product-image-container">
            <img class="product-image" src ="${product.imageUrl}" alt="N/A">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
        <div class = "product-description">
            ${product.description}
        </div>
        <div class = "product-price">
            <p>$</p>
            <p class="price">${currency(product.price)}</p>

        </div>
    </section>
    `
});

document.querySelector('.product-grid').innerHTML = productData;
document.querySelectorAll('.price').forEach((p) =>
{
    let text = p.textContent;
    p.setAttribute('text-data', text.slice(0, -2));
    p.innerHTML = text.slice(0, -2) + '<span>' + text.slice(-2) + '</span>';
});

let testimonyData = '';
testimonials.forEach((testimony) =>{
    testimonyData += `
        <div class = "card">
            <img id="quotes" src = "images/Icons/quote.svg" alt = "">
            <div class = "testimonial">
                ${testimony.testimony}
            </div>
            <div class = "details-container">
                <div>
                    <img src = ${testimony.imageUrl} alt = "Avatar">
                </div>
                <div class="name-occupation">
                    <h3>${testimony.name}</h3>
                    <p>${testimony.occupation}</p>
                </div>
                
                
            </div>
        
        </div>
    ` 
})

document.querySelector(".testimonies-section").innerHTML = testimonyData;


