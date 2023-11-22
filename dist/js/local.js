"use strict";

const hamburgerOpen = document.querySelector(".js-hamburger-open");
const hamburgerClose = document.querySelector(".navigation__hamburger-close");
const navigation = document.querySelector(".js-nav");
const blured = document.querySelector(".js-blur");

hamburgerOpen.addEventListener("click", () => {
  navigation.classList.add("active");
  blured.classList.add("blur-active");
  document.body.style.overflow = "hidden";
});

hamburgerClose.addEventListener("click", () => {
  navigation.classList.remove("active");
  blured.classList.remove("blur-active");
  document.body.style.overflow = "auto";
});

const localItems = document.querySelectorAll(".js-news-item");

localItems.forEach((item) => {
  const localBtn = item.querySelector(".js-news-btn");

  localBtn.addEventListener("click", () => {
    const localText = item.querySelector(".js-news-text");
    localText.classList.toggle("heigth-limiter");
    localText.classList.toggle("heigth-unlimited ");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".js-news-images");
  let isDragging = false;
  let startX,
    currentX,
    translateX = 0;

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
    const deltaX =
      event.type === "touchmove"
        ? event.touches[0].clientX - currentX
        : event.clientX - currentX;

    const totalWidth = swiperContainer.scrollWidth;
    const containerWidth = swiperContainer.clientWidth;

    if (translateX + deltaX > 0) {
      translateX = 0;
    } else if (translateX + deltaX < -(totalWidth - containerWidth)) {
      translateX = -(totalWidth - containerWidth);
    } else {
      translateX += deltaX;
    }

    swiperContainer.style.transform = `translateX(${translateX}px)`;

    currentX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
  }

  function handleDragEnd() {
    isDragging = false;
  }
});
