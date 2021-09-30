
jQuery(document).ready(function($){
  $('.owl-carousel-header').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1,
              autoHeight:false
          }
      }
  })
  let slider = $('.owl-carousel-testimonis');
  slider.each(function () {
    $(this).owlCarousel({
      nav: true,
      loop:false,
      dots: false,
      pagination: false,
      margin: 28,
      autoHeight: false,
      stagePadding: 50,
      responsive:{
        0:{
          items: 1,
          stagePadding: 0,
          margin: 30,
        },
        767:{
          items: 3,
          stagePadding: 25,
        },
        1000:{
          items: 2,
        }
      }
    });
  });
  $('.owl-carousel-blog').owlCarousel({
      loop:true,
      margin:80,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2,
              autoHeight:true
          }
      }
  });

  $('.owl-carousel-casos').owlCarousel({
      loop:true,
      margin:74,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3,
              autoHeight:false
          }
      }
  });

  $('.owl-carousel-casos-images').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  $('.owl-carousel-timeline').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:6
          }
      }
  });
  var owl = $('.owl-carousel-timeline');
  owl.owlCarousel();
  // Go to the next item
  $('.owl-next-custom').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.owl-prev-custom').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
  })

  // carousel timeline
  $('.owl-carousel-timeline .owl-item .item').on('click', function() {
    var theHash = $(this).attr('data-hash');
    $('.owl-carousel-timeline .item').removeClass('item-year-active');
    $(this).addClass('item-year-active');
    $('.carousel-timeline-info-content').each(function(){
      if ($(this).attr('data-year') == theHash ) {
        $('.carousel-timeline-info-content').fadeOut(10);
        $(this).fadeIn();
      }
    });
  });

  // el centre - planol
  $('.planol-box .planol-location').on('click', function() {
    var theLocation = $(this).attr('data-location');
    $('.location-item').each(function(){
      if ($(this).attr('data-planol') == theLocation ) {
        $('.location-item').fadeOut(10);
        $(this).fadeIn();
      }
    });
  });

  $('.equip-list a.col').on('click', function (e) {
    e.preventDefault();
    $('.equip-popup').removeClass('active');
    $(this).tab('show');
    $(this).tab().parent().parent().next().addClass('active');
  });
  $('.equip-list .icon-close').on('click', function (e) {
    e.preventDefault();
    $('.equip-popup, .equip-list a.col').removeClass('active');
    $('.tab-pane').removeClass('active show');
  });


  // projects list load more
  $(function () {
    $(".projectes-list").slice(0, 1).show();
    $("#loadMoreProjects").on('click', function (e) {
        e.preventDefault();
        $(".projectes-list:hidden").slice(0, 1).slideDown();
        if ($(".projectes-list:hidden").length == 0) {
            $("#loadMoreProjects").fadeOut('slow');
        }
        //$('html,body').animate({
        //  scrollTop: $(this).offset().top
        //}, 1500);
    });
  });

  // entitats logos load more
  $(function () {
    $(".entitats-publiques-list").slice(0, 1).show();
    $("#loadMoreEntitatsPubliques").on('click', function (e) {
        e.preventDefault();
        $(".entitats-publiques-list:hidden").slice(0, 1).slideDown();
        if ($(".entitats-publiques-list:hidden").length == 0) {
            $("#loadMoreEntitatsPubliques").fadeOut('slow');
        }
        //$('html,body').animate({
        //  scrollTop: $(this).offset().top
        //}, 1500);
    });
  });
  $(function () {
    $(".entitats-privades-list").slice(0, 1).show();
    $("#loadMoreEntitatsPrivades").on('click', function (e) {
        e.preventDefault();
        $(".entitats-privades-list:hidden").slice(0, 1).slideDown();
        if ($(".entitats-privades-list:hidden").length == 0) {
            $("#loadMoreEntitatsPrivades").fadeOut('slow');
        }
        //$('html,body').animate({
        //  scrollTop: $(this).offset().top
        //}, 1500);
    });
  });

  // blog load more
  $(function () {
    // $(".entry").slice(0, 5).show();
    $(".entry").slice(0, 5).addClass('active');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        // $(".entry:hidden").slice(0, 5).slideDown();
        $(".entry:hidden").slice(0, 5).slideDown().addClass('active');
        if ($(".entry:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        //$('html,body').animate({
        //  scrollTop: $(this).offset().top
        //}, 1500);
    });
  });

  // plubicacions load more
  $(function () {
    $(".publicacion-box").slice(0, 1).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".publicacion-box:hidden").slice(0, 1).slideDown();
        if ($(".publicacion-box:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1500);
    });
  });


});
