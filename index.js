var wrestlers = ['El Zorro Reconocido','La Fruta Interesante','El Gallo Femenino','La Oreja Educado','El Rey Inalámbrico','El Vigilante Muerto','Pelo Peludo','El Huevo Popular'];
var untouched_wrestlers = ['El Zorro Reconocido','La Fruta Interesante','El Gallo Femenino','La Oreja Educado','El Rey Inalámbrico','El Vigilante Muerto','Pelo Peludo','El Huevo Popular'];
var quarter = [];
var semi = [];
var final = [];
var test = [];

// A $( document ).ready() block.
$( document ).ready(function() {
    $( "button.btn.start" ).click(function() {
        wrestlers.sort(function(a, b){return 0.5 - Math.random()});
        quarterTest(wrestlers);
    });
});

function quarterTest(wrestlers) {
    while(quarter.length < 4) {
        quarter.push(wrestlers.splice(0,2));
    }
    for(var i=0; i<quarter.length; i++) {
        var match = i+1;
        $(".quarter").append('<div class="match">'+match+': ' + '<span class="one">' + quarter[i][0] + '</span>' + ' vs ' + '<span class="two">' + quarter[i][1]+'</span></div>');
    }
    semiTest(quarter);
}
function semiTest(result) {
    for(i=0; i<result.length; i++) {
       var rand = Math.random() * 2;
       if (rand <=1) {
            test.push(result[i][0]);
       } else {
           test.push(result[i][1]);
       }
    }
    while(semi.length < 2) {
        semi.push(test.splice(0,2));
    }

    for(var i=0; i<semi.length; i++) {
        var match = i+1;
        $(".semi").append('<div class="match">'+match+':' + semi[i][0] + ' vs ' + semi[i][1]+'</div>');
    }
    finalTest(semi);
}
function finalTest(result) {
    for(i=0; i<result.length; i++) {
        var rand = Math.random() * 2;
        if (rand <=1) {
            test.push(result[i][0]);
        } else {
            test.push(result[i][1]);
        }
    }
    while(final.length < 1) {
        final.push(test.splice(0,2));
    }

    for(var i=0; i<final.length; i++) {
        var match = i+1;
        $(".final").append('<div class="match">'+match+':' + final[i][0] + ' vs ' + final[i][1]+'</div>');
    }
    winnerTest(final);
}
function winnerTest(result) {
    var rand = Math.random() * 2;
    if (rand <=1) {
        winner = result[0][0];
    } else {
        winner = result[0][1];
    }
    $(".winner").append('<div class="winner">'+winner+'</div>');

    $( "button.btn.reset" ).click(function() {
        console.log('here');
        quarter = [];
        semi = [];
        final = [];
        test = [];
    });
}



