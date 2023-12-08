var slideIndex1 = 0;
var slideIndex2 = 0;

function changeSlide1(n) {
  var slides = document.querySelectorAll('#album1 .slide');
  slideIndex1 = (slideIndex1 + n + slides.length) % slides.length;
  slides.forEach(function(slide, index) {
    slide.style.display = index === slideIndex1 ? 'block' : 'none';
  });
}
function changeSlide2(n) {
  var slides = document.querySelectorAll('#album2 .slide');
  slideIndex2 = (slideIndex2 + n + slides.length) % slides.length;
  slides.forEach(function(slide, index) {
    slide.style.display = index === slideIndex2 ? 'block' : 'none';
  });
}
var slideIndex = 0;
var isAnimating = false;

window.onload = function() {
  changeSlide1(0);
  changeSlide2(0);
  changeSlide3(0);
}
var slideIndex3 = 0;

function changeSlide3(n) {
  var slides = document.querySelectorAll('#album3 .slide');
  slideIndex3 = (slideIndex3 + n + slides.length) % slides.length;
  slides.forEach(function(slide, index) {
    slide.style.display = index === slideIndex3 ? 'block' : 'none';
  });
}

function changeSlide(step) {
  if (isAnimating) return;
  isAnimating = true;
  slideIndex += step;
  showSlide(slideIndex);
  setTimeout(function() {
    isAnimating = false;
  }, 500); // Jeda 500ms setelah perubahan slide
}
function showSlide(index) {
  var slides = document.querySelectorAll('.slide');
  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
}
function openImage(imageSrc) {
  var modal = document.getElementById('myModal');
  var img = document.getElementById('img01');
  modal.style.display = "block";
  img.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}
