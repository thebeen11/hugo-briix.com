
$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let height = Math.max($(document).height(), $(window).height());
    let contactusHeight = $("#contactus").height();
    let footerheight = $("#footer").height();
    let maxH = height - (contactusHeight + footerheight);

    if (scroll > 50) {
      $("#top-bar").css("background-color", "white");
    } else {
      $("#top-bar").css("background-color", "transparent");
    }

    if (scroll > 200 && scroll < maxH) {
      $("#whatsapp").css("display", "block");
      $("#whatsapp").addClass("transition-opacity");
      $("#whatsapp").addClass("duration-500");
    } else {
      $("#whatsapp").css("display", "none");
    }

    if (scroll > maxH) {
      $("#scrollToTop").css("display", "block");
    } else {
      $("#scrollToTop").css("display", "none");
    }
  });
});

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 130) {
      current = section.getAttribute("id");
    }
    // let platformvid = true
    //   if (current == 'platform' && platformvid == true) {
    //     platformvid = false
    //     document.getElementById('platformvid').play();
    //   }
    //   if (current == 'product') {
    //     document.getElementById('productvid').play();
    //   }
  });

  navLi.forEach((li) => {
    li.classList.remove("actived");
    if (li.classList.contains(current)) {
      li.classList.add("actived");
    }
  });
};


let property = document.getElementById("propertyBtn");
let vc = document.getElementById("vcBtn");
let funds = document.getElementById("fundsBtn");
let propertyFoot = document.getElementById("propertyBtnFoot");
let vcFoot = document.getElementById("vcBtnFoot");
let fundsFoot = document.getElementById("fundsBtnFoot");

property.onclick = function () {
  openProperty()
}

vc.onclick = function () {
  vcOpen()
};

funds.onclick = function () {
 
  fundsOpen()
};

propertyFoot.onclick = function () {
  openProperty()
}

vcFoot.onclick = function () {
  vcOpen()
};

fundsFoot.onclick = function () {
  fundsOpen()
};


function openProperty() {
  $("#propertyContent").css("display", "flex")
  $("#vcContent").css("display", "none")
  $("#fundsContent").css("display", "none")
  $("#propertyBtn").addClass("bg-blue-bg font-semibold").removeClass('border')
  $("#vcBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  $("#fundsBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  document.getElementById('propertyvid').play();
};

function vcOpen() {
  $("#propertyContent").css("display", "none")
  $("#vcContent").css("display", "flex")
  $("#fundsContent").css("display", "none")
  $("#vcBtn").addClass("bg-blue-bg font-semibold").removeClass('border')
  $("#propertyBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  $("#fundsBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  document.getElementById('vcvid').play();
  
}

function fundsOpen() {
  $("#propertyContent").css("display", "none")
  $("#vcContent").css("display", "none")
  $("#fundsContent").css("display", "flex")
  $("#fundsBtn").addClass("bg-blue-bg font-semibold").removeClass('border')
  $("#vcBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  $("#propertyBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  document.getElementById('fundsvid').play();
}

function smallMenu(params) {
  if ( params == 'open' ) {
     $("#smallMenu").removeClass('hidden') 
     $("#openBtn").addClass('hidden')
     $("#closeBtn").removeClass('hidden')
     $("#top-bar").css("background-color", "white");
  } else{
     $("#smallMenu").addClass('hidden')
     $("#closeBtn").addClass('hidden')
     $("#openBtn").removeClass('hidden')
     $("#top-bar").css("background-color", "transparent");
  }
  
}

let advantage = document.getElementById("scrollContent");
advantage.onscroll = function () {
  scrollAdv();
};

function scrollAdv() {
  let y = advantage.scrollLeft;
  let x = advantage.scr;
  let limit = advantage.scrollWidth - advantage.clientWidth;
  let persen = (y * 100) / (limit * 2);
  persen = parseInt(persen);
  document.getElementById("scrollIndicator").style.left = persen + "%";
}
