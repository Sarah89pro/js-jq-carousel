/*Creare uno slider di immagini come visto questa mattina a lezione.
Potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
Bonus
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
*/


//mi assicuro che il codice venga eseguito dopo il caricamento del DOM
$(document).ready(function () {

    //REFS
    var nextBtn = $(".next");
    var prevBtn = $(".prev");

    //Navigazione tra le slides col mouse

    //Next
    nextBtn.click(function() {
        nextPrevSlide("next");
    });

    //Prev
    prevBtn.click(function() {
        nextPrevSlide("prev");
    });


    //Navigazione tra le slides con keyboard

    $(document).keydown(function (event) { 
        console.log(event.keyCode); 
        
        //left
        if( event.keyCode == 37 ) {
            nextPrevSlide("prev");
        }
        //right
        else if ( event.keyCode == 39 ){
            nextPrevSlide("next");
        }
    });

    //end doc ready

});

/*******************
 * UTILITY *
 *******************/

//funzione per navigare tra le slides
function nextPrevSlide(direction) {

    //refs
    var activeImage = $(".images img.active");  //selezione classe "active" img
    var activeCircle = $(".nav i.active");    //selezione classe "active" i
    

    //Reset
    activeImage.removeClass("active");
    activeCircle.removeClass("active");


    //Next
    if(direction === "next") {

        if(activeImage.hasClass("last")) {            //se l'elemento ha quella classe, allora...
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");

        } else {
            activeImage.next("img").addClass("active");
            activeCircle.next("i").addClass("active");
        }
    }

    //Prev
    else if(direction === "prev") {
        if(activeImage.hasClass("first")) {
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");
        
        } else {
            activeImage.prev("img").addClass("active");
            activeCircle.prev("i").addClass("active");
        }
    }
}