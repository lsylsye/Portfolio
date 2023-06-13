$(function () {
  /* AOS */
  AOS.init();
  /* 새로고침 */


  /* 헤더 클릭 */
  let menu = $('header ul li')
  menu.click(function () {
    let menuIndex = $(this).index();
    let contPage = $('.cont').eq(menuIndex);
    let contPageTop = contPage.offset().top;

    $('html, body').animate({
      scrollTop: contPageTop - 80
    }, 800, 'linear')
  }) // menu.click()

  /* 헤더 스크롤 */
  $(window).scroll(function () {
    let scrollBar = $(window).scrollTop();

    if ($('.about').offset().top - 120 <= scrollBar) {
      menu.removeClass('on');
      menu.eq(0).addClass('on');
    } else menu.removeClass('on');
    if ($('.web').offset().top - 130 <= scrollBar) {
      menu.removeClass('on');
      menu.eq(1).addClass('on');
    }
    if ($('.mobile').offset().top + 350 <= scrollBar) {
      menu.removeClass('on');
      menu.eq(2).addClass('on');
    }
    if ($('.design').offset().top - 100 <= scrollBar) {
      menu.removeClass('on');
      menu.eq(3).addClass('on');
    }
    if ($('.interest').offset().top - 180 <= scrollBar) {
      menu.removeClass('on');
      menu.eq(4).addClass('on');
    }
    if ($('footer').offset().top - 120 <= scrollBar) {
      menu.removeClass('on');
      menu.eq(5).addClass('on');
    }
  }) //widow.scroll

  /* WEB 슬라이드 */
  var swiper = new Swiper(".website", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* WEB 상세페이지 열기 */
  let detailBtn = $('.detail_btn');
  let closeBtn = $('.xi-close');
  let detailPage = $('.detail');
  let bg = $('.click_bg');
  let webScrollPosition = 0;

  detailBtn.on('click', function (e) {
    e.preventDefault();
    webScrollPosition = $(window).scrollTop();
    detailPage.css('display', 'block');
    bg.addClass('on');
    $(window).scrollTop(webScrollPosition);
  });

  //상세페이지 닫기
  closeBtn.on('click', function () {
    detailPage.css('display', 'none');
    bg.removeClass('on');
    $(window).scrollTop(webScrollPosition);
  });

  bg.click(function () {
    if (detailPage.css('display') == 'block') {
      detailPage.css('display', 'none');
      bg.removeClass('on');
    }
  });

  /* mobile 호버 */
  let mockUp1 = $('.juicy .mockup');
  let mockUpImg1 = $('.juicy .mockup img');
  let info1 = $('.juicy .info');
  let click1 = $('.juicy .click');

  mockUp1.hover(function () {
    mockUpImg1.attr('src', 'img/mobile_mockup_1.png');
    info1.css('opacity', 1);
    setTimeout(function () {
      click1.css('display', 'block');
    }, 2000)
  }) //juicy

  let mockUp2 = $('.emart24 .mockup');
  let mockUpImg2 = $('.emart24 .mockup img');
  let info2 = $('.emart24  .info');
  let click2 = $('.emart24 .click');

  mockUp2.hover(function () {
    mockUpImg2.attr('src', 'img/mobile_mockup_2.png');
    info2.css('opacity', 1);
    setTimeout(function () {
      click2.css('display', 'block');
    }, 2000)
  }) //emart24

  /* mobile 클릭 이미지 변경 */
  let img1 = 'img/mobile_mockup_1.png';
  let img2 = 'img/mobile_mockup_1-2.png';
  let img3 = 'img/mobile_mockup_1-3.png';
  let img4 = 'img/mobile_mockup_1-4.png';
  let img5 = 'img/mobile_mockup_1-5.png';
  let img6 = 'img/mobile_mockup_1-6.png';
  let img7 = 'img/mobile_mockup_1-7.png';
  let img8 = 'img/mobile_mockup_1-8.png';
  let img9 = 'img/mobile_mockup_1-9.png';
  let imgList1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  let i1 = 0;

  mockUp1.click(function () {
    i1 = (i1 + 1) % imgList1.length;
    mockUpImg1.attr('src', imgList1[i1]);
  }); //juicy

  let img01 = 'img/mobile_mockup_2.png';
  let img02 = 'img/mobile_mockup_2-2.png';
  let img03 = 'img/mobile_mockup_2-3.png';
  let img04 = 'img/mobile_mockup_2-4.png';
  let imgList2 = [img01, img02, img03, img04];
  let i2 = 0;

  mockUp2.click(function () {
    i2 = (i2 + 1) % imgList2.length;
    mockUpImg2.attr('src', imgList2[i2]);
  }); //emart24

  /* mobile 상세페이지 열기 */
  let juicyBtn = $('.juicy .detail_btn2');
  let emartBtn = $('.emart24 .detail_btn2');
  let closeBtn2 = $('.detail2 .xi-close');
  let juicyPage = $('.detail2.juicy');
  let emartPage = $('.detail2.emart24');
  let mobileScrollPosition = 0;

  juicyBtn.on('click', function (e) {
    e.preventDefault();
    mobileScrollPosition = $(window).scrollTop();
    juicyPage.css('display', 'block');
    bg.addClass('on');
    $(window).scrollTop(mobileScrollPosition);
  });

  emartBtn.on('click', function (e) {
    e.preventDefault();
    mobileScrollPosition = $(window).scrollTop();
    emartPage.css('display', 'block');
    bg.addClass('on');
    $(window).scrollTop(mobileScrollPosition);
  });

  //상세페이지 닫기
  closeBtn2.on('click', function () {
    juicyPage.css('display', 'none');
    emartPage.css('display', 'none');
    bg.removeClass('on');
    $(window).scrollTop(mobileScrollPosition);
  });
  bg.click(function () {
    if (juicyPage.css('display') == 'block' || emartPage.css('display') == 'block') {
      juicyPage.css('display', 'none');
      emartPage.css('display', 'none');
      bg.removeClass('on');
    }
  });


  /* 스크롤 모션 */
  $(window).scroll(function () {
    let scrollBar = window.scrollY;

    //로딩페이지
    let loadingBox = $('.loading .box');
    let loadingBtn = $('.loading .button');
    let circle1 = $('.loading .rectangle img:nth-child(6)');
    let circle2 = $('.loading .rectangle img:nth-child(7)');
    let circle3 = $('.loading .rectangle img:nth-child(8)');

    if ($('.loading').offset().top + 1050 < scrollBar) {
      loadingBox.addClass('on');
      loadingBtn.addClass('on');
      loadingBox.css('position', 'static');
    } else {
      loadingBox.removeClass('on');
      loadingBtn.removeClass('on');
      loadingBox.css('position', 'fixed');
    }
    if ($('.loading').offset().top + 1300 < scrollBar) {
      loadingBtn.css('position', 'static');
      loadingBox.css('position', 'static');
    } else {
      loadingBox.css('position', 'fixed');
      loadingBtn.css('position', 'fixed');
    }

    if ($('.about').offset().top - 1600 < scrollBar) {
      circle1.addClass('on');
      circle2.addClass('on');
      circle3.addClass('on');
    } else {
      circle1.removeClass('on');
      circle2.removeClass('on');
      circle3.removeClass('on');
    }
    
    //헤더 나타나기
    if ($('.about').offset().top - 350 < scrollBar) {
      $('header').css('display', 'block');
    } else {
      $('header').css('display', 'none');
    }



    // design 포스터 교차 스크롤
    let poster = $('.poster .list .item');

    for (let i = 0; i < poster.length; i++) {
      if ($('.poster').offset().top - 900 < scrollBar) {
        $(poster[i]).addClass('on' + i);
      } else {
        $(poster[i]).removeClass('on' + i);
      }
    }
    for (let i = 3; i < poster.length; i++) {
      if ($('.poster').offset().top - 300 < scrollBar) {
        $(poster[i]).addClass('on' + i);
      } else {
        $(poster[i]).removeClass('on' + i);
      }
    }
    for (let i = 6; i < poster.length; i++) {
      if ($('.poster').offset().top + 350 < scrollBar) {
        $(poster[i]).addClass('on' + i);
      } else {
        $(poster[i]).removeClass('on' + i);
      }
    }

    /* INTEREST 상세페이지 열기 */
    let interestBtn = $('.interest_btn');
    let interestPage = $('.interestDetail');
    let pageImg = $('.interestDetail img');
    let img1 = 'img/web_vogue_detail.png';
    let img2 = 'img/mobile_juicy_detail.png';
    let img3 = 'img/web_seoulmilk_detail.png';
    let closeBtn3 = $('.interestDetail .xi-close');
    let interestScrollPosition = 0;

    interestBtn.eq(0).on('click', function (e) {
      e.preventDefault();
      interestScrollPosition = $(window).scrollTop();
      interestPage.css('display', 'block');
      pageImg.attr('src', img1);
      bg.addClass('on');
      $(window).scrollTop(interestScrollPosition);
    });
    interestBtn.eq(1).on('click', function (e) {
      e.preventDefault();
      interestScrollPosition = $(window).scrollTop();
      interestPage.css('display', 'block');
      pageImg.attr('src', img2);
      bg.addClass('on');
      $(window).scrollTop(interestScrollPosition);
    });
    interestBtn.eq(2).on('click', function (e) {
      e.preventDefault();
      interestScrollPosition = $(window).scrollTop();
      interestPage.css('display', 'block');
      pageImg.attr('src', img3);
      bg.addClass('on');
      $(window).scrollTop(interestScrollPosition);
    });

    //상세페이지 닫기

    closeBtn3.click(function () {
      if (interestPage.css('display') == 'block') {
        interestPage.css('display', 'none');
        bg.removeClass('on');
      }
    });
    bg.click(function () {
      if (interestPage.css('display') == 'block') {
        interestPage.css('display', 'none');
        bg.removeClass('on');
      }
    });

    //footer 스크롤
    let footer = $('footer');

    if (footer.offset().top - 400 < scrollBar) {
      footer.addClass('on');
    } else {
      footer.removeClass('on');
    }

  }); //window.scroll


}); //jqurey end