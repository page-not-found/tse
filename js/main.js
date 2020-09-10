 /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
 /*Scroll to top when arrow up clicked END*/
$(function(){
    function setHeight(){
        $(".response").each(function(index,element){
            var target = $(element);
            target.removeClass("fixed-height");
            var height = target.innerHeight();
            target.attr("data-height", height)
                  .addClass("fixed-height");
        });
    };
    $("input[name=question]").on("change", function(){
        $("p.response").removeAttr("style");  
        var target = $(this).next().next();
        target.height(target.attr("data-height"));
    }) 
    setHeight();
});

$(function () {
        $('#WAButton').floatingWhatsApp({
       phone: '919106525680', //WhatsApp Business phone number
       headerTitle: 'Chat with us on WhatsApp!', //Popup Title
       popupMessage: 'Hello, how can we help you?', //Popup Message
       showPopup: true, //Enables popup display
       buttonImage: '<img src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png"/>',
       position: "left" //Position: left | right
   });
});