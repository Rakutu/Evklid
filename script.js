window.addEventListener('DOMContentLoaded', function () {

    // БУРГЕР

    document.querySelectorAll('.hww__list-link').forEach(function (tabs) {
      tabs.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.hww__show').forEach(function(stepContent) {
          stepContent.classList.remove('hww__step--active')
        })
        document.querySelectorAll('.hww__list-link').forEach(function(steps) {
          steps.classList.remove('hww__list-link--active')
        })


        document.querySelector(`[data-target="${path}"]`).classList.add('hww__step--active')
        document.querySelector(`[data-path="${path}"]`).classList.add('hww__list-link--active')

      })

      console.log('path')
    })

    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#burger-menu').classList.add('is-active')
     })

    document.querySelector('#burger-close').addEventListener('click', function () {
      document.querySelector('#burger-menu').classList.remove('is-active')
     })


    // СВАЙПЕР

    new Swiper('.swiper-container', {
      effect: 'slide',
      // fadeEffect: { crossFade: true },
      // spaceBetween: 30,
      autoplay: {
        delay: 1000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        // dynamicBullets: true,
      },
      loop: true,

    });

    $ (function() {
      $( "#accordion" ).accordion({
        animate: 200,
        active: false,
        collapsible: true,
        icons: false,
        heightStyle: "content",
      });
    });

    // With the above scripts loaded, you can call `tippy()` with a CSS
      // selector and a `content` prop:
      tippy('#myButton', {
        content: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Снова над моей ipsum lorem злых которое великий, семантика гор. Они, продолжил пустился! Переписали великий букв, рекламных пор своего одна?',
      });


 })
