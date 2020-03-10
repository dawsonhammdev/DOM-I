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

const idSource = document.getElementById('cta-img');
idSource.setAttribute('src', 'img/header-img.png');

const idSourceMid = document.getElementById('middle-img');
idSourceMid.setAttribute('src', 'img/mid-page-accent.jpg');

let cta1 = document.querySelector('button');
cta1.textContent = siteContent["cta"]["button"];

let cta = document.querySelector('h1');
cta.textContent = siteContent["cta"]["h1"];

let mainContentTop = document.querySelectorAll('a');
mainContentTop[0].textContent = siteContent["nav"]["nav-item-1"];
mainContentTop[1].textContent = siteContent["nav"]["nav-item-2"];
mainContentTop[2].textContent = siteContent["nav"]["nav-item-3"];
mainContentTop[3].textContent = siteContent["nav"]["nav-item-4"];
mainContentTop[4].textContent = siteContent["nav"]["nav-item-5"];
mainContentTop[4].textContent = siteContent["nav"]["nav-item-6"];


let mainContent = document.querySelectorAll('h4');
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

let mainContent1 = document.querySelectorAll('p');
mainContent1[0].textContent = siteContent["main-content"]["features-content"];
mainContent1[1].textContent = siteContent["main-content"]["about-content"];
mainContent1[2].textContent = siteContent["main-content"]["services-content"];
mainContent1[3].textContent = siteContent["main-content"]["product-content"];
mainContent1[4].textContent = siteContent["main-content"]["vision-content"];

let contact1 = document.querySelector('.contact h4');
contact1.textContent = siteContent["contact"]["contact-h4"];

let contact2 = document.querySelectorAll('.contact p');
contact2[0].textContent = siteContent["contact"]["address"];
contact2[1].textContent = siteContent["contact"]["phone"];
contact2[2].textContent = siteContent["contact"]["email"];




let footer1 = document.querySelector('footer');
footer1.textContent = siteContent["footer"]["copyright"];





