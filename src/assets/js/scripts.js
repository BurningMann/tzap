if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.querySelector('html').classList.add('mobile') 
}

if(navigator.platform.match('Mac') !== null) {
  document.body.setAttribute('class', 'OSX');
}

window.onload = function(){

  function checkInner(width){
    if(window.innerWidth <= width){
      return true
    }else{
      return false
    }
  }

  $('.region__main').click(function(){
    $(this).toggleClass('active')
    $('.region__drop').slideToggle()
  })

  $(window).resize(function() {

  });

  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function(){
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })

  if(location.host.includes('localhost')){
    $('.sitemap__link').map(function(index,element){
      let link = $(element).attr('href')
      let re = /\/tzap/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }

  // var observer = lozad('[data-lazysrc]', {
  //   threshold: 0.1,
  //   enableAutoReload: true,
  //   load: function(el) {
  //     el.src = el.getAttribute("data-lazysrc");
  //     /* el.srcset = el.getAttribute("data-lazysrc"); */
  //     el.onload = function() {
  //       $(el).addClass("load")
  //     }
  //   }
  // })
  // observer.observe()
}