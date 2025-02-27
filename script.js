// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, telml ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

function cursorEff() {
  let pageContant = document.getElementById("page-Contant");
  let cursor = document.getElementById("cursor");

  pageContant.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.clientX,
      y: event.clientY,
    });
  });
  pageContant.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  pageContant.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function cursorEff1() {
  let page4 = document.querySelector(".page4");
  let cursor1 = document.getElementById("cursor1");

  page4.addEventListener("mousemove", function (event) {
    gsap.to(cursor1, {
      x: event.clientX,
      y: event.clientY,
    });
  });
  page4.addEventListener("mouseenter", function () {
    gsap.to(cursor1, {
      scale: 1,
      opacity: 1,
    });
  });
  page4.addEventListener("mouseleave", function () {
    gsap.to(cursor1, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEff1();
cursorEff();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

function page2Animation() {
  gsap.from(".page2", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: ".word",
      scroller: ".main",
      scrub: true,
      start: "top 40%",
      end: "top 37%",
      scrub: 2,
    },
  });
}
page2Animation();

var t1 =
  gsap.timeline() 
  t1.from("#loader h3", {
        x:40,
        opacity:0,
        duration:1,
        stagger:0.1
  });
t1.to("#loader h3", {
  opacity: 0,
  x:-40,
  duration:1,
  stagger:0.1,
  
});
t1.to("#loader",{
    opacity:0
})
t1.to("#loader",{
    display: "none"
})
t1.from('#page-Contant h1 span',{
    y:100,
    opacity:0,
    stagger:0.1,
    
})
