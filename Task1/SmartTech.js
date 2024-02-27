
 const currency = (cents) =>
{
    return (cents/100).toFixed(2);
}

 const products = 
[
    
    {
        imageUrl: 'images/VRG3D.jpg',
        name: '3D Virtual Reality Headset',
        description: 'Experience virtual reality on the go with our smartphone compatible 3D virtual reality headset for movies and gaming.'+
                    ' Immerse yourself in beautiful virtual worlds with it\'s HD display, intuitive controls, and ergonomic design. ',
        price: 37900,
        
    },
    {
        imageUrl: 'images/black-blueVR.jpeg',
        name: 'VR Shinecon 6.0 Headset Virtual Reality Glasses',
        description: 'Amazing revolutionary tech which turns your smartphoen into a virtual reality viewer.'+
                    ' Watch 3D movies from the comfort of your home, providing you with a personal cinema.',
        price: 26756,
        
    },
    {
        imageUrl: 'images/GamingRouter.jpeg',
        name: 'ROG Rapture GT-AXE16000 - ASUS',
        description: "Get yourself this amazing ASUS Dual Band 16000 Mbps router perfect for gaming.",
        price: 104115,
        
    },
    {
        imageUrl: 'images/futuristicRouter.jpeg',
        name: 'ASUS - RT-AX82U AX5400 Dual Band WiFi 6 Router',
        description: "Enjoy WiFi gaming connection with this futuristic router which offers ultra fast speeds upto 5400 Mbps.",
        price: 19999,
        
    },
    {
        imageUrl: 'images/whiteRouter.jpeg',
        name: 'Reyee Dual Banf AC 1200 Mbps Fast Ethernet Mesh Router',
        description: "Get yourself this fast ethernet router featuring WiFi 5 with speeds upto 1167 Mbps."+
        ' It can be usedd as a stand alone router or access point but can also be used in a mesh topology via ethernet or wirless with other Reyee wireless devices.',
        price: 2913,
        
    },
    {
        imageUrl: 'images/LGTV.jpeg',
        name: 'LG LED TV 34 Inch',
        description: "This beautiful smart TV offer fast bluetooth connection and internet connection.",
        price: 20599,
        
    },
    {
        imageUrl: 'images/samsungTV.jpeg',
        name: 'Samsung 65 Inch UHD Smart 4K TV',
        description: "Discover the power of smart 4k with this Samsung smart 4K TV which offers high resolution display and impeccable contrast that creates a more lifelike picture",
        price: 20065,
        
    },
    {
        imageUrl: 'images/redHeadphones.jpeg',
        name: 'RED G9000 Pro Headphones Gaming',
        description: "Professional headset with 50mm drivers for gaming, a crystal clear mic that works perfectly in noisy environment and soft memory foam ear cushions providing lightweight comfort",
        price: 2567,
    },
    {
        imageUrl: 'images/gamingHeadphones.jpeg',
        name: 'ONIKUMA K8 Headphones Gaming',
        description: "This gaming headphones sound quality is very accurate."+ 
                    "The powerful sound drivers are very spacious and can give you a nice punch that will make you feel like you are within the game itself.",
        price: 2367,
    }
]; 

const defaultMenu = document.getElementById("menu-container");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("close-container");
const introP1 = document.getElementById("intro-p1");
const introP2 = document.getElementById("intro-p2");
const introh3 = document.getElementById("intro-h3");
const introh1 = document.getElementById("intro-h1");
const productGrid = document.getElementById("product-grid-js");


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
            <p>${currency(product.price)}</p>

        </div>
    </section>
    `
});

document.querySelector('.product-grid').innerHTML = productData;


