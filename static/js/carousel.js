let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides() {
  showSlides(slideIndex += 1);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n, true);
}

function showSlides(n, go) {
  let checkGo = go || false
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if (!checkGo) {
    setTimeout(() => {
      plusSlides()
    }, 6000);
  }
}