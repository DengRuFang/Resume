
    $(function() 
    {
        $('.gotop').click(function()
            {
                $('html,body').animate({ scrollTop: 0 }, 'slow');
                return false;
            });
        
        $(window).scroll(function()
            {
                if ( $(this).scrollTop() > 400)
                {
                    $('#gotop').fadeIn();
                } 
                else 
                {
                    $('#gotop').fadeOut();
                }
            });
    });