$(document).ready(function(){$('#menu_movel').slideToggle(0);$('#menu_movel').css({visibility:'visible'});$('#ul_language').slideToggle(0);$('#ul_language').css({visibility:'visible'});$('a').click(function(){$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top-60},1000);return false;});$('#menu_movel a').click(function(){$('#menu_movel').slideToggle(500);});$('#btt_scroll_top').hide();$('#btt_menu').click(function(){if($('#ul_language').is(':visible')){$('#ul_language').slideUp();}$('#menu_movel').slideToggle(400);});var lastScrollTop=0;$(window).scroll(function(){var current_position=$(this).scrollTop();if(current_position>$(window).height()/8){if($("#c_header").css('backgroundColor').toLowerCase()!='rgb(255, 255, 255)'){$('#c_header').css({transition:'700ms'});$('#c_header').css({backgroundColor:'white',"color":"rgb(150,150,150)"});$('#page_title').css({"color":"rgb(0,109,255)"});$('#btt_menu').css({"background-image":"url(image/menu_movel_mycolor.png)"});}}else{if($("#c_header").css('backgroundColor').toLowerCase()!='rgba(0, 0, 0, 0)'){$('#c_header').css({transition:'700ms'});$('#c_header').css({"color":"white","background-color":"transparent"});$('#page_title').css({"color":"white"});$('#btt_menu').css({"background-image":"url(image/menu_movel.png)"});}}if(current_position>$("#capa").height()){$('#c_header').addClass("c_header_1");}else{$('#c_header').removeClass("c_header_1");$('#btt_scroll_top').hide();}if($('#menu_movel').is(':visible')){$('#menu_movel').slideUp();}if($('#ul_language').is(':visible')){$('#ul_language').slideUp();}if(current_position>$(window).height()){if(lastScrollTop<current_position){if($('#c_header').is(':visible')){$('#c_header').css({transition:'0s'});$('#c_header').slideUp();$('#btt_scroll_top').hide();}}else{if($('#c_header').is(':visible')==false){$('#c_header').css({transition:'0s'});$('#c_header').slideDown();$('#btt_scroll_top').show();}}}lastScrollTop=current_position;$('.translate').each(function(i){var bottom_of_object=$(this).offset().top+$(this).outerHeight();var bottom_of_window=$(window).scrollTop()+$(window).height();if(bottom_of_window>bottom_of_object){$(this).css({transform:'translate3d(0, 0, 0)',opacity:'1'});}});var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height();if($('#divSobre').offset().top-200<=docViewTop&&$('#divSobre').offset().top+$('#divSobre').height()-200>docViewTop){$('#SOBRE').addClass("li_menu_pc_selected");$('#DOWNLOAD').removeClass("li_menu_pc_selected");$('#RECURSOS').removeClass("li_menu_pc_selected");$('#how_use').removeClass("li_menu_pc_selected");$('#developer').removeClass("li_menu_pc_selected");}else if($('#divDOWNLOAD').offset().top-200<=docViewTop&&$('#divRECURSOS').offset().top-200>docViewTop){$('#SOBRE').removeClass("li_menu_pc_selected");$('#DOWNLOAD').addClass("li_menu_pc_selected");$('#RECURSOS').removeClass("li_menu_pc_selected");$('#how_use').removeClass("li_menu_pc_selected");$('#developer').removeClass("li_menu_pc_selected");}else if($('#divRECURSOS').offset().top-200<=docViewTop&&$('#divComoUsar').offset().top-200>docViewTop){$('#SOBRE').removeClass("li_menu_pc_selected");$('#DOWNLOAD').removeClass("li_menu_pc_selected");$('#RECURSOS').addClass("li_menu_pc_selected");$('#how_use').removeClass("li_menu_pc_selected");$('#developer').removeClass("li_menu_pc_selected");}else if($('#divComoUsar').offset().top-200<=docViewTop&&$('#divDesenvolvidor').offset().top-300>docViewTop){$('#SOBRE').removeClass("li_menu_pc_selected");$('#DOWNLOAD').removeClass("li_menu_pc_selected");$('#RECURSOS').removeClass("li_menu_pc_selected");$('#how_use').addClass("li_menu_pc_selected");$('#developer').removeClass("li_menu_pc_selected");}else if($('#divDesenvolvidor').offset().top-300<=docViewTop){$('#SOBRE').removeClass("li_menu_pc_selected");$('#DOWNLOAD').removeClass("li_menu_pc_selected");$('#RECURSOS').removeClass("li_menu_pc_selected");$('#how_use').removeClass("li_menu_pc_selected");$('#developer').addClass("li_menu_pc_selected");}else{$('#SOBRE').removeClass("li_menu_pc_selected");$('#DOWNLOAD').removeClass("li_menu_pc_selected");$('#RECURSOS').removeClass("li_menu_pc_selected");$('#how_use').removeClass("li_menu_pc_selected");$('#developer').removeClass("li_menu_pc_selected");}});$("#btt_scroll_top").click(function(){$('html, body').animate({scrollTop:$("#capa").offset().top},700);});});function onload_all(){var tamanho=0;var ce_container=$("#ce_container").width();var width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var child_width=$("#ce_child").width();var translate=0;var v_translate=0;var v_ce_container=$("#ce_container_v").height();var height=$("#ce_outer_v").height();setInterval(function(){if(width>1200){$("#ce_container").css({transform:'translate3d(-'+translate+'px, 0, 0)'});if(translate+100>=ce_container-4*child_width)translate=0;else
translate=translate+child_width;}else if(width>800){$("#ce_container").css({transform:'translate3d(-'+translate+'px, 0, 0)'});if(translate>=ce_container-3*child_width)translate=0;else
translate=translate+child_width;}else if(width>550){$("#ce_container").css({transform:'translate3d(-'+translate+'px, 0, 0)'});if(translate+100>=(ce_container-2*child_width))translate=0;else
translate=translate+child_width;}else{$("#ce_container").css({transform:'translate3d(-'+translate+'px, 0, 0)'});if(translate+100>=(ce_container-child_width))translate=0;else
translate=translate+child_width;}$("#ce_container_v").css({transform:'translate3d(0, -'+v_translate+'px, 0)'});if(v_translate+height+100<v_ce_container)v_translate=v_translate+height;else
v_translate=0;},2500);}function btt_language(){if($("#c_header").css('backgroundColor').toLowerCase()!='rgb(255, 255, 255)'){$('#c_header').css({transition:'700ms'});$('#c_header').css({backgroundColor:'white',"color":"rgb(150,150,150)"});$('#page_title').css({"color":"rgb(0,109,255)"});$('#btt_menu').css({"background-image":"url(image/menu_movel_mycolor.png)"});}if($('#menu_movel').is(':visible')){$('#menu_movel').slideUp();}$("#ul_language").slideToggle(300);}function google_analitc(op){if(op==1){ga('send','event','Downloads','Windows','Download Windows');location.href="https://drive.google.com/uc?export=download&id=0B18mJ6syAhjZX2lsNWxzeU9DX1E";}else if(op==2){ga('send','event','Downloads','Android','Download Android');location.href="https://drive.google.com/uc?export=download&id=0B18mJ6syAhjZMS1ReW5DZ2paQWs";}else if(op==3){ga('send','event','Downloads','Windows','Download Windows 1');location.href="https://drive.google.com/uc?export=download&id=0B18mJ6syAhjZX2lsNWxzeU9DX1E";}else if(op==4){ga('send','event','Downloads','Android','Download Android');location.href="https://drive.google.com/uc?export=download&id=0B18mJ6syAhjZMS1ReW5DZ2paQWs";}}