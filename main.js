
(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach((item, index) => {
      item.style.opacity = 0; // Initially hide
    
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const itemTop = item.getBoundingClientRect().top;
    
        if (scrollPosition > itemTop - window.innerHeight * 0.75) {
          item.style.animation = `slide-in-right 0.5s ease-in-out forwards, slide-in-delay 0s ${index * 0.2}s`;
        }
      });
    });
    



    // professionals
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });


   

})(jQuery);

