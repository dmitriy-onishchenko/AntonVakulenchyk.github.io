$(document).ready(function(){
 
        var show = true;
        var countbox = ".statistics";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
                if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $('.stat-block_number').css('opacity', '1');
                       $('.stat-block_number').spincrement({
                            thousandSeparator: "",
                            duration: 1500
                        });
                       show = false;
                }
        });

        var swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            loop: true,
            speed: 700,
            parallax: true,
            autoplay: {
               delay: 4500,
               disableOnInteraction: false, //Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });

        /* nav toggler */
        const menuEight = document.querySelector('.menuEight');
        function addClassFunEight() {
            this.classList.toggle("clickMenuEight");
        }
        menuEight.addEventListener('click', addClassFunEight);

        /* animations */
        function moveMenu() {
            
            if ($(window).width() > 768) {

                $(function () {

                    $(document).ready(function () {

                        $('.btn-custom').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInUp',
                            offset: 0
                        });

                        $('.benefits-block').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInUp',
                            offset: 0,
                            removeClassAfterAnimation: true,
                            callbackFunction: function(elem, action){
                                elem.css({'opacity': '1'})
                                ;}
                        });
                         $('.section-2_contacts').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInRight',
                            offset: 0
                        });
                         $('.logo-animate').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInLeft',
                            offset: 0
                        });
                        $('.departments-tabs').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInLeft',
                            offset: 0
                        });
                        $('.departments-services').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInRight',
                            offset: 0
                        });
                        $('.all-departments').addClass("animated").viewportChecker({
                            classToAdd: 'zoomIn',
                            offset: 0,
                            callbackFunction: function(elem, action){
                                elem.css({'opacity': '1'})
                                ;}
                        });
                        $('.about-us-animate').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInRight',
                             offset: 300,
                            invertBottomOffset: true
                        });
                        $('.about-us').addClass("animated").viewportChecker({
                            classToRemove: 'about-us-bg-pos',
                            offset: 300,
                            invertBottomOffset: true
                        });

                        $('.contacts-block-2').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInRightBig',
                            offset: 0
                        });

                        $('.contacts-block-1').addClass("animated").viewportChecker({
                            classToAdd: 'fadeInLeftBig',
                            offset: 0
                        });

                    });
                })
            }
        }

        moveMenu();

        /* show/hide departments */
        function allDepartments() {
            if (window.matchMedia('(max-width: 576px)').matches) {

            $('.all-departments_block').find('a:gt(2)').each(function(){
                $(this).css({'display':'none'});
                if($(this).hasClass('js-show-all-departments')) {
                    $(this).css({'display':'inline'});
                }
            });

            $('.js-show-all-departments').click(function(e){
                e.preventDefault();
                $(this).parent().find('a:gt(2):not(.js-show-all-departments)').toggle();
            });
            } else {
               $('.all-departments_block').find('a:gt(2)').each(function(){
                    $(this).css({'display':'inline'});
               });
            }
        }

        allDepartments();

        $(window).resize(function(){
            moveMenu();
            allDepartments();
        });

        var benefitsSlider = new Swiper('.js-benefitsSlider', {
            centeredSlides: true,
            loop: false,
            speed: 700,
             scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            }
        });

});
