/*Author: nguyencong-dev(https://github.com/nguyencong-dev)*/

"use strict";
const dynamicMenu = document.getElementById("dynamic-menu");
const sidebarMenu = document.getElementById("sidebar-menu");
const fixedBuyNowButton = document.getElementById("fixed-buy-now-button");
const fixedLanguageChangeButton = document.getElementById(
  "fixed-languages-change-section",
);

const pageLink = document.querySelectorAll(".page-link");
const handleActiveNavigation = () => {
  let fromTop = window.scrollY;

  pageLink.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 300 &&
      section.offsetTop + section.offsetHeight > fromTop + 300
    ) {
      //HIGHTLIGHT CURRENT LINK
      link.firstElementChild.classList.add("active");
      //TOGGLE FIXED DYNAMIC MENU AND FIXED SIDEBAR
      if (link.hash === "#hero-section") {
        dynamicMenu.classList.remove("hidden");
        sidebarMenu.classList.add("hidden");
        fixedBuyNowButton.classList.add("hidden");
        fixedLanguageChangeButton.classList.add("hidden");
      }
    } else {
      //REMOVE HIGHTLIGHT CURRENT LINK
      link.firstElementChild.classList.remove("active");
      if (link.hash === "#hero-section") {
        dynamicMenu.classList.add("hidden");
        sidebarMenu.classList.remove("hidden");
        fixedBuyNowButton.classList.remove("hidden");
        fixedLanguageChangeButton.classList.remove("hidden");
      }
    }
  });
};

//LISTEN ONCE WHEN PAGE IS FULLY LOADED
window.addEventListener("load", handleActiveNavigation);

//LISTEN WHEN SCROLL
window.addEventListener("scroll", handleActiveNavigation);

const swiper = new Swiper(".news-swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 9999999,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".news-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="news-swiper-pagination-item ${className}"></div>`;
    },
  },
});

//new video full screen modal

const newsVideoPlayIcon = document.getElementById('news-video-play-icon')
const fullScreenVideoModel = document.getElementById('play-video-full-screen-model')
const closeFullScreenVideoModal = document.getElementById('play-video-full-screen-model-close')
const newsVideo = document.getElementById('news-video-full-screen')

newsVideoPlayIcon.addEventListener("click", () => {
  fullScreenVideoModel.style.display = 'block'
  newsVideo.play()
})

closeFullScreenVideoModal.addEventListener("click", () => {
  fullScreenVideoModel.style.display = 'none'
  newsVideo.pause()
})


