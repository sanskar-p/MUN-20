window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    document.getElementById("header").style.height = "4em";
    document.getElementById("hinner").style.top = "0";
  }
  else{
  	document.getElementById("header").style.height = "6.25em";
    document.getElementById("hinner").style.top = "18%";
  }
}

let old = $('.card').get(0);
$('.card').click(function(){
  if(old!=null && $(old).hasClass('open'))
    $(old).toggleClass('open');
   $(this).toggleClass('open');
   old = this;

})