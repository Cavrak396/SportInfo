"use strict";

//Navigation menu
const hamburgerOpen = document.querySelector(".js-hamburger-open");
const hamburgerClose = document.querySelector(".navigation__hamburger-close");
const navigation = document.querySelector(".js-nav");
const blured = document.querySelector(".js-blur");
const removeMenu = () => {
  navigation.classList.remove("active");
  blured.classList.remove("blur-active");
  document.body.style.overflow = "visible";
};

hamburgerOpen.addEventListener("click", () => {
  navigation.classList.add("active");
  blured.classList.add("blur-active");
  document.body.style.overflow = "hidden";
});

hamburgerClose.addEventListener("click", () => {
  removeMenu();
});

//Scroll to section
const contactLink = document.querySelector(".js-contact");

contactLink.addEventListener("click", function (event) {
  event.preventDefault();
  removeMenu();

  document.body.style.overflow = "visible";

  const footerSection = document.querySelector(".js-footer");

  footerSection.scrollIntoView({
    behavior: "smooth",
  });
});

//Swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".js-swiper");
  let isDragging = false;
  let startX, currentX;

  swiperContainer.addEventListener("mousedown", handleDragStart);
  swiperContainer.addEventListener("mousemove", handleDragging);
  swiperContainer.addEventListener("mouseup", handleDragEnd);
  swiperContainer.addEventListener("mouseleave", handleDragEnd);

  swiperContainer.addEventListener("touchstart", handleDragStart, {
    passive: false,
  });
  swiperContainer.addEventListener("touchmove", handleDragging, {
    passive: false,
  });
  swiperContainer.addEventListener("touchend", handleDragEnd);

  function handleDragStart(event) {
    event.preventDefault();
    isDragging = true;
    startX =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    currentX = startX;
  }

  function handleDragging(event) {
    event.preventDefault();
    if (!isDragging) return;
    let deltaX =
      event.type === "touchmove"
        ? event.touches[0].clientX - currentX
        : event.clientX - currentX;

    swiperContainer.scrollLeft -= deltaX;

    currentX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
  }

  function handleDragEnd() {
    isDragging = false;
  }
});
