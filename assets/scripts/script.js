const primaryColor = "#8F4B25";
const white = "#FFFFFF";

$(document).ready(function(){
    var active_button = $("#links");

    $("#links").click(() => menuAnimation($("#links"), $(".links")));
    $("#cardapio").click(() => menuAnimation($("#cardapio"), $(".cardapio")));
    $("#cardapio-natal").click(() => menuAnimation($("#cardapio-natal"), $(".cardapio_natal")));

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
        else if(id_item == "cardapio-natal")
            pos = scroll_width;

        $(".menu__items__container").animate({scrollLeft: pos});

        let link = parseInt($(".links").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px";
        let cardapio = parseInt($(".cardapio").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px";
        let cardapio_natal = parseInt($(".cardapio_natal").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px"

        $(".links").animate({left: link});
        $(".cardapio").animate({left: cardapio});
        $(".cardapio_natal").animate({left: cardapio_natal});
    }

});