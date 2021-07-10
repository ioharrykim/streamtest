$(function() {
    //header Function
    $('header ul li').click(function(){
        $('header ul li').removeClass('on');
        $(this).addClass('on');
    })

    $('.trigger').click(function(){
        $('body').toggleClass('hidden');
        $(this).toggleClass('on');
        $('header nav').toggleClass('on');
    })

    //Recom
    var swiper = new Swiper(".recom-slide", {
        slidesPerView: 'auto',
        breakpoints: {
            768: {
            slidesPerView: 'auto',
            },
            1024: {
            slidesPerView: 'auto',
            }
        }
    });

    //Music
    var swiper = new Swiper(".music-slide", {
        slidesPerView: 'auto',
        slidesBetween: 20,
    });

    //News
    var swiper = new Swiper(".news-slide", {
        slidesPerView: 'auto',
        slidesBetween: 20,
    });

    $('.check label').click(function(){
        $(this).toggleClass('on');
    })

    //이메일 정규식
    $("#emailletter").submit(function() {
        if($('#check').is(":checked") == false){
            alert('Please check first.')
            return false;
        }
        else if($('#txt').val() == ''){
            alert('Please enter your e-mail address.');
            $('#txt').focus();
            return false;
        }
    });

    // external js: isotope.pkgd.js

    //Blog
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

  //theme change
$('.theme-btn').click(function(){
    if($('body').hasClass('on')) {
        $('body').removeClass('on');
        $('.theme-btn span').text('White Theme');
    }
    else {
        $('body').addClass('on');
        $('.theme-btn span').text('Dark Theme');
    }
    
})
})