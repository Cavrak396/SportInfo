"use strict";

//Code for hamburger menu
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

const contactLink = document.querySelector(".js-contact");

contactLink.addEventListener("click", (event) => {
  event.preventDefault();
  removeMenu();

  const footerSection = document.querySelector(".js-footer");

  footerSection.scrollIntoView({
    behavior: "smooth",
  });
});

//Code for Btn text / View more
const localItems = document.querySelectorAll(".js-news-item");

localItems.forEach((item) => {
  const localBtn = item.querySelector(".js-news-btn");
  const localText = item.querySelector(".js-news-text");

  localBtn.addEventListener("click", () => {
    if (localText.classList.contains("height-limiter")) {
      localBtn.textContent = "Vidi manje";
    } else {
      localBtn.textContent = "Vidi više";
    }
    localText.classList.toggle("height-limiter");
    localText.classList.toggle("height-unlimited ");
  });
});

//Code for swiper - images preview
document.addEventListener("DOMContentLoaded", function () {
  const newsImagesElements = document.querySelectorAll(".js-news-images");

  newsImagesElements.forEach(function (element) {
    let isDragging = false;
    let startX,
      currentX,
      translateX = 0;

    element.addEventListener("mousedown", handleDragStart);
    element.addEventListener("mousemove", handleDragging);
    element.addEventListener("mouseup", handleDragEnd);
    element.addEventListener("mouseleave", handleDragEnd);

    element.addEventListener("touchstart", handleDragStart, {
      passive: false,
    });
    element.addEventListener("touchmove", handleDragging, {
      passive: false,
    });
    element.addEventListener("touchend", handleDragEnd);

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

      const totalWidth = element.scrollWidth;
      const containerWidth = element.clientWidth;

      if (translateX + deltaX > 0) {
        translateX = 0;
      } else if (translateX + deltaX < -(totalWidth - containerWidth)) {
        translateX = -(totalWidth - containerWidth);
      } else {
        translateX += deltaX;
      }

      element.style.transform = `translateX(${translateX}px)`;

      currentX =
        event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    }

    function handleDragEnd() {
      isDragging = false;
    }
  });
});
