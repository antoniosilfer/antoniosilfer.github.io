
            
       $(document).ready(function(){          
           /* $('#menu_movel').slideToggle(0);
            $('#menu_movel').css({ visibility: 'visible'}); */
           
           
           
            $('#ul_language').slideToggle(0);
            $('#ul_language').css({ visibility: 'visible'}); 
           
          
            $('#ul_language').css({ height: 'visible'});            
           
                      
            if($('#home').height()/window.innerHeight < 0.5) {
            $('#home').css("height", window.innerHeight); 
            $('#d_home_r').css("height", window.innerHeight*0.2); 
            $('#img_phone_android').css("min-height", window.innerHeight*0.8);
            $('#img_phone_android').css("margin-top", window.innerHeight*0.1);
            $('#p_home_1').css("margin-bottom", window.innerHeight*0.2); 
            $('#ce_outer_v').css("height", window.innerHeight*0.6);
            $('.img_slide').css("max-height", window.innerHeight*0.95); 
            $('#iframe_video_windows').css("height", window.innerHeight); 
            if(window.innerWidth <= 500)
                $('#div_p_home').css("padding-top", window.innerHeight*0.08); 
            else if(window.innerWidth <= 800)
                $('#div_p_home').css("padding-top", window.innerHeight*0.15);
                
            if(window.innerWidth <= 1100 && window.innerHeight <= 480)
                $('#div_p_home').css("padding-top", window.innerHeight*0.15); 
            else if(window.innerWidth <= 800 && window.innerHeight <= 400)
                $('#div_p_home').css("padding-top", window.innerHeight*0.08); 
            }
           
           
           
           
           F_ajust_div_features();
           
           
            $('a').click(function(){
                $('html, body').animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top - 60
                }, 1000); 
                return false;
            });
           
       
           
           
           $('#btt_scroll_top').hide();  
           
          
           
           var lastScrollTop = 0;
          
           $(window).scroll(function() { 
               var current_position = $(this).scrollTop();
             
               
               if(current_position < $(window).innerHeight()) {
                     if ($('#btt_scroll_top').is(':visible')) {
                            $('#btt_scroll_top').hide();  
                        }              
               }
               
            
               
               if(current_position > $(window).height())
                   {
                       if( lastScrollTop < current_position)
                           {
                               if ($('#btt_scroll_top').is(':visible')) 
                                    $('#btt_scroll_top').hide(); 
                           }
                       else{
                           if (!$('#btt_scroll_top').is(':visible')) 
                                  $('#btt_scroll_top').show(); 
                        }
                   }
              
              lastScrollTop =current_position; 
               


                $('.translate').each( function(i){

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object){

                        $(this).css({transform: 'translate3d(0, 0, 0)', opacity: '1'});

                    }
                }); 
               
              
               
             
               
        });  
           
           
           
           $("#btt_scroll_top").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
           });
           
           
           
           
           
       });
       
            function onload_all() {
               var tamanho = 0;
               var ce_container = $("#ce_container").width();
               var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
               var child_width = $("#ce_child").width();
               var translate = 0;
           
               var v_translate = 0;
               var v_ce_container = $("#ce_container_v").height();
               var height = $("#ce_outer_v").height();
           
             setInterval(function(){  
                 if(width > 1200){
                         
                        $("#ce_container").css({transform: 'translate3d(-'+translate+'px, 0, 0)'});

                          if(translate +100 >=  ce_container - 4 * child_width)
                            translate = 0;   
                          else
                               translate = translate + child_width;
                      }                 
                 else if(width > 800){
                         
                          $("#ce_container").css({transform: 'translate3d(-'+translate+'px, 0, 0)'});

                          if(translate >=  ce_container - 3 * child_width)
                            translate = 0;   
                          else
                               translate = translate + child_width;
                      }
                    else if (width > 550){
                        
                              $("#ce_container").css({transform: 'translate3d(-'+translate+'px, 0, 0)'});

                              if(translate + 100 >= (ce_container - 2 * child_width))
                                  translate = 0;   
                              else
                                   translate = translate + child_width;
                        }
                 else{
                       $("#ce_container").css({transform: 'translate3d(-'+translate+'px, 0, 0)'});

                              if(translate + 100 >= (ce_container - child_width))
                                  translate = 0;   
                              else
                                   translate = translate + child_width;
                 }
             
             }, 2500); 
               
           }
           
/*---------------------------------------------------------------------------------------------------------------------------------*/
   function F_ajust_div_features()
    {
         var div_features_height = 0;
               $('.div_features').each( function(i){
                    if(div_features_height < $(this).height())
                        div_features_height = $(this).height();
                }); 
           
            $('.div_features').css("height", div_features_height+15); 
    }

 function btt_language() {
     $("#ul_language").slideToggle(300);
 }

/*---------------------------------------------------------------------------------------------------------------------------------*/
 function google_analitc(op) {
     if(op == 1)
         ga('send', 'event', 'Downloads', 'Windows', 'home');
     else if(op == 11)
         ga('send', 'event', 'Downloads', 'Windows', 'down');
     else if(op == 2)
         ga('send', 'event', 'Downloads', 'Android', 'home');
     else if(op == 22)
         ga('send', 'event', 'Downloads', 'Android', 'down');
      else if(op == 3)
         ga('send', 'event', 'Downloads', 'Mac', 'home');
     else if(op == 33)
         ga('send', 'event', 'Downloads', 'Mac', 'down');
     else if(op == 4)
         ga('send', 'event', 'Downloads', 'Linux', 'home');
     else if(op == 44)
         ga('send', 'event', 'Downloads', 'Linux', 'down');
     
     
     
}
            