let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots-container .dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slider = document.getElementById('slider');
const show_counter = document.querySelector('.slide_counter');
const mover_slider = slider.getAttribute('data-slide-move');
// const autoSlideTrue = document.querySelector('.slider-nav');
// const autoSlideValue = autoSlideTrue.getAttribute('data-auto-slide').trim();
function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1; 
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  show_counter.innerHTML = `${index}/${slides.length}`;
  updateDots();
//   console.log(mover_slider);
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    showSlide(parseInt(e.target.getAttribute('data-slide')));
  });
});

// if(autoSlideValue){
    setInterval(() => {
      showSlide(currentSlide + 1);  // Move to the next slide
    }, 3000); 
// }

showSlide(currentSlide);



// produtdd

