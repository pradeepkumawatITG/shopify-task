// let currentSlide = 0;
// const slides = document.querySelectorAll('.grid-slide');
// const dots = document.querySelectorAll('.dots-container .dot');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const slider = document.getElementById('slider');
// const show_counter = document.querySelector('.slide_counter');
// const slidesPerClick = 4; 


// function showSlide(index) {
//   if (index < 0) {
//     currentSlide = slides.length - 1; 
//   } else if (index >= slides.length) {
//     currentSlide = 0;
//   } else {
//     currentSlide = index;
//   }
  
//   // Calculate how far to slide (move 4 slides per click)
//   const slidePercentage = (currentSlide * 100) / slidesPerClick;
//   slider.style.transform = `translateX(-${slidePercentage}%)`;

//   // Update the counter display
//   show_counter.innerHTML = `${currentSlide + 1}/${slides.length}`;

//   updateDots();
// }

// function updateDots() {
//   dots.forEach(dot => dot.classList.remove('active'));
//   dots[currentSlide].classList.add('active');
// }

// prevBtn.addEventListener('click', () => {
//   // Move back by 4 slides
//   showSlide(currentSlide - slidesPerClick);
// });

// nextBtn.addEventListener('click', () => {
//   // Move forward by 4 slides
//   showSlide(currentSlide + slidesPerClick);
// });

// dots.forEach(dot => {
//   dot.addEventListener('click', (e) => {
//     // Show the slide based on dot clicked
//     showSlide(parseInt(e.target.getAttribute('data-slide')));
//   });
// });

// // Automatically move to the next slide every 3 seconds (optional)
// // setInterval(() => {
// //   showSlide(currentSlide + slidesPerClick);  // Move to the next slide
// // }, 3000);

// showSlide(currentSlide);


const slider = document.querySelector('.product-slider');
const sliderButtons = document.querySelectorAll('.slider-button');
let scrollAmount = 0;
let sliderWidth = slider.offsetWidth;
let cardMargin = parseInt(window.getComputedStyle(document.querySelector('.product-card')).marginRight);

sliderButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.classList.contains('left')) {
      scrollAmount -= (sliderWidth + cardMargin);
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
    } else if (this.classList.contains('right')) {
      scrollAmount += (sliderWidth + cardMargin);
      if (scrollAmount > slider.scrollWidth - sliderWidth) {
        scrollAmount = slider.scrollWidth - sliderWidth;
      }
    }
    slider.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});
