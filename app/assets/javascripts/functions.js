$(function() {

  "use strict";

  var $htmlBody = $("html,body");
  var $body = $("body");

  /*===============================================
    Preloaders
  ===============================================*/
  $(window).on("load", function () {
    $body.addClass("loaded");
  });

  if ($body.attr("data-preloader") === "1") {
    $body.append($("<div class='preloader preloader-1'><div><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "2") {
    $body.append($("<div class='preloader preloader-2'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div></div>"));
  }
  else if ($body.attr("data-preloader") === "3") {
    $body.append($("<div class='preloader preloader-3'><div><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "4") {
    $body.append($("<div class='preloader preloader-4'><div><span class='spinner'><span></div></div>"));
  }


  /*===============================================
    Background Image
  ===============================================*/
  $(".bg-image, .parallax-portfolio-item").each(function() {
    var bgData = $(this).attr("data-bg-src");
    $(this).css('background-image', 'url(' +bgData+ ')');
  });


  /*===============================================
    Navbar Menu
  ===============================================*/
  var nav = $(".nav");

  if (nav.length) {
    var navToggle = $(".nav-toggle-btn");
    //
    // Show Nav menu on Toggle //
    //
    navToggle.on("click", function(e) {
      var d = $(".nav-dropdown");
      var s = $(".sub-dropdown");
      var dMenu = $(".dropdown-menu");
      var sMenu = $(".sub-dropdown-menu");

      if (nav.hasClass("nav-show")) {
        nav.removeClass("nav-show");
        if (dMenu.hasClass("dropdown-menu-show")) {
          dMenu.removeClass("dropdown-menu-show");
          d.removeClass("dropdown-active");
        }
        if (sMenu.hasClass("sub-dropdown-menu-show")) {
          sMenu.removeClass("sub-dropdown-menu-show");
          s.removeClass("sub-dropdown-active");
        }
      }
      else {
        nav.addClass("nav-show");
      }
      e.stopPropagation();
    });

    //
    // Transform Navicon into X //
    //
    navToggle.on("click", function() {
      if (navToggle.hasClass("nav-toggle-close")) {
        navToggle.removeClass("nav-toggle-close");
      }
      else {
        navToggle.addClass("nav-toggle-close");
      }
    });

    //
    // Navbar Dropdown //
    //
    var dropdownBtn = $(".nav-dropdown .nav-link");
    var subDropdownBtn = $(".sub-dropdown a");

    dropdownBtn.on("click", function() {
      var d = $(this).parent(".nav-dropdown").children(".dropdown-menu");
      if (d.hasClass("dropdown-menu-show")) {
        d.removeClass("dropdown-menu-show");
      }
      else {
        d.addClass("dropdown-menu-show");
      }
    });

    subDropdownBtn.on("click", function(e) {
      var s = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");

      if (s.hasClass("sub-dropdown-menu-show"))  {
        s.removeClass("sub-dropdown-menu-show");
      }
      else {
        s.addClass("sub-dropdown-menu-show");
      }
      e.stopPropagation();
    });

    //
    // Add active class //
    //
    dropdownBtn.on("click", function() {
      var m = $(this).parent(".nav-dropdown").children(".dropdown-menu");
      var d = $(this).parent(".nav-dropdown");

      if (m.hasClass("dropdown-menu-show")) {
        d.addClass("dropdown-active");
      }
      else {
        d.removeClass("dropdown-active");
      }
    });

    subDropdownBtn.on("click", function() {
      var m = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");
      var s = $(this).parent(".sub-dropdown");

      if (m.hasClass("sub-dropdown-menu-show")) {
        s.addClass("sub-dropdown-active");
      }
      else {
        s.removeClass("sub-dropdown-active");
      }
    });

    //
    // Close Nav Menu //
    //
    $(document).on("click", function(e) {
      if ( $(e.target).closest(".nav:not(.onepage-nav)").length === 0 ) {
        if (nav.hasClass("nav-show")) {
          var d = $(".dropdown-menu");
          var s = $(".sub-dropdown-menu");

          nav.removeClass("nav-show");
          if (d.hasClass("dropdown-menu-show")) {
            d.removeClass("dropdown-menu-show");
            $(".nav-dropdown").removeClass("dropdown-active");
          }
          if (s.hasClass("sub-dropdown-menu-show")) {
            s.removeClass("sub-dropdown-menu-show");
            $(".sub-dropdown").removeClass("sub-dropdown-active");
          }
        }
        if (navToggle.hasClass("nav-toggle-close")) {
          navToggle.removeClass("nav-toggle-close");
        }
      }
    });

    //
    // Position Toggle Button to the left if Nav is aligned left //
    //
    if (nav.hasClass("mr-auto")) {
      navToggle.addClass("left");
    }

    /*===============================================
      Mega Menu
    ===============================================*/
    var megaMenuToggle = $(".nav-megadropdown");

    megaMenuToggle.on("click", function() {
      var m = $(this).children(".mega-menu");
      var l = $(this).children(".nav-link");
      if (m.hasClass("mega-menu-show")) {
        m.removeClass("mega-menu-show");
        l.removeClass("nav-link-active");
      }
      else {
        m.addClass("mega-menu-show");
        l.addClass("nav-link-active");
      }
    });

    //
    // Close Mega Menu //
    //
    var megaMenu = $(".mega-menu");

    navToggle.on("click", function() {
      if (megaMenu.hasClass("mega-menu-show")) {
        megaMenu.removeClass("mega-menu-show");
        $(".nav-link").removeClass("nav-link-active");
      }
    });

    $(document).on("click", function(e) {
      if ( $(e.target).closest(".nav").length === 0 ) {
        if (megaMenu.hasClass("mega-menu-show")) {
          megaMenu.removeClass("mega-menu-show");
          $(".nav-link").removeClass("nav-link-active");
        }
      }
    });
  }

  //
  // Prevent content jumping to top on click(href='#') //
  //
  $(".navbar a[href='#']").on("click", function(e) {
    e.preventDefault();
  });

  //
  // Sticky Navbar //
  //
  if ($(".navbar-sticky").length) {
    var navbarSticky = $(".navbar-sticky");
    var navbarOffset = navbarSticky.offset().top;

    $(window).on("scroll", function() {
      var navbarPlaceholder = $(".navbar-placeholder");

      if ($(window).scrollTop() >= navbarOffset) {
        navbarSticky.addClass("navbar-sticky-apply");
        navbarPlaceholder.addClass("navbar-placeholder-padding");
      }
      else {
        navbarSticky.removeClass("navbar-sticky-apply");
        navbarPlaceholder.removeClass("navbar-placeholder-padding");
      }

      if ($(window).scrollTop() >= navbarOffset + 20) {
        navbarSticky.addClass("navbar-shrink");
      }
      else {
        navbarSticky.removeClass("navbar-shrink");
      }
    });
    // Navbar Sticky Placeholder
    $("<div class='navbar-placeholder'></div>").insertAfter(".navbar-sticky");
  }


  /*===============================================
    Shrink Navbar when starts scrolling
  ===============================================*/
  var navbarFixed = $(".navbar-fixed");

  if (navbarFixed.length) {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 10) {
        navbarFixed.addClass("navbar-shrink");
      } else {
        navbarFixed.removeClass("navbar-shrink");
      }
    });
  }


  /*===============================================
    Fullscreen Toggle Menu
  ===============================================*/
  var fMenu = $(".fullscreen-menu");

  if (fMenu.length) {
    var fToggle = $(".fullscreen-toggle-btn");
    //
    // Show Menu on Toggle //
    //
    fToggle.on("click", function(e) {
      if (fMenu.hasClass("fullscreen-menu-show")) {
        fMenu.removeClass("fullscreen-menu-show");
      }
      else {
        fMenu.addClass("fullscreen-menu-show");
      }
      e.stopPropagation();
    });

    //
    // Hide Toggle button //
    //
    fToggle.on("click", function() {
      if (fToggle.hasClass("fullscreen-toggle-hide")) {
        fToggle.removeClass("fullscreen-toggle-hide");
      }
      else {
        fToggle.addClass("fullscreen-toggle-hide");
      }
    });

    //
    // Close Toggle menu //
    //
    $(document).on("click", function(e) {
      if ( $(e.target).closest(".fullscreen-menu-wrapper a").length === 0 ) {
        if (fMenu.hasClass("fullscreen-menu-show")) {
          fMenu.removeClass("fullscreen-menu-show");
          fToggle.removeClass("fullscreen-toggle-hide");
        }
      }
    });
  }


  /*===============================================
    SmoothScroll buttons
  ===============================================*/
  var ssBtn = $(".navbar a, .smoothscroll");

  ssBtn.on("click", function(e) {
    $htmlBody.animate({scrollTop: $(this.hash).offset().top}, 700, "easeInOutQuart");
    e.preventDefault();
  });


  /*===============================================
    Scroll to top button
  ===============================================*/
  var scrollTopBtn = $(".scrolltotop");

  if (scrollTopBtn.length) {
    //
    // Show/Hide button //
    //
    $(window).on("scroll", function(){
      if ($(this).scrollTop() > 700) { // 700px from top
        scrollTopBtn.addClass("scrolltotop-show");
      }
      else {
        scrollTopBtn.removeClass("scrolltotop-show");
      }
    });

    //
    // Animate button //
    //
    scrollTopBtn.on("click", function(){
      $htmlBody.animate({scrollTop : 0}, 600, "easeInOutQuart");
      return false;
    });
  }


  /*===============================================
    Portfolio
  ===============================================*/
  $(".portfolio-wrapper").imagesLoaded(function() {
    var $portfolioWrapper = $(".portfolio-wrapper").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 300 // 0.3 second
    });
    var filter = $(".filter ul li");

    // Portfolio Filter //
    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });


  /*===============================================
    Owl Carousel Sliders
  ===============================================*/
  $(".owl-carousel").each( function() {
    var $carousel = $(this);

    var $defaults = {
      rewind: true,
      navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
      autoHeight: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 400,
      autoplayHoverPause: true,
      navSpeed: 350,
      dotsSpeed: 350
    }

    var $options = {
      items: $carousel.data("owl-items"),
      margin: $carousel.data("owl-margin"),
      loop: $carousel.data("owl-loop"),
      center: $carousel.data("owl-center"),
      nav: $carousel.data("owl-nav"),
      rewind: $carousel.data("owl-rewind"),
      dots: $carousel.data("owl-dots"),
      autoplay: $carousel.data("owl-autoplay")
    }

    var $responsive = {
      responsive: {
        0 : {
          items: $carousel.data("owl-xs")
        },
        576 : {
          items: $carousel.data("owl-sm")
        },
        768 : {
          items: $carousel.data("owl-md")
        },
        992 : {
          items: $carousel.data("owl-lg")
        },
        1200 : {
          items: $carousel.data("owl-xl")
        }
      }
    }

    $carousel.owlCarousel( $.extend( $defaults, $options, $responsive) );

    var customPrev = $("#customPrev");
    var customNext = $("#customNext");

    customNext.on("click", function(){
      $carousel.trigger("next.owl.carousel", [350]);
    });
    customPrev.on("click", function(){
      $carousel.trigger("prev.owl.carousel", [350]);
    });
  });


  /*===============================================
    Blog Masonry
  ===============================================*/
  var $blogMasonry = $(".blog-masonry").imagesLoaded( function() {
    $blogMasonry.masonry({
      itemSelector: '.blog-post-box'
    });
  });


  /*===============================================
    Masonry
  ===============================================*/
  var $masonryGrid = $(".masonry").imagesLoaded( function() {
    $masonryGrid.masonry({
      itemSelector: '.masonry-item'
    });
  });


  /*===============================================
    Magnific Popup
  ===============================================*/
  //
  // Lightbox - Single Image //
  //
  $(".lightbox-image").each(function () {
    $(this).magnificPopup({
      type: 'image',
      fixedContentPos: false,
      removalDelay: 200,
      closeOnContentClick: true,
      image: {
        titleSrc: 'data-image-title'
      }
    });
  });

  //
  // Lightbox - Gallery //
  //
  $(".gallery-wrapper").each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });

  //
  // Lightbox - Youtube video //
  //
  $(".popup-youtube").each(function() {
    var popupYoutube = $(this);
    var youtubeSrc = popupYoutube.attr("data-youtube-src");

    popupYoutube.magnificPopup({
      items: { src: youtubeSrc },
      type: "iframe",
      fixedContentPos: false,
      removalDelay: 200,
      preloader: false,
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: "v=",
            src: youtubeSrc
          }
        },
        srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });
  });

  //
  // Lightbox - Vimeo video //
  //
  $(".popup-vimeo").each(function() {
    var popupVimeo = $(this);
    var vimeoSrc = popupVimeo.attr("data-vimeo-src");

    popupVimeo.magnificPopup({
      items: { src: vimeoSrc },
      type: "iframe",
      fixedContentPos: false,
      removalDelay: 200,
      preloader: false,
      iframe: {
        patterns: {
          vimeo: {
            index: "vimeo.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: "/",
            src: vimeoSrc
          }
        },
        srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });
  });


  /*===============================================
    Parallax
  ===============================================*/
  $(".parallax").jarallax({
    speed: 0.2
  });


  /*===============================================
    Countdown
  ===============================================*/
  //
  // Countdown - Legacy style //
  //
  $(".countdown").each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime(''
        + '<div><h2 class="font-weight-normal">%D</h2><h6 class="heading-uppercase">Days</h6></div>'
        + '<div><h2 class="font-weight-normal">%H</h2><h6 class="heading-uppercase">Hours</h6></div>'
        + '<div><h2 class="font-weight-normal">%M</h2><h6 class="heading-uppercase">Minutes</h6></div>'
        + '<div><h2 class="font-weight-normal">%S</h2><h6 class="heading-uppercase">Seconds</h6></div>'));
    });
  });

  //
  // Countdown - Basic style //
  //
  $(".countdown-basic").each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime('%D days %H:%M:%S'));
    });
  });


  /*===============================================
    Accordion
  ===============================================*/
  $(".accordion-title").each(function() {

    var $this = $(this);

    $this.on("click", function() {
      var accordionList = $this.parent("li");
      var accordionContent = this.nextElementSibling;

      if (accordionList.hasClass("active")) {
        accordionList.removeClass("active");
        accordionContent.style.maxHeight = null;
      }
      else {
        accordionList.addClass("active");
        if ($this.closest(".accordion").hasClass("single-open")) {
          $this.closest(".accordion").children("li").removeClass("active");
          accordionList.addClass("active");
          $this.parents(".single-open").find(".accordion-content").css("max-height", "0");
        }
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });

    //
    // Give max-height to Accordion's active content //
    //
    if ($this.parents(".accordion").find("li").hasClass("active")) {
      var accordionActiveContent = $this.parents(".accordion").find("li.active").children(".accordion-content");
      var accordionHeight = accordionActiveContent.prop("scrollHeight");

      accordionActiveContent.css({'max-height': accordionHeight + "px"});
    }

  });


  /*===============================================
    Counter
  ===============================================*/
  $(".counter").appear(function() {

    $(this).each(function () {
      $(this).prop("Counter",0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: "swing",
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });

  },{accX: 0, accY: -10});


  /*===============================================
    Popover
  ===============================================*/
  $('[data-toggle="popover"]').popover();


  /*===============================================
    Tooltip
  ===============================================*/
  $('[data-toggle="tooltip"]').tooltip();


  /*===============================================
    Easy Pie Chart
  ===============================================*/
  $(".pie-chart").appear(function() {

    $(this).each(function() {
      $(this).easyPieChart({
        lineCap: 'square',
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    });

  },{accX: 0, accY: -10});


});
