
var $ = jQuery.noConflict(true);

/* Sticky header */
(function() {
    var ID = "#access"; // Specify header selector
    var width = [$(ID).width(), "px"].join("");
    $(ID).css({width:width});
    var divOffsetTop = $(ID).offset().top;
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= divOffsetTop) {
            $(ID)
            .css({position: "fixed", top: "0px", width: width});
        } else {
            $(ID).css({position: "", top: [divOffsetTop,"px"].join("")});
        }
        delete top;
    });
})();

/* Sticky footer */
(function() {
    var selector = ".footer"; /* Specify footer selector */
    var bottomPadding = 80; /* Specify bottomPadding  for footer */
    
    var wh = $(window).height(),/* Window height  */
     dh = $(document).height();/* Document height */
    if(wh <= dh) {
        $(selector).css({
            top: (wh-padding) + "px",
            position: 'absolute'
        });
    }
})();