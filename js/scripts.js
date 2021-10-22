$(function(){
   
    $('#loginButton').click(function(){
        $("#loginModal").modal('show');
        
    });

    $('.specsButton').click(function(){
        $("#specsModal").modal('show');
        
    });

    $('#addCarButton').click(function(){
        $("#addCarModal").modal('show');
        
    });

    $('#agencyInfo').click(function(){
        $("#infoModal").modal('show');
        
    });

    function carDetails(carInfo) {
        $('#titleMod').html('');
        var carMake = carInfo.getAttribute("data-makeMod");
        var carID = carInfo.getAttribute("data-idNum");
        return $('#titleMod').append("Specs for: <br>" + carID + ": " + carMake + ".");
      }

});



