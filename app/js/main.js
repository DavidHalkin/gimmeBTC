$(document).ready(function(){
   // $(".nano").nanoScroller();
   // add overlay
    $('body').append('<span class="menu_overlay"></span>');
   $(".dell_js").click(function(){
        $(this).parents(".message_row_js").remove()
        return false;
    });
   $(".message_link_js").click(function(){
        $(".message_drop_js").toggleClass("opened");
        $(this).toggleClass("active");
        return false;
    });
    $(".message_drop_close_js").click(function(){
        $(".message_drop_js").removeClass("opened");
        $(".message_link_js").removeClass("active");
        return false;
    });
    // open menubar
     $(".btn_mob_js").click(function(){
        $(".bar_menu").toggleClass("opened");
        $(".menu_overlay").toggleClass("opened");
    });
      $(".menu_overlay").click(function(){
        $(".bar_menu").toggleClass("opened");
        $(".menu_overlay").toggleClass("opened");
    });
      // show etc forms
    $(".show_link_js").click(function(){
        $(this).parent().addClass("opened");
        $(this).parent().next().slideDown("fast");
        return false;
    });
});
