// ==================
// Click The Bar
// ==================

const bar = document.querySelector(".fa-bars-staggered");
let links = document.querySelector(".ul");

bar.addEventListener("click", function () {
  links.classList.toggle("ul-class");
});
// =================
// Landing Anime && nav
// =================
const nav = document.getElementById("nav");
const leftItem = document.querySelector(".left-item");
const rightItem = document.querySelector(".rghit-item");
let servicesTitile = document.querySelector(".services-titile");
let clintTitile = document.querySelector(".clint-titile");
let pricingTitile = document.querySelector(".pricing-titile");
window.onload = widowOnload;
// ===============
// Window.Onscroll
// ===============
window.addEventListener("scroll", function () {
  if (window.scrollY > 120) {
    nav.classList.add("navScroll");
  } else {
    nav.classList.remove("navScroll");
  }
  // ===============
  // Services Title
  // ===============

  if (window.scrollY > 240) {
    servicesTitile.style.marginTop = `0`;
  } else {
    servicesTitile.style.marginTop = `-400px`;
  }

  // ===============
  // Services Title
  // ===============
  if (window.scrollY > 1631) {
    clintTitile.style.marginTop = `0`;
  } else {
    clintTitile.style.marginTop = `-400px`;
  }
  // ===============
  // Pricing Title
  // ===============
  if (window.scrollY > 2628) {
    pricingTitile.style.marginTop = `0`;
  } else {
    pricingTitile.style.marginTop = `-400px`;
  }
});
// ===============
// function window. onload
// ===============
function widowOnload() {
  nav.style.height = `100px`;
  leftItem.style.marginLeft = `0px`;
  rightItem.style.marginRight = `0px`;
}

// ===============
// boxes
// ===============

// ===============
// Content Left
// ===============
let tableTr = document.querySelectorAll(".table tr");
const nameClint = document.getElementById("name-clint");
const jobClint = document.getElementById("job-clint");
const photoClint = document.getElementById("img-clint");
const desClint = document.getElementById("des-clint");
const objClint = [
  {
    "data-atrribute": "clintOwn",
    des: "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    photo: "./assets/img/clintOwn.jpg",
    name: "David Martino",
    des2: "CEO of David Company",
  },
  {
    "data-atrribute": "clintTow",
    des: "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    photo: "./assets/img/clintTow.jpg",
    name: "Jake H. Nyo",
    des2: "CEO of David Company",
  },
  {
    "data-atrribute": "clintThree",
    des: "“Lorem ipsum dolor sit amet, consectetur  elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    photo: "./assets/img/clintThree.jpg",
    name: "May C.",
    des2: "Founder of Catherina Co.",
  },
  {
    "data-atrribute": "clintFour",
    des: "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte df ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    photo: "./assets/img/clintFour.jpg",
    name: "Random Staff",
    des2: "Manager, Digital Company",
  },
  {
    "data-atrribute": "clintFive",
    des: "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod  et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    photo: "./assets/img/clintFive.jpg",
    name: "Mark Am",
    des2: "CTO, Amber Do Company",
  },
];
function loopTable() {
  tableTr.forEach((el) => {
    el.addEventListener("click", () => {
      tableTr.forEach((elem) => {
        elem.classList.remove("active");
        el.classList.add("active");
      });
      // Change Content
      const attribute = el.getAttribute("data-atrribute");
      const clint = objClint.find((c) => c["data-atrribute"] === attribute);
      if (clint) {
        nameClint.innerHTML = clint.name;
        jobClint.innerHTML = clint.des2;
        desClint.innerHTML = clint.des;
        photoClint.src = clint.photo;
      }
    });
  });
}
loopTable();
// content script
