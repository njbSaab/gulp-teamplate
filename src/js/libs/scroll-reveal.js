document.addEventListener('DOMContentLoaded', function() {
  const config = {
    easing: 'ease-out',  
    interval: 200,  
    afterReveal: function (el) {
      el.classList.add('revealed');  
    }
  };

  ScrollReveal().reveal('.title', {...config, delay: 300}); 
  ScrollReveal().reveal('.bonus-account-wrapper .text-first-anim', {...config, delay: 600});  
  ScrollReveal().reveal('.bonus-account-wrapper .text-secnd-anim', {...config, delay: 900});  
  
  ScrollReveal().reveal('.term-inner .bonus-usage', {...config, delay: 200}); 
  ScrollReveal().reveal('.term-inner .bonus-not-accrued', {...config, delay: 400}); 
  ScrollReveal().reveal('.term-inner .bonus-not-applied', {...config, delay: 600}); 
  ScrollReveal().reveal('.term-inner .bonus-return', {...config, delay: 800}); 

  

  ScrollReveal().reveal(' .santan-anim', {
    ...config,
    delay: 800,
    beforeReveal: function(el) {
      el.style.top = '-400px';
    },
    afterReveal: function(el) {
      el.style.top = '0';
    }
  });

  ScrollReveal().reveal('.activated-card.first', {
    delay: 300, // Меньшая задержка для первой карточки
    afterReveal: function(el) {
      el.classList.add('revealed'); // Добавление класса для начала анимации
    }
  });

  ScrollReveal().reveal('.activated-card.second', {
    delay: 1300, // Задержка для второй карточки (3 секунды после первой)
    afterReveal: function(el) {
      el.classList.add('revealed'); // Добавление класса для начала анимации
    }
  });

  const liElements = document.querySelectorAll('.how-activated-footer ul li');
  liElements.forEach((el, index) => {
    ScrollReveal().reveal(el, {
      delay: 400 * index, // Увеличиваем задержку на 1 секунду для каждого элемента
      afterReveal: function(el) {
        el.classList.add('revealed'); // Добавление класса для начала анимации
      }
    });
  });

  ScrollReveal().reveal('.anim-content', {
    duration: 1000, // Продолжительность анимации
    afterReveal: function(el) {
        el.classList.add('revealed'); // Добавление класса для начала анимации
    }
});

});

  


  // ScrollReveal().reveal('.right-side-block', {
  //   delay: 300,
  //   distance: '50px',
  //   duration: 1000,
  //   easing: 'ease-in-out',
  //   origin: 'bottom',
  //   reset: true
  // });


  document.addEventListener('DOMContentLoaded', function() {
    // Элемент, на который нужно кликнуть для запуска анимации
    const triggerElement = document.querySelector('.main-page-wrapper');
    // Элемент, на который будет применена анимация
    const animatedElement = document.querySelector('.right-side-block .svg-wrapper img');

    triggerElement.addEventListener('click', function() {
        // Сброс текущей анимации для повторного запуска
        animatedElement.style.animation = 'none';
        // Принудительный reflow/repaint для сброса анимации
        animatedElement.offsetHeight;
        // Запуск анимации
        animatedElement.style.animation = 'lds-circle 1.4s cubic-bezier(0, 0.2, 0.8, 1) alternate 1';
    });
});

