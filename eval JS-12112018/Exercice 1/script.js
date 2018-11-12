// déclaration / implémentation des variables et fonctions
var vign1 = $('.vign1');
var vign2 = $('.vign2');
var vign3 = $('.vign3');
var vign4 = $('.vign3');
var vign5 = $('.vign5');
var vign6 = $('.vign6');
var vign7 = $('.vign7');
var vign8 = $('.vign8');
var vign9 = $('.vign9');
var vign10 = $('.vign10');

var bigPic = $('.bigPic');



vign1.on('click', function(){
    //bigPic.css('background-image', 'img/large/aquaman.jpg');
    bigPic.html('<img src="img/normal/aquaman.jpg" alt="aquaman face">');
});

vign2.on('click', function(){
    bigPic.html('<img src="img/normal/batman.jpg" alt="batman face">');
});

vign3.on('click', function(){
    bigPic.html('<img src="img/normal/captainman.jpg" alt="captainman face">');
});

vign4.on('click', function(){
    bigPic.html('<img src="img/normal/deadpool.jpg" alt="irodeadpoolnman face">');
});

vign5.on('click', function(){
    bigPic.html('<img src="img/normal/durotan.jpg" alt="durotan face">');
});

vign6.on('click', function(){
    bigPic.html('<img src="img/normal/ironman.jpg" alt="ironman face">');
});

vign7.on('click', function(){
    bigPic.html('<img src="img/normal/mario.jpg" alt="mario face">');
});

vign8.on('click', function(){
    bigPic.html('<img src="img/normal/optimus.jpg" alt="optimus face">');
});

vign9.on('click', function(){
    bigPic.html('<img src="img/normal/palpatine.jpg" alt="palpatine face">');
});

vign10.on('click', function(){
    bigPic.html('<img src="img/normal/superman.jpg" alt="superman face">');
});

