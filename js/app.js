$(document).ready(function() {

    var deckOfCards = "https://deckofcardsapi.com/api/deck/new/draw/?count=8";
    $('#progress2').show();
    var callback = function(data) {
        var cardsHTML = '<ul class="list cardList" id="ulCardList1">';

        // cardsHTML += '<li>';
        // cardsHTML += data.cards.length;
        // cardsHTML += '</li>';
        $.each(data.cards, function(i, photo) {
            var cardCaption = '' + photo.value + '&nbsp; of &nbsp;' + photo.suit + '';
            cardsHTML += '<li class="card">';
            cardsHTML += '<p class="suit"  style="display:none;" >' + photo.suit + '</p>';
            cardsHTML += '<a data-lightbox="cards" data-title="' + cardCaption + '" img href="' + photo.image + '"><img class="cardImg" src="' + photo.image + '"></a>';
            // ' + photo.value + ' of ' + photo.suit + '  gets card name and suit
            cardsHTML += '</li>';

        });
        cardsHTML += '</ul>';
        $('#luckyCards1').append(cardsHTML);
        var el = document.getElementById("ulCardList1");
        Sortable.create(el);
        var options = {
            valueNames: ['suit']
        };

        var userList = new List('luckyCards1', options);
        $('#progress2').hide();
    };



    var trueRandom = "https://qrng.anu.edu.au/API/jsonI.php?length=4&type=hex16&size=3";
    $('#progress').show();
    var callbackRandom = function(numberData) {
        var numberHTML = '<ul class="list numberList" id="numberList1">';
        $.each(numberData.data, function(i, number) {
            numberCaption = "Interested in the color <a href='http://www.colorhexa.com/" + number + "'>" + number + "</a> *thanks to colorhexa for the swatch.";
            numberHTML += '<li style="color:#' + number + '" class="number">';
            numberHTML += '<p class="number"  style="display:none;" >' + number + '</p>';
            numberHTML += '<a href="http://www.colorhexa.com/' + number + '.png" value= "#' + number + '"  id="luckyNumber' + i + '" data-lightbox="numbers" class="numberLink"  ';
            numberHTML += 'data-title="' + numberCaption + '"';
            numberHTML += '><img class="numberImg" style="background-color:#' + number + '" src="images/img' + i + '.png"></a>';
            numberHTML += '</li>';
        });
        numberHTML += '</ul>';

        $('#luckyNumbers1').append(numberHTML);

        var el = document.getElementById("numberList1");
        Sortable.create(el);
        var options = {
            valueNames: ['number']
        };

        var userList3 = new List('luckyNumbers1', options);

        console.log('Random Number:' + numberData.data);
        $('#progress').hide();
    };







    var deckOfCards2 = "https://deckofcardsapi.com/api/deck/new/draw/?count=8";
    $('#progress3').show();
    var callback2 = function(data) {
        var cardsHTML2 = '<ul class="list cardList" id="ulCardList2">';
        // cardsHTML += '<li>';
        // cardsHTML += data.cards.length;
        // cardsHTML += '</li>';
        $.each(data.cards, function(i, photo) {
            var cardCaption = '' + photo.value + '&nbsp; of &nbsp;' + photo.suit + '';
            cardsHTML2 += '<li class="card">';
            cardsHTML2 += '<p class="suit"  style="display:none;" >' + photo.suit + '</p>';
            cardsHTML2 += '<a data-lightbox="cards" data-title="' + cardCaption + '" img href="' + photo.image + '"><img class="cardImg" src="' + photo.image + '"></a>';
            cardsHTML2 += '</li>';
        });
        cardsHTML2 += '</ul>';
        $('#luckyCards2').append(cardsHTML2);
        var el = document.getElementById("ulCardList2");
        Sortable.create(el);
        var options = {
            valueNames: ['suit']
        };

        var userList2 = new List('luckyCards2', options);
        $('#progress3').hide();
    };


    var trueRandom2 = "https://qrng.anu.edu.au/API/jsonI.php?length=4&type=hex16&size=3";
    $('#progress4').show();
    var callbackRandom2 = function(numberData) {
        var numberHTML2 = '<ul class="list numberList" id="numberList2">';
        $.each(numberData.data, function(i, number) {
            numberCaption = "Interested in the color <a href='http://www.colorhexa.com/" + number + "'>" + number + "</a> *thanks to colorhexa for the swatch.";
            numberHTML2 += '<li style="color:#' + number + '" class="number">';
            numberHTML2 += '<p class="number"  style="display:none;" >' + number + '</p>';
            numberHTML2 += '<a href="http://www.colorhexa.com/' + number + '.png" value= "#' + number + '"  id="luckyNumber' + i + '" data-lightbox="numbers" class="numberLink"  ';
            numberHTML2 += 'data-title="' + numberCaption + '"';
            numberHTML2 += '><img class="numberImg" style="background-color:#' + number + '" src="images/img0' + i + '.png"></a>';
            numberHTML2 += '</li>';
        });
        numberHTML2 += '</ul>';
        $('#luckyNumbers2').append(numberHTML2);


        var el = document.getElementById("numberList2");
        Sortable.create(el);
        var options = {
            valueNames: ['number']
        };

        var userList2 = new List('luckyNumbers2', options);

        console.log('Random Number:' + numberData.data);
        $('#progress4').hide();
    };



    $.getJSON(deckOfCards, callback);
    $.getJSON(trueRandom, callbackRandom);
    $.getJSON(deckOfCards2, callback2);
    $.getJSON(trueRandom2, callbackRandom2);



    // SORT JS


});
