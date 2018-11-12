// déclaration / implémentation des variables
var btnMove = $('#squareMove');
var square = $('#square');


// implémentation de la fonction funcMove
function funcMove(){
    if(square.css('top') == '0px' && square.css('left') == '0px'){
        //console.log("entrée dans le if top & left == 0");
        square.css({
            top: '',
            bottom: '0px',
            left: '0px'
        });
    }else if(square.css('bottom') == '0px' && square.css('left') == '0px'){
        //console.log("entrée dans le if bottom & left == 0");
        square.css({
            left: '',
            right: '0px'
        });
    }else if(square.css('bottom') == '0px' && square.css('right') == '0px'){
        //console.log("entrée dans le if bottom & right == 0");
        square.css({
            bottom: '',
            top: '0px'
        });
    }else if(square.css('top') == '0px' && square.css('right') == '0px'){
        //console.log("entrée dans le if top & right == 0");
        square.css({
            right: '',
            left: '0px'
        });
    }
}


// On écoute l'évènement "click" sur le bouton
btnMove.on('click', funcMove);