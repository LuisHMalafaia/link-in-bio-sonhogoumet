const primaryColor = "#3E2723";
const secondaryColor = "#D81B60";
const white = "#FFF8E1";

$(document).ready(function(){
    var active_button = $("#links");

    $("#links").click(() => menuAnimation($("#links"), $(".links")));
    $("#cardapio").click(() => menuAnimation($("#cardapio"), $(".cardapio")));
    $("#info").click(() => menuAnimation($("#info"), $(".info")));

    function menuAnimation(elem, content){
        let id_item = active_button.get(0).id;
        let src = id_item == "links" ? "icon-link.svg" : (id_item == "cardapio" ? "icon-book.svg" : "icon-info.svg");

        active_button.children(".menu__item__content").children(".menu__item__title").css("color", primaryColor);
        active_button.children(".menu__item__line").css("background-color", white);
        active_button.children(".menu__item__content").children(".menu__item__icon").children("img").attr('src', 'assets/images/' + src);
        active_button = elem;

        id_item = elem.get(0).id;
        src = id_item == "links" ? "icon-link2.svg" : (id_item == "cardapio" ? "icon-book2.svg" : "icon-info2.svg");

        elem.children(".menu__item__line").css("background-color", secondaryColor);
        elem.children(".menu__item__content").children(".menu__item__title").css("color", secondaryColor);
        elem.children(".menu__item__content").children(".menu__item__icon").children("img").attr('src', 'assets/images/' + src);

        let scroll_width =  $(".menu__items__container").get(0).scrollWidth - $(".menu__items").width();
        let pos = id_item == "links" ? 0 : (id_item == "cardapio" ? scroll_width/2 : scroll_width);

        $(".menu__items__container").animate({scrollLeft: pos});

        let link = parseInt($(".links").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px";
        let cardapio = parseInt($(".cardapio").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px";
        let info = parseInt($(".info").css("left").replace("px", "") - content.css("left").replace("px", "")) + "px"

        $(".links").animate({left: link});
        $(".cardapio").animate({left: cardapio});
        $(".info").animate({left: info});
    }

    $("#links").click(function (){
        console.log($(this).attr('id'));
    });

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