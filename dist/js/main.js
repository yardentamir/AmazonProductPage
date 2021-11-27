"use strict";

const carouselObj = [
  {
    id: 0,
    img: "/dist/img/gallery/81H30q-D1JL._AC_UL160_SR160,160_.jpg",
    dis: "The Noble Collection Hermione Granger's Illuminating Wand",
    stars: 9,
    votes: "3,306",
    price: "35.00",
  },
  {
    id: 1,
    img: "/dist/img/gallery/719GnQiA1JL._AC_UL160_SR160,160_.jpg",
    dis: "SUYPAS Push pop Bubble Sensory Fidget Toy for Kids and Adults, Fidget Toy Pack - Pop Sensory Anti-Anxiety Toys- Reliever,Squeeze…",
    stars: 9,
    votes: "104",
    price: "7.99",
  },
  {
    id: 2,
    img: "/dist/img/gallery/71rTFXomm0L._AC_UL160_SR160,160_.jpg",
    dis: "The Noble Collection Harry Potter Wand with Ollivanders Wand Box",
    stars: 9,
    votes: "7,215",
    price: "35.50",
  },
  {
    id: 3,
    img: "/dist/img/gallery/81ubRZzYI3L._AC_UL160_SR160,160_.jpg",
    dis: "WOW! Stuff Collection Harry Potter 14 Deluxe Lumos Light-Painting Wand, Multicolor",
    stars: 9,
    votes: "106",
    price: "39.99",
  },
  {
    id: 4,
    img: "/dist/img/gallery/61NvohIZsWL._AC_UL160_SR160,160_.jpg",
    dis: 'WOW! PODS Harry Potter 7" Lumos Light Painting Wand',
    stars: 9,
    votes: "1,031",
    price: "28.00",
  },
  {
    id: 5,
    img: "/dist/img/gallery/41US+19nxPL._AC_UL160_SR160,160_.jpg",
    dis: "Harry Potter Light Up Wands, Official Hogwarts Wizarding World Harry Potter Costume Accessory Wand with…",
    stars: 9,
    votes: "607",
    price: "14.99",
  },
  {
    id: 6,
    img: "/dist/img/gallery/61SqDHXOUTL._AC_UL160_SR160,160_.jpg",
    dis: " Harry Potter, Wizard Training Wand - 11 SPELLS To Cast Official Toy Wand with Lights & Sounds – Albus Dumbledore Wand &…",
    stars: 9,
    votes: "2,500",
    price: "29.99",
  },
  {
    id: 7,
    img: "/dist/img/gallery/51Z77pV+yzS._AC_UL160_SR160,160_.jpg",
    dis: " Magic Wands for Kids Wizard Witch Toy Magical Accessories Christmas Cosplay Witchcraft Collection for Adult",
    stars: 10,
    votes: "358",
    price: "14.99",
  },
  {
    id: 8,
    img: "/dist/img/gallery/41FxtynSkiS._AC_UL160_SR160,160_.jpg",
    dis: "The Elder Wand in Ollivander's Box",
    stars: 10,
    votes: "6,190",
    price: "39.00",
  },
  {
    id: 9,
    img: "/dist/img/gallery/61cWISkxk4L._AC_UL160_SR160,160_.jpg",
    dis: 'WOW! PODS Harry Potter’s Light Painting Wand – Award Winner, 14"" Wands (WW-1024)',
    stars: 9,
    votes: "1,113",
    price: "27.99",
  },
  {
    id: 10,
    img: "/dist/img/gallery/511SfjOzuML._AC_UL160_SR160,160_.jpg",
    dis: "The Harry Potter Remote Control Wand",
    stars: 9,
    votes: "2,675",
    price: "59.00",
  },
  {
    id: 11,
    img: "/dist/img/gallery/61stdtwHKKL._AC_UL160_SR160,160_.jpg",
    dis: "Cottage Garden Brown Woodgrain Pink Flower 13.75 inch Resin Collectible Witch Wizard Cosplay Magic Wand",
    stars: 9,
    votes: "860",
    price: "16.95",
  },
];

const nextFunc = () => {
  // const starsPos = { 0:}

  document.querySelector("#carouselOl").innerHTML = "";

  for (let i = 6; i < 12; i++) {
    const element = carouselObj[i];
    const htmlContent = `<li>
    <div id="carouselItem${element.id}">
    <img src="${element.img}" alt="">
    <p class="bottom-col-carousel-link">${element.dis}</p> 
    <div class="flex-center">
        <div class="center-col-stars-img"></div>
      <span class="grey-txt small-txt color-link-txt">${element.votes}</span>
    </div>
    <p class="price-dollar-txt-black">${element.price}</p>
    </div>
  </li>`;
    document.querySelector("#carouselOl").innerHTML += htmlContent;
  }
};

const pervFunc = () => {
  // const starsPos = { 0:}

  document.querySelector("#carouselOl").innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const element = carouselObj[i];
    const htmlContent = `<li>
    <div id="carouselItem${element.id}">
    <img src="${element.img}" alt="">
    <p class="bottom-col-carousel-link">${element.dis}</p> 
    <div class="flex-center">
        <div class="center-col-stars-img"></div>
      <span class="grey-txt small-txt color-link-txt">${element.votes}</span>
    </div>
    <p class="price-dollar-txt-black">${element.price}</p>
    </div>
  </li>`;
    document.querySelector("#carouselOl").innerHTML += htmlContent;
  }
};

//Event Listeners

const pervBtnCarousel = document.querySelector("#carouselLeftArrow");
pervBtnCarousel.addEventListener("click", pervFunc);

const nextBtnCarousel = document.querySelector("#carouselRightArrow");
nextBtnCarousel.addEventListener("click", nextFunc);

pervFunc();
