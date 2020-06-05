	new WOW (). init (); 
    $(function(){
    $("#datepickerInput").datepicker(); 
	});
	$(function(){
    $("#datepickerInputp").datepicker(); 
	});
	$(function(){
    $("#datepickerInputa").datepicker(); 
	});
	$(function(){
    $("#datepickerInputb").datepicker(); 
	});

 	$('#owl-demo.owl-carousel').owlCarousel({
 	navigation : true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:0
        },
        767:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
    $('.owl-carousel').owlCarousel({
    navigation : true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:0
        },
        767:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
    });
    var acc = document.getElementsByClassName("accordion");
    var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
            });
        };