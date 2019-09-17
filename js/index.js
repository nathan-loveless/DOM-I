const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navItems = document.querySelectorAll('a');
navItems.item(0).textContent = siteContent.nav["nav-item-1"];
navItems.item(1).textContent = siteContent.nav["nav-item-2"];
navItems.item(2).textContent = siteContent.nav["nav-item-3"];
navItems.item(3).textContent = siteContent.nav["nav-item-4"];
navItems.item(4).textContent = siteContent.nav["nav-item-5"];
navItems.item(5).textContent = siteContent.nav["nav-item-6"];

// Changing nav links to green
navItems.item(0).style.color = 'green';
navItems.item(1).style.color = 'green';
navItems.item(2).style.color = 'green';
navItems.item(3).style.color = 'green';
navItems.item(4).style.color = 'green';
navItems.item(5).style.color = 'green';

// prepend() and append();
let firstChild = document.createElement("a");
let lastChild  = document.createElement("a");

  firstChild.textContent = 'Pre-Home';
  lastChild.textContent = "Last-Link";
  firstChild.style.color = 'green';
  lastChild.style.color = 'green';

  firstChild.setAttribute("href", "#");
  lastChild.setAttribute("href", "#");

  let nav = document.querySelector(".container header nav");
  nav.prepend(firstChild);
  nav.append(lastChild);

  // We need to get the NodeList again to update with new items
  navItems = document.querySelectorAll('a');

  // Stretch Goal: Adding border boxes to nav items
navItems.forEach(element => 
  { 
    element.style.textDecoration = 'none';
    element.style.border = '1px solid black';
    element.style.padding = '5px 5px 5px 5px';

    element.onmouseover = function() 
    {
      element.style.backgroundColor = 'blue';
      element.style.color = 'white';
    }

    element.onmouseout = function()
    {
      element.style.backgroundColor = 'white';
      element.style.color = 'green';
    }
  });



document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

// Stretch Goal: Adding some shadowing to the content boxes
let contentBox = document.querySelectorAll(".text-content");

contentBox.forEach(element =>
  {
      element.style.border = '1px solid #f1f1f1';
      element.style.padding = '2px 2px 2px 2px';
      element.style.margin = '5px 5px 5px 5px';
      element.style.boxShadow = '2px 2px 5px 2px black';
  });

let allH4 = document.querySelectorAll(".text-content h4");
allH4.item(0).textContent = siteContent["main-content"]["features-h4"];
allH4.item(1).textContent = siteContent["main-content"]["about-h4"];
allH4.item(2).textContent = siteContent["main-content"]["services-h4"];
allH4.item(3).textContent = siteContent["main-content"]["product-h4"];
allH4.item(4).textContent = siteContent["main-content"]["vision-h4"];

//Stretch Goal: Adding background to h4 headers in each section
allH4.forEach(element => 
  {
    element.style.backgroundColor = 'lightgray';
    element.style.padding = '5px 5px 5px 5px';
  });

let allContent = document.querySelectorAll(".text-content p");
allContent.item(0).textContent = siteContent["main-content"]["features-content"];
allContent.item(1).textContent = siteContent["main-content"]["about-content"];
allContent.item(2).textContent = siteContent["main-content"]["services-content"];
allContent.item(3).textContent = siteContent["main-content"]["product-content"];
allContent.item(4).textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];
let contactPara = document.querySelectorAll(".contact p");
contactPara.item(0).textContent = siteContent.contact.address;
contactPara.item(1).textContent = siteContent.contact.phone;
contactPara.item(2).textContent = siteContent.contact.email;

// Stretch Goal: added coloring padding to footer
let footer = document.querySelector("footer");
footer.style.background = 'black';

let footerText = document.querySelector("footer p");
footerText.textContent = siteContent.footer.copyright;

// Stretch Goal: added coloring padding to footer
footerText.style.color = 'white';
footerText.style.padding = '5px 5px 5px 5px';



