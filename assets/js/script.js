/*
  Template Name: Furea - Furniture eCommerce HTML Template
  Author Name: Hook theme
  Author URL: https://themeforest.net/user/hooktheme
  Version: v1.0.4
*/

"use strict";

// Preloader
const preLoader = function () {
  let preloaderWrapper = document.getElementById("preloader");
  window.onload = () => {
    preloaderWrapper.classList.add("addloaded");
  };
};
//preLoader();

// getSiblings
var getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
var slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
var slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

// Get window top offset
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}
// Header sticky activation
const headerStickyWrapper = document.querySelector("header");
const headerStickyTarget = document.querySelector(".header__sticky");

if (headerStickyTarget) {
  window.addEventListener("scroll", function () {
    let StickyTargetElement = TopOffset(headerStickyWrapper);
    let TargetElementTopOffset = StickyTargetElement.top;

    if (window.scrollY > TargetElementTopOffset) {
      headerStickyTarget.classList.add("sticky");
    } else {
      headerStickyTarget.classList.remove("sticky");
    }
  });
}

// Scroll up activation
const scrollTop = document.getElementById("scroll__top");
scrollTop.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
// slider swiper activation
var swiper = new Swiper(".hero__slider--activation", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  effect: "fade",
  speed: 500,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product swiper column3 activation
var swiper = new Swiper(".product__swiper--column3", {
  slidesPerView: 3,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product swiper column4 activation
var swiper = new Swiper(".product__swiper--column4", {
  slidesPerView: 4,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product swiper column5 activation
var swiper = new Swiper(".product__swiper--column5", {
  slidesPerView: 5,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product list column3 activation
var swiper = new Swiper(".product__list--column3", {
  slidesPerView: 3,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testimonial swiper activation
var swiper = new Swiper(".testimonial__swiper--activation", {
  slidesPerView: 2,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testimonial swiper column3 activation
var swiper = new Swiper(".testimonial__swiper--column3", {
  slidesPerView: 3,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testimonial swiper column4 activation
var swiper = new Swiper(".testimonial__swiper--column4", {
  slidesPerView: 4,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// blog swiper activation
var swiper = new Swiper(".blog__swiper--activation", {
  slidesPerView: 4,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// blog swiper column3 activation
var swiper = new Swiper(".blog__swiper--column3", {
  slidesPerView: 3,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// instagram swiper activation
var swiper = new Swiper(".instagram__swiper--activation", {
  slidesPerView: 7,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 7,
    },
    992: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// instagram swiper column5 activation
var swiper = new Swiper(".instagram__swiper--column5", {
  slidesPerView: 5,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// quickview swiper activation
var swiper = new Swiper(".quickview__swiper--activation", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// product details media swiper activation
var swiper = new Swiper(".product__media--nav", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".product__media--preview", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

// tab activation
const tab = function () {
  const tabList = document.querySelectorAll('[data-toggle="tab"]');
  tabList.forEach(function (list) {
    list.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target"),
        target = document.querySelector(targetId);
      this.parentElement
        .querySelectorAll('[data-toggle="tab"]')
        .forEach(function (list) {
          list.classList.remove("active");
        });
      this.classList.add("active");
      target.classList.add("active");
      setTimeout(function () {
        target.classList.add("show");
      }, 150);
      getSiblings(target).forEach(function (pane) {
        pane.classList.remove("show");
        setTimeout(function () {
          pane.classList.remove("active");
        }, 150);
      });
    });
  });
};
tab();

// countdown activation
document.querySelectorAll("[data-countdown]").forEach(function (elem) {
  const countDownItem = function (value, label) {
    return `<div class="countdown__item" ${label}"><span class="countdown__number">${value}</span><p class="countdown__text">${label}</p></div>`;
  };
  const date = new Date(elem.getAttribute("data-countdown")).getTime(),
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  const countDownInterval = setInterval(function () {
    let currentTime = new Date().getTime(),
      timeDistance = date - currentTime,
      daysValue = Math.floor(timeDistance / day),
      hoursValue = Math.floor((timeDistance % day) / hour),
      minutesValue = Math.floor((timeDistance % hour) / minute),
      secondsValue = Math.floor((timeDistance % minute) / second);

    elem.innerHTML =
      countDownItem(daysValue, "days") +
      countDownItem(hoursValue, "hrs") +
      countDownItem(minutesValue, "mins") +
      countDownItem(secondsValue, "secs");

    if (timeDistance < 0) clearInterval(countDownInterval);
  }, 1000);
});

// active class remove class activation
const activeClassAction = function (toggle, target) {
  const to = document.querySelector(toggle),
    ta = document.querySelector(target);
  if (to && ta) {
    to.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        ta.classList.remove("active");
      } else {
        this.classList.add("active");
        ta.classList.add("active");
      }
    });
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(toggle) &&
        !event.target.classList.contains(toggle.replace(/\./, ""))
      ) {
        if (
          !event.target.closest(target) &&
          !event.target.classList.contains(target.replace(/\./, ""))
        ) {
          to.classList.remove("active");
          ta.classList.remove("active");
        }
      }
    });
  }
};

activeClassAction(".account__currency--link", ".dropdown__currency");
activeClassAction(".language__switcher", ".dropdown__language");
activeClassAction(
  ".offcanvas__language--switcher",
  ".offcanvas__dropdown--language"
);
activeClassAction(
  ".offcanvas__account--currency__menu",
  ".offcanvas__account--currency__submenu"
);

// OffCanvas Sidebar Activation
function offcanvsSidebar(openTrigger, closeTrigger, wrapper) {
  let OpenTriggerprimary__btn = document.querySelectorAll(openTrigger);
  let closeTriggerprimary__btn = document.querySelector(closeTrigger);
  let WrapperSidebar = document.querySelector(wrapper);
  let wrapperOverlay = wrapper.replace(".", "");

  function handleBodyClass(evt) {
    let eventTarget = evt.target;
    if (!eventTarget.closest(wrapper) && !eventTarget.closest(openTrigger)) {
      WrapperSidebar.classList.remove("active");
      document
        .querySelector("body")
        .classList.remove(`${wrapperOverlay}_active`);
    }
  }
  if (OpenTriggerprimary__btn && WrapperSidebar) {
    OpenTriggerprimary__btn.forEach(function (singleItem) {
      singleItem.addEventListener("click", function () {
        WrapperSidebar.classList.add("active");
        document
          .querySelector("body")
          .classList.add(`${wrapperOverlay}_active`);
        document.body.addEventListener("click", handleBodyClass.bind(this));
      });
    });
  }

  if (closeTriggerprimary__btn && WrapperSidebar) {
    closeTriggerprimary__btn.addEventListener("click", function () {
      WrapperSidebar.classList.remove("active");
      document
        .querySelector("body")
        .classList.remove(`${wrapperOverlay}_active`);
      document.body.removeEventListener("click", handleBodyClass.bind(this));
    });
  }
}

// Mini Cart
offcanvsSidebar(
  ".minicart__open--btn",
  ".minicart__close--btn",
  ".offCanvas__minicart"
);

// Search Bar
offcanvsSidebar(
  ".search__open--btn",
  ".predictive__search--close__btn",
  ".predictive__search--box"
);

// Offcanvas filter sidebar
offcanvsSidebar(
  ".widget__filter--btn",
  ".offcanvas__filter--close",
  ".offcanvas__filter--sidebar"
);

/* Offcanvas Mobile Menu Function */
const offcanvasHeader = function () {
  const offcanvasOpen = document.querySelector(
      ".offcanvas__header--menu__open--btn"
    ),
    offcanvasClose = document.querySelector(".offcanvas__close--btn"),
    offcanvasHeader = document.querySelector(".offcanvas__header"),
    offcanvasMenu = document.querySelector(".offcanvas__menu"),
    body = document.querySelector("body");
  /* Offcanvas SubMenu Toggle */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu")
      .forEach(function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
        ul.parentNode.appendChild(subMenuToggle);
      });
  }
  /* Open/Close Menu On Click Toggle Button */
  if (offcanvasOpen) {
    offcanvasOpen.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.add("open");
      body.classList.add("mobile_menu_open");
    });
  }
  if (offcanvasClose) {
    offcanvasClose.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    });
  }
  /* Open/Close Sub Menu On Click Toggle Button */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu_toggle")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".offcanvas__sub_menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      });
  }
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".offcanvas__header--menu__open--btn") &&
      !event.target.classList.contains(
        ".offcanvas__header--menu__open--btn".replace(/\./, "")
      )
    ) {
      if (
        !event.target.closest(".offcanvas__header") &&
        !event.target.classList.contains(".offcanvas__header".replace(/\./, ""))
      ) {
        offcanvasHeader.classList.remove("open");
        body.classList.remove("mobile_menu_open");
      }
    }
  });
  /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
  window.addEventListener("resize", function () {
    if (window.outerWidth >= 992) {
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    }
  });
};
/* Mobile Menu Active */
offcanvasHeader();

// Qunatity Button Activation
const quantityWrapper = document.querySelectorAll(".quantity__box");
if (quantityWrapper) {
  quantityWrapper.forEach(function (singleItem) {
    let input = singleItem.querySelector(".quantity__number");
    let increaseButton = singleItem.querySelector(".increase");
    let decreaseButton = singleItem.querySelector(".decrease");

    increaseButton.addEventListener("click", function () {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
    });

    decreaseButton.addEventListener("click", function () {
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      input.value = value;
    });
  });
}

// Modal JS
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Accordion
function customAccordion(accordionWrapper, accordionButton, accordionBody) {
  let accoridonButtons = document.querySelectorAll(accordionButton);
  accoridonButtons.forEach(function (item) {
    item.addEventListener("click", function () {
      let singleAccordionWrapper = this.closest(accordionWrapper),
        singleAccordionBody =
          singleAccordionWrapper.querySelector(accordionBody);
      if (singleAccordionWrapper.classList.contains("active")) {
        singleAccordionWrapper.classList.remove("active");
        slideUp(singleAccordionBody);
      } else {
        singleAccordionWrapper.classList.add("active");
        slideDown(singleAccordionBody);
        getSiblings(singleAccordionWrapper).forEach(function (item) {
          let sibllingSingleAccordionBody = item.querySelector(accordionBody);
          item.classList.remove("active");
          slideUp(sibllingSingleAccordionBody);
        });
      }
    });
  });
}
customAccordion(
  ".accordion__items",
  ".accordion__items--button",
  ".accordion__items--body"
);

customAccordion(
  ".widget__categories--menu__list",
  ".widget__categories--menu__label",
  ".widget__categories--sub__menu"
);

// footer widget js
let accordion = true;
const footerWidgetAccordion = function () {
  accordion = false;
  document.querySelectorAll(".footer__widget--button").forEach(function (item) {
    item.addEventListener("click", function () {
      const footerWidget = this.closest(".footer__widget"),
        footerWidgetInner = footerWidget.querySelector(
          ".footer__widget--inner"
        );
      if (footerWidget.classList.contains("active")) {
        footerWidget.classList.remove("active");
        slideUp(footerWidgetInner);
      } else {
        footerWidget.classList.add("active");
        slideDown(footerWidgetInner);
        getSiblings(footerWidget.parentElement).forEach(function (item) {
          const footerWidget = item.querySelector(".footer__widget"),
            footerWidgetInner = item.querySelector(".footer__widget--inner");
          footerWidget.classList.remove("active");
          slideUp(footerWidgetInner);
        });
      }
    });
  });
};

window.addEventListener("load", function () {
  if (accordion) {
    footerWidgetAccordion();
  }
});
window.addEventListener("resize", function () {
  document.querySelectorAll(".footer__widget").forEach(function (item) {
    if (window.outerWidth >= 768) {
      item.classList.remove("active");
      item.querySelector(".footer__widget--inner").style.display = "";
    }
  });
  if (accordion) {
    footerWidgetAccordion();
  }
});

// lightbox Activation
const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
    </div>
    </div>`;
const lightbox = GLightbox({
  touchNavigation: true,
  lightboxHTML: customLightboxHTML,
  loop: true,
});

// CounterUp Activation
const wrapper = document.getElementById("funfactId");
if (wrapper) {
  const counters = wrapper.querySelectorAll(".js-counter");
  const duration = 1000;

  let isCounted = false;
  document.addEventListener("scroll", function () {
    const wrapperPos = wrapper.offsetTop - window.innerHeight;
    if (!isCounted && window.scrollY > wrapperPos) {
      counters.forEach((counter) => {
        const countTo = counter.dataset.count;

        const countPerMs = countTo / duration;

        let currentCount = 0;
        const countInterval = setInterval(function () {
          if (currentCount >= countTo) {
            clearInterval(countInterval);
          }
          counter.textContent = Math.round(currentCount);
          currentCount = currentCount + countPerMs;
        }, 1);
      });
      isCounted = true;
    }
  });
}

// Category Submenu
const categoryMobileMenu = function () {
  const CategorySubMenu = document.querySelector(".category__mobile--menu");
  if (CategorySubMenu) {
    CategorySubMenu.querySelectorAll(".category__sub--menu").forEach(function (
      ul
    ) {
      let catsubMenuToggle = document.createElement("button");
      catsubMenuToggle.classList.add("category__sub--menu_toggle");
      ul.parentNode.appendChild(catsubMenuToggle);
    });
  }

  if (CategorySubMenu) {
    CategorySubMenu.querySelectorAll(".category__sub--menu_toggle").forEach(
      function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          let parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".category__sub--menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".category__sub--menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      }
    );
  }
};
categoryMobileMenu();
