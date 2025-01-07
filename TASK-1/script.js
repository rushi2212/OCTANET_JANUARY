let menulist = document.querySelector(".menulist");
menulist.style.maxHeight = "0px";

function toggleMenu() {
  if (menulist.style.maxHeight === "0px") {
    menulist.style.maxHeight = "300px";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

document.querySelector(".fa-bars").addEventListener("click", toggleMenu);

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  distance:"20px",
  origin: "right",
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore-image img", {
  ...scrollRevealOption,
  distance:"20px",
  origin: "left",
});
ScrollReveal().reveal(".explore-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .explore-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef-image img", {
  ...scrollRevealOption,
  distance:"20px",
  origin: "right",
});
ScrollReveal().reveal(".chef-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef-list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});
