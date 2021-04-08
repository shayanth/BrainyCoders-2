const navLsit = document.getElementsByClassName("Nav_Style")[0];
const Toggle = document.getElementsByClassName("toggle-btn")[0]
  .addEventListener("click", () => {
    navLsit.classList.toggle("active");
  });
setInterval(window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("Sticky", window.scrollY > 10)

}));



let Hamburger = document.getElementById("#toggle-btn");
Hamburger.addEventListener("click", () => {
  document.getElementById("#Nav_Style").classList.toggle("Nav_Style_Transition")
})

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  autoplay: true,
  initialSlide: 2,
  slidesPerView: 1,
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 20,
    stretch: 1,
    depth: 90,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1269: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1271: {
      slidesPerView: 4,
      spaceBetween: 150,
    }
  }
});


function Query1271(media) {
  if (media.matches) {

    let ProjectLevel = document.getElementById("PjLevel");
    let CompLogo = document.getElementById("CompLogoId");
    let ProjectWrap = document.getElementById("ProjectWrapId");
    let swiperContainer = document.getElementById("swiper-containerId");
    let TechRows = document.getElementsByClassName("Tech_Row");
    let ProjectRows = document.getElementsByClassName("Projects_Row");
    
    let FormImg = document.getElementById("Form_imgId");
    let Form = document.getElementById("FormId")
    
    window.addEventListener('scroll',()=>{
        
        ProjectLevel.classList.toggle("ProjectLevelsAnimation", window.scrollY > 600);
        CompLogo.classList.toggle("CompLogoAnimation", window.scrollY > 600);
        ProjectWrap.classList.toggle("ProjectWrapAnimation", window.scrollY > 600);
        swiperContainer.classList.toggle("swiper-containerAnimation", window.scrollY > 1200);
        
        TechRows[0].classList.toggle("Tech_RowAnimation",window.scrollY > 2500);
        TechRows[1].classList.toggle("Tech_RowAnimation",window.scrollY > 2900);
        TechRows[2].classList.toggle("Tech_RowAnimation",window.scrollY > 3300);
        
        ProjectRows[0].classList.toggle("Projects_RowAnimation",window.scrollY > 4100)
        ProjectRows[1].classList.toggle("Projects_RowAnimation",window.scrollY > 4200)
        
        FormImg.classList.toggle("Form_imgAnimation",window.scrollY > 5400)
        Form.classList.toggle("FormAnimation",window.scrollY > 5400)

        

    });
    

  }
}
var media1271 = window.matchMedia("(min-width: 1025px)");
Query1271(media1271);
media1271.addListener(Query1271);