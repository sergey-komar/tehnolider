$(function () {
    $('.slider__inner').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<img class="slider-arrows-left" src="./images/slider-arrows-left.svg">',
        nextArrow: '<img class="slider-arrows-right" src="./images/slider-arrows-right.svg">',

        responsive: [
            {
              breakpoint:1230,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint:1050,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:830,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
            
              {
                breakpoint:630,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:550,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              },
          ]
    });





    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
    
     // Попап
     $('.play-block__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
    });

})


window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');
    const navLinks = document.querySelectorAll('.menu__list a');

    mobile.addEventListener('click', function() {
        this.classList.toggle('nav-icon--active')
        menu.classList.toggle('nav--active');
        document.body.classList.toggle('overflow');
    });
    // //Обходим ссылки методом forEach
navLinks.forEach(function (item) {
  //Для каждой ссылки добавляем прослушку по событию "Клик"
  item.addEventListener('click', function () {
    mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
    menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
    document.body.classList.remove('overflow');
  });
});



    const mobileSocial = document.querySelector('.mobile-social');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 10){
            mobileSocial.style.opacity = '1';
        }else{
            mobileSocial.style.opacity = '0';
        }
    })
    
    
   

    const openImg = document.querySelectorAll('.questions-accardion__img');

    openImg.forEach(item => {
       item.addEventListener('click', () => {
           item.classList.toggle('open');
       })
    });


    function bundModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calcScroll();
        const header = document.querySelector('.header');

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target){
                e.preventDefault();
            }
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            header.classList.add('header-scroll');
        })
       
    });

    close.addEventListener('click', () =>{
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
        header.classList.remove('header-scroll');
  
    });

// Закртытие по клику в область экрана за пределами самого модального окна
        modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`
        }
    });
// ЗАКРЫТИЕ ПО КЛИКУ НА ESC
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`
        }
    })
}

//УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
function calcScroll(){
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}
// УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
bundModal('.btn-click', '.modal', '.modal .modal__close');
bundModal('.pesok__link', '.modal-map-one', '.modal-map-one .modal__close-map');
bundModal('.crushed__link', '.modal-map-two', '.modal-map-two .modal__close-map');




function bundModalOne(triggerSelector, modalSelector, closeSelector){
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const scroll = calcScroll();

    trigger.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    })

close.addEventListener('click', () =>{
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`

});

// Закртытие по клику в область экрана за пределами самого модального окна
    modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
    }
});
// ЗАКРЫТИЕ ПО КЛИКУ НА ESC
document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
    }
})
}

bundModalOne('.btn-click-consultation', '.modal-consultation', '.modal-consultation .modal__close');


/////
// анимации
const animItems = document.querySelectorAll('._anim-items'); // классы с анимированными элементами

if (animItems.length > 0) {
	document.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; // получаем высоту объекта
			const animItemOffset = offset(animItem).top; // позиция элемента относительно верха страницы
			const animStart = 4; // коэф, регулирующий момент старта анимации (1/4 высоты объекта, или 1/4 высоты браузера, если объект больше высоты браузера)

			// настройка момента старта
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) { // запрещаем повторную анимацию
					animItem.classList.remove('_active');
				}
			}
		}
	}
	// функция считающая позицию элемента относительно верха страницы (или cлева)
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300)
}



 




})

