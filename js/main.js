const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");
const numberSliderBoxs = sliderElm.children.length;
console.log(numberSliderBoxs);
let idxCurrentSlide = 0;

function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
  console.log(sliderElm.clientWidth, leftMargin);
}

function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;

  moveSlider();
}

function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;

  moveSlider();
}

setInterval(function() {
		moveRight()
	}, 8000);

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

window.onload = function() {
	moveSlider();
}

