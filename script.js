
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a,button");
var orangeContainers = document.querySelectorAll(".orangeContainer");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

orangeContainers.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hoveronorange")
    cursorinner.classList.add("cursorblack");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hoveronorange");
    cursorinner.classList.remove("cursorblack");
  });
});

// mouse end

// Initialize AOS
AOS.init({
    duration: 1000, // Duration of animation
    once: true,     // Trigger only once
    offset: 100,    // Trigger point for animation
    disable: 'mobile' // Disable AOS on mobile if needed (optional)
  });

// Team Section start

  // Intersection Observer to trigger animations when the section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the section is in view
  });

  // Observe the team section
  const teamSection = document.querySelector('.team-section');
  observer.observe(teamSection);


// Team Section end 

// slide start

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 4000,
  },
  speed: 2000,
});

// slide end


//cursor


$('#owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,

  rewind: true,
autoplay:true,	
    autoplayTimeout:2000,
    autoplayHoverPause:false,

})



$(document).ready(function() {
  function onScroll() {
    $('.team-section').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (viewportBottom > elementTop && viewportTop < elementBottom) {
        $(this).addClass('visible');
      }
    });
  }

  // Run the onScroll function when the page loads and on scroll
  $(window).on('scroll', onScroll);
  onScroll(); // Trigger the function on page load to check if the section is already in view
});

// our team end

 
