    $('#tabSet').scrollTabs({
      scroll_distance: 350,
      scroll_duration: 350,
      left_arrow_size: 26,
      right_arrow_size: 26,
      click_callback: function(e){
        var val = $(this).attr('rel');
        if(val){
          window.location.href = val;
        }
      }
    });
