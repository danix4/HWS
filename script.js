$(function () {
  $('div[id*="biziqrecentreviews-"]').css("visibility", "visible").addClass('swiper-wrapper').wrap('<div class="swiper-container"></div>').after('<div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
  $('.biziq-review').addClass('swiper-slide');
});

$(function () {
  var time = 8000;
  var swiper = new Swiper('.swiper-container', {
      spaceBetween: 0, // this changes the width between the slides
      centeredSlides: true,
      loop: true,
      effect: 'slide', // this sets animation type: "slide", "fade", "cube", "coverflow" or "flip"
      autoplay: {
        delay: time,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 
});


function initMap() {
  const loc = {lat: 50.886010, lng:4.728550};
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });

const marker = new google.maps.Marker ({position: loc, map: map });

}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});