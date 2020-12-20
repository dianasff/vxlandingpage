// navbar
const navSlide = () =>{
    const burguer = document.querySelector('.burguer');
    const nav     = document.querySelector('.nav-links');
    const navLinks    = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link)=>{
            link.style.animation = 'navLinkFade 0.5s ease forwards';
        })
        //burguer
        burguer.classList.toggle('toggle');
    })
}
navSlide();


// Set the date we're counting down to
const countDownDate = new Date("Jan 3, 2021 22:30:00").getTime();

// Update the count down every 1 second
const counter = setInterval(function() {

  // Get today's date and time
  const currMoment = new Date().getTime();

  // Find the distance between the current moment and the date we want
  const distance = countDownDate - currMoment;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result 
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  
}, 1000);

// Slider made with slick Plugin
  $('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Counter up plugin animation
  $(".num").counterUp({delay:10, time:1000});