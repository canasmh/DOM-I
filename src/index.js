const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

let navLinks = Array.from(document.querySelectorAll("nav a"))

for (let i=0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`]
  navLinks[i].classList.add("italic")
}

let logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent.images["logo-img"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

let middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent.images["accent-img"];

let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector("div.cta-text button");
ctaButton.textContent = siteContent.cta.button;

let h4s = document.querySelectorAll("div.text-content h4");
h4s[0].textContent = siteContent["main-content"]["features-h4"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
h4s[2].textContent = siteContent["main-content"]["services-h4"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];

let pTags = document.querySelectorAll("div.text-content p");
pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]["product-content"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector("section.contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

let contactParagraphs = document.querySelectorAll("section.contact p");
contactParagraphs[0].textContent = siteContent.contact["address"];
contactParagraphs[1].textContent = siteContent.contact["phone"];
contactParagraphs[2].textContent = siteContent.contact["email"];

console.log(h4s);

console.log('project wired!')
