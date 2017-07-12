$(document).ready(function() {

    var deckOfCards = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";
    var callback = function(data) {
        var cardsHTML = '<ul class="cardList">';

        // cardsHTML += '<li>';
        // cardsHTML += data.cards.length;
        // cardsHTML += '</li>';
        $.each(data.cards, function(i, photo) {
            var cardCaption = '' + photo.value + '&nbsp; of &nbsp;' + photo.suit + '';
            cardsHTML += '<li class="card">';
            cardsHTML += '<a data-lightbox="cards" data-title="' + cardCaption + '" img href="' + photo.image + '"><img src="' + photo.image + '"></a>';
            // ' + photo.value + ' of ' + photo.suit + '  gets card name and suit
            cardsHTML += '</li>';

        });
        cardsHTML += '</ul>';
        $('#luckyCards1').append(cardsHTML);
    };

    var trueRandom = "https://qrng.anu.edu.au/API/jsonI.php?length=4&type=hex16&size=3";
    var callbackRandom = function(numberData) {
        var numberHTML = '<ul class="numberList">';
        // numberHTML += '<li>';
        // numberHTML += numberData.length;
        // numberHTML += '</li>';
        $.each(numberData.data, function(i, number) {
            numberHTML += '<li style="color:#' + number + '" class="number">';
            numberHTML += number;
            // numberHTML += '<a id="' + number + '" data-lightbox="numbers" href="images/cardman.png"> ' + number + '</a>';
            numberHTML += '</li>';
            // numberHTML += '<div id="' + number + '" style="display:none" class="luckyColor" style="background-color:#' + number + '"> ' + number + ' </div>';
            // $(".lb-nav").addClass('' + number + '');
            // $("." + number + "").on("click", function() {
            //     $(this).css("background-color", "#" + number + "");
            // });
        });
        numberHTML += '</ul>';

        $('#luckyNumbers1').append(numberHTML);
        console.log('Random Number:' + numberData.data);
    };

    var deckOfCards2 = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";
    var callback2 = function(data) {
        var cardsHTML2 = '<ul class="cardList">';
        // cardsHTML += '<li>';
        // cardsHTML += data.cards.length;
        // cardsHTML += '</li>';
        $.each(data.cards, function(i, photo) {
            var cardCaption = '' + photo.value + '&nbsp; of &nbsp;' + photo.suit + '';
            cardsHTML2 += '<li class="card">';
            cardsHTML2 += '<a data-lightbox="cards" data-title="' + cardCaption + '" img href="' + photo.image + '"><img src="' + photo.image + '"></a>';
            cardsHTML2 += '</li>';
        });
        cardsHTML2 += '</ul>';

        $('#luckyCards2').append(cardsHTML2);
    };


    var trueRandom2 = "https://qrng.anu.edu.au/API/jsonI.php?length=4&type=hex16&size=3";
    var callbackRandom2 = function(numberData) {
        var numberHTML2 = '<ul class="numberList">';
        // numberHTML += '<li>';
        // numberHTML += numberData.length;
        // numberHTML += '</li>';
        $.each(numberData.data, function(i, number) {
            numberHTML2 += '<li style="color:#' + number + '" class="number">';
            numberHTML2 += number;
            numberHTML2 += '</li>';

        });
        numberHTML2 += '</ul>';
        $('#luckyNumbers2').append(numberHTML2);
        console.log('Random Number:' + numberData.data);

    };



    $.getJSON(deckOfCards, callback);
    $.getJSON(trueRandom, callbackRandom);
    $.getJSON(deckOfCards2, callback2);
    $.getJSON(trueRandom2, callbackRandom2);


});
