$(document).ready(function(){

    var check = true;
   
    $('.clicks').on('click', function(){
        if(check){
            $('#box').addClass('show');
                check = false;
            }
            else{
                $('#box').removeClass('show');
                check = true;
            }
            
    })

    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    })
});



