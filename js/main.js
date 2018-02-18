
    function scrollUp() {
      var Vheight = $(window).height();
      $('html, body').animate({
        scrollTop: (Math.ceil($(window).scrollTop() / Vheight)-1) * Vheight
      }, 1500);
    };
    
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    
    function scrollDown(){
        let Vheight = $(window).height();
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / Vheight)+1) * Vheight
        }, 1500);
    }
    
    $(window).bind('mousewheel', function(event) {
        return false;
    });
    
    $(document).keydown(function(e) {
     if (e.keyCode == 40) {$('#thumbArrowDown').click()};
     if (e.keyCode == 34) {$('#thumbArrowDown').click()};
     if (e.keyCode == 33) { scrollUp(); };
     if (e.keyCode == 38) { scrollUp(); };
      e.preventDefault;
    });
    
    $(document).ready(function(){
                
        $('#thumbArrowDown').click(function(event){
            scrollDown();
            event.preventDefault();
            
            skillsShow();
            
        }); 
        $('#thumbArrowUp').click(function(event){
            scrollUp();
            event.preventDefault();
        }); 
        function skillsShow(){
            if($('#skills').scrollTop()==0){
                const percents = [75,50,75,70,30,30,60,10,50,30]
        
                $.each($(".anim1"), function(i, el){
                    setTimeout(function(){
                       $(el).css("opacity","1").addClass('animated slideInLeft');
                        $(el).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationen animationend', function(){
//                             $(el).removeClass('animated slideInLeft');
                            $(' .anim2opacity', el).css("opacity","1");
                            $(" .progress-bar", el).css('width', percents[i]+'%');
                            $(" .anim2", el).css("opacity","1").animateNumber({number: percents[i]}, 1500);                            
                        })

                    },500 + ( i * 500 ));

                });
            }
        }      
        
        
    });