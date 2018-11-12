// Déclaration et implémentation des variables
var number = $('#number');
var exp1 = $('#numberE1');
var exp2 = $('#numberE2');
var exp3 = $('#numberE3');

// fonction anonyme se déclenchant sur chaque evènement "keyup"
number.on('keyup', function(){
    exp1.text( number.val() );
    exp2.text( Math.pow(number.val(), 2) );
    exp3.text( Math.pow(number.val(), 3) );
});

