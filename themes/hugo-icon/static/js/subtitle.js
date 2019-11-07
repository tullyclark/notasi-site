var divs = $('span[id^="subtitle-"]').hide(),
    i = 0;

(function cycle() { 

    divs.eq(i).fadeIn(200)
              .delay(2000)
              .fadeOut(200, cycle);

    i = ++i % divs.length;

})();