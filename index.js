
  const navLsit = document.getElementsByClassName("Nav_Style")[0];
  const Toggle = document
    .getElementsByClassName("toggle-btn")[0]
    .addEventListener("click", () => {
      navLsit.classList.toggle("active");
    });
    setInterval(window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("Sticky", window.scrollY > 10)

  }), 3000);



let Hamburger = document.getElementById("#toggle-btn");
Hamburger.addEventListener("click", ()=>{
document.getElementById("#Nav_Style").classList.toggle("Nav_Style_Transition") })




function Query480(media) {
  if (media.matches) { 
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      autoplay: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView:1,
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
  });

  
  }
}

function Query768(media) {
  if (media.matches) { 
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      autoplay: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: 1,
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
  });

  
  }
}

function Query1024(media) {
  if (media.matches) { 
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      autoplay: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
  });

  
  }
}

function Query1270(media) {
  if (media.matches) { 
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      autoplay: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
  });

  
  }
}

function Query1271(media) {
  if (media.matches) { 
    
  //#########################################SEC1##################################################################
  gsap.from(".logo", {
    scrollTrigger: ".logo",
    opacity: 0,
    duration: 3,
    yPercent: -500,
    ease: "power2.out",
  });
  gsap.from(".Home_Des li", {
    scrollTrigger: ".Home_Des li",
    delay: 1,
    opacity: 0,
    duration: 2,
    yPercent: -100,
    ease: "power2.out",
    stagger: 0.2,
  });
  gsap.from(".Nav_Style li", {
    delay: 0.2,
    scrollTrigger: ".Nav_Style li",
    opacity: 0,
    duration: 2,
    yPercent: -100,
    ease: "power2.out",
    stagger: 0.2,
  });
  gsap.from(".Full_Logo", {
    scrollTrigger: ".Full_Logo",
    delay: 0.3,
    opacity: 0,
    duration: 3,
    xPercent: -300,
    ease: "power2.out",
  });
  gsap.from(".Rect", {
    opacity: 0,
    duration: 1.5,
    xPercent: -2000,
    ease: "power2.out",
  });
  gsap.from(".Ellipse", {
    opacity: 0,
    duration: 1.5,
    xPercent: 2000,
    ease: "power2.out",
  });
  gsap.from(".Cyber", {
    delay: 0.3,
    opacity: 0,
    duration: 2,
    xPercent: 600,
    ease: "power2.out",
  });
  //#########################################SEC2##################################################################
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSPlugin);
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Sec2",
      start: "10% 15% ",

      scrub: 0.5,
      pin: ".Sec2",
      toggleActions: "restart pause reverse pause",
    },
  });
  tl1
    .from(".Sec1End", {
      scaleX: 0,
      duration: 5,
    })
    .from(".ProjectStruct , .ProjetHead", {
      opacity: 0,
      yPercent: -20,
      ease: "power.in",
      duration: 5,
    })
    .from(".CompLogo", {
      opacity: 0,
      xPercent: -30,
      ease: "power.in",
      duration: 5,
    })
    .from(".BackSec2", {
      opacity: 0,
      ease: "power.in",
      yPercent: -20,
      duration: 5,
    })
    .from(".ProjectLevel1", {
      opacity: 0,
      ease: "power2.in",
      xPercent: -50,
      duration: 5,
    })
    .from(".ProjectLevel2", {
      opacity: 0,
      ease: "power2.in",
      xPercent: -50,
      duration: 5,
    })
    .from(".ProjectLevel3", {
      opacity: 0,
      ease: "power2.in",
      xPercent: -50,
      duration: 5,
    })
    .from(".ProjectLevel4", {
      opacity: 0,
      ease: "power2.in",
      xPercent: -50,
      duration: 5,
    });

  //###################################################Sec3##############################################################
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Sec3",
      start: "0% 10% ",
      scrub: 0.5,
      pin: ".Sec3",
      toggleActions: "restart pause restart pause",
    },
  });
  tl2
    .from(".Left_Polygon", {
      xPercent: -125,
    })
    .from(".swiper-container", {
      opacity: 0,
      yPercent: 10,
    })
    .from(".Right_Polygon", {
      xPercent: 125,
    });
  //###################################################Sec4##############################################################
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Sec4",
      start: "0% 0%",
      scrub: 0.5,
      pin: ".Sec4",
      toggleAction: "restart pause reverse pause",
    },
  });
  tl3
    .from(".Sec4_Head_Text, .Sec4_Head", {
      opacity: 0,
      yPercent: 10,
    })
    .from(".Tech_Box", {
      opacity: 0,
      yPercent: -20,
      stagger: 0.2,
    });
  //###################################################Sec5##############################################################
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Sec5",
      start: "0% 10%",
      end: "bottom",
      scrub: 0.5,
      pin: ".Sec5",
      toggleAction: "restart pause reverse pause",
    },
  });
  tl4.from(".Projects_img", {
    opacity: 0,
    yPercent: 10,
    stagger: 1,
  });
  //###################################################Sec5##############################################################
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Sec6",
      start: "10% 25%",
      end: "bottom",
      scrub: 0.5,
      pin: ".Sec6",
      toggleAction: "restart pause reverse pause",
    },
  });
  tl5
    .from(".Form_img", {
      opacity: 0,
      xPercent: -20,
    })
    .from(".Form", {
      opacity: 0,
      xPercent: 20,
    });
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      autoplay: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: 4,
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
  });

  
  }
}
var media480 = window.matchMedia("(max-width: 480px)");
Query480(media480);
media480.addListener(Query480);

var media768 = window.matchMedia("(max-width: 768px)");
Query768(media768);
media768.addListener(Query768);

var media1024 = window.matchMedia("(max-width: 1024px)");
Query1024(media1024);
media1024.addListener(Query1024);

var media1270 = window.matchMedia("(max-width: 1270px)");
Query1270(media1270);
media1270.addListener(Query1270);

var media1271 = window.matchMedia("(min-width: 1271px)");
Query1271(media1271);
media1271.addListener(Query1271);