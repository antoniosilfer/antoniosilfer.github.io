
            
       $(document).ready(function(){          
           /* $('#menu_movel').slideToggle(0);
            $('#menu_movel').css({ visibility: 'visible'}); */
           
            $('#ul_language').slideToggle(0);
            $('#ul_language').css({ visibility: 'visible'}); 
            
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
              if(op == 1 || op == 11)
              {
                    ga('send', 'event', 'Downloads', 'Windows', 'Download Windows');
                
                  if(op == 11)
                  location.href = "https://github.com/antoniosilfer/antoniosilfer.github.io/blob/master/download/SilFer%20File%20Transfer.exe?raw=true";
              }
              else if(op == 2 || op == 22)
              {
                     ga('send', 'event', 'Downloads', 'Android', 'Download Android');
                    if(op == 22)
                     location.href = "https://github.com/antoniosilfer/antoniosilfer.github.io/blob/master/download/SilFerFileTransfer.apk?raw=true";
              }
              else if(op == 3 || op == 33)
              {
                  
                    ga('send', 'event', 'Downloads', 'Windows', 'Download Windows 1');
                  
                  if(op == 33)
                  location.href = "https://github.com/antoniosilfer/antoniosilfer.github.io/blob/master/download/SilFerFileTransfer.apk?raw=true"; 
              }
               else if(op == 4 || op == 44)
              {                  
                  
                   ga('send', 'event', 'Downloads', 'Android', 'Download Android');
                       if(op == 44)
                     location.href = "https://github.com/antoniosilfer/antoniosilfer.github.io/blob/master/download/SilFerFileTransfer.apk?raw=true";
              }
            }
            