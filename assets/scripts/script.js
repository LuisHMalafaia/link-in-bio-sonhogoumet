const primaryColor = "#8F4B25";
const white = "#FFFFFF";

$(document).ready(function(){
    var active_button = $("#links");

    $("#links").click(() => menuAnimation($("#links"), $(".links")));
    $("#cardapio").click(() => menuAnimation($("#cardapio"), $(".cardapio")));
    $("#info").click(() => menuAnimation($("#info"), $(".info")));

    function menuAnimation(elem, content){
        active_button.children(".menu__item__line").css("background-color", white);
        active_button = elem;

        elem.children(".menu__item__line").css("background-color", primaryColor);

        /*console.log(content.css("left"));*/
        let id_item = elem.get(0).id;
        let pos = 0;
        let scroll_width =  $(".menu__items__container").get(0).scrollWidth - $(".menu__items").width();

        if(id_item == "links")  
            pos = 0;
        else if(id_item == "cardapio")
            pos = scroll_width/2;
        else if(id_item == "info")
            pos = scroll_width;

        $(".menu__items__container").animate({scrollLeft: pos});

        let link = parseInt($(".links").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px";
        let cardapio = parseInt($(".cardapio").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px";
        let info = parseInt($(".info").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px"

        $(".links").animate({left: link});
        $(".cardapio").animate({left: cardapio});
        $(".info").animate({left: info});
    }

    //Toggle button
    /*$('#items__brig').css('display', 'flex');
    $('#brig').children('img').css('rotate', '90deg');*/

    $(".cardapio__title").click(function(){
        let id = $(this).attr('id');
        let rotate = $(this).children('img').css('rotate');

        rotate = (rotate == 'none') ? '0deg' : rotate;

        if(rotate == '0deg'){
            $('#items__' + id).addClass("animated");
            $(this).children('img').css('rotate', '90deg');
        }else {
            $('#items__' + id).removeClass("animated");
            $(this).children('img').css('rotate', '0deg');
        }    

    });

});