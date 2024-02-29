import { products, currency } from "./Products.js";
import { testimonials } from "./Testimonials.js";

const defaultMenu = document.getElementById("menu-container");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("close-container");
const introP1 = document.getElementById("intro-p1");
const introP2 = document.getElementById("intro-p2");
const introh3 = document.getElementById("intro-h3");
const introh1 = document.getElementById("intro-h1");
const testimoniesSection = document.querySelector(".testimonies-section");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");




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

//Apply html to all the products
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
//Display all the products
document.querySelector('.product-grid').innerHTML = productData;
//Add styling to the cents
document.querySelectorAll('.price').forEach((p) =>
{
    let text = p.textContent;
    p.setAttribute('text-data', text.slice(0, -2));
    p.innerHTML = text.slice(0, -2) + '<span>' + text.slice(-2) + '</span>';
});

//Add html to all the testimonies
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
//Display all the testimonies
document.querySelector(".testimonies-section").innerHTML = testimonyData;

let index = 0, start = 0;
let isPaused = false;
let cards = document.querySelectorAll(".card");
let cardArray = Array.from(cards);

//Shows the testimonials in the viewport
const showTestimonials = () =>
{
    const testimonialWidth = testimoniesSection.offsetWidth;
    testimoniesSection.style.setProperty('--index', index);
    testimoniesSection.style.setProperty('--testimonialWidth', testimonialWidth);
    
}
//Scrolls to the next testimonial
const nextTestimonial = () =>
{
    if(!isPaused)
    {   
        index++;
        console.log(index);
        if(index>=cards.length)
        {
            index=0;
        }
        cardArray.push(cardArray[start]);
        start++;
        document.querySelector(".testimonies-section").appendChild(cardArray[cardArray.length-1]);
        testimoniesSection.removeAttribute('style', 'animation-play-state: paused');
        showTestimonials();
    }
    
}


//This will pause the automatic scroll of the testimonials when a user hovers over a testimonial
cards.forEach((card) =>{
    card.addEventListener('mouseenter', () =>{
        isPaused=true;
        testimoniesSection.setAttribute('style', 'animation-play-state: paused');
    })
});


//Resume the automatic scroll once the user stop hovering over a testimonial
cards.forEach((card) =>{
    card.addEventListener('mouseleave', () =>{
        isPaused=false;
        testimoniesSection.removeAttribute('style', 'animation-play-state: paused')
    })
});
//Automatically scroll to the next testimonial after 5 seconds
setInterval(() =>{nextTestimonial();}, 5000);
//Initialize the testimonials
showTestimonials();

/*  The following pieces of code will make the document 
    scroll down to a particular section when the respective 
    <a> tag is clicked
*/
let desiredSection;
document.querySelector('a[href = "#home"]').addEventListener("click", (event) =>{
    event.preventDefault(); //Prevent the link from opening a different page
    desiredSection = document.getElementById('home');
    desiredSection.scrollIntoView({behavior:"smooth"}); //Scroll into the respective section
}) 
document.querySelector('a[href = "#about"]').addEventListener("click", (event) =>{
    event.preventDefault(); //Prevent the link from opening a different page
    desiredSection = document.getElementById('about');
    desiredSection.scrollIntoView({behavior:"smooth"}); //Scroll into the respective section
})
document.querySelector('a[href = "#products"]').addEventListener("click", (event) =>{
    event.preventDefault(); //Prevent the link from opening a different page
    desiredSection = document.getElementById('products');
    desiredSection.scrollIntoView({behavior:"smooth"}); //Scroll into the respective section
})
document.querySelector('a[href = "#testimonials"]').addEventListener("click", (event) =>{
    event.preventDefault(); //Prevent the link from opening a different page
    desiredSection = document.getElementById('testimonials');
    desiredSection.scrollIntoView({behavior:"smooth"}); //Scroll into the respective section
})
document.querySelector('a[href = "#contact"]').addEventListener("click", (event) =>{
    event.preventDefault(); //Prevent the link from opening a different page
    desiredSection = document.getElementById('contact');
    desiredSection.scrollIntoView({behavior:"smooth"}); //Scroll into the respective section
})




