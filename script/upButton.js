$(window).on('scroll',function(){
    if($(this).scrollTop()>500){
        $('#up').fadeIn()
    }else{
        $('#up').fadeOut()
    }
})

$("#up").on("click",function(){
    $("html,body").animate({scrollTop:0},500)
})

$('#about-link').on('click',function(e){
    e.preventDefault();
    $('html, body') .animate({scrollTop: $('#about').offset().top}, 4000)

})

$("#up").on("click",function(){
    $("html,body").animate({scrollTop:0},500)
})

$('#pictures-link').on('click',function(e){
    e.preventDefault();
    $('html, body') .animate({scrollTop: $('#pictures').offset().top}, 4000)

})

$('#menuToggle #toggleCheckbox').change(function(){
    if(this.checked){
        $('body').css({'overflow':"hidden"})
    }
    else{
        $('body').css({'overflow':"visible"})
    }
});

$('#up').on('click',function(){
    $('html,body').animate({scrollTop:0},500)
});

$('#audience_link').on('click',function(e){
    e.preventDefault();
    document.getElementById('toggleCheckbox').checked=false
    $('body').css({'overflow':"vivible"})
    $('html,body').animate({scrollTop:$('#audience').offset().top})
});