// On crée les variables
var textOrigin = $('#textOrigin');
var textCopy = $('#textCopy');

// On copie la valeur dans le second input
textOrigin.on('keyup', function(){
    textCopy.val( textOrigin.val() );
});