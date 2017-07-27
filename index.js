const wrestlers = ['El Zorro Reconocido','La Fruta Interesante','El Gallo Femenino','La Oreja Educado','El Rey Inalámbrico','El Vigilante Muerto','Pelo Peludo','El Huevo Popular'];
const untouched_wrestlers = ['El Zorro Reconocido','La Fruta Interesante','El Gallo Femenino','La Oreja Educado','El Rey Inalámbrico','El Vigilante Muerto','Pelo Peludo','El Huevo Popular'];
let quarter = [];
let semi = [];
let final_round = [];
let placeholder = [];

// A $( document ).ready() block.
$( document ).ready(function() {
    $( "button.btn.start" ).click(function() {
        wrestlers.sort(function(a, b){return 0.5 - Math.random()});
        quarterBracket(wrestlers);
    });
});

function quarterBracket(wrestlers) {
    while(quarter.length < 4) {
        quarter.push(wrestlers.splice(0,2));
    }
    for(var i=0; i<quarter.length; i++) {
        var match = i+1;
        $(".quarter").append('<div class="match">'+match+': ' + '<span class="one">' + quarter[i][0] + '</span>' + ' vs ' + '<span class="two">' + quarter[i][1]+'</span></div>');
    }
    semiBracket(quarter);
}
function semiBracket(result) {
    for(i=0; i<result.length; i++) {
       var rand = Math.random() * 2;
       //determine the round winners
       if (rand <=1) {
            placeholder.push(result[i][0]);
       } else {
           placeholder.push(result[i][1]);
       }
    }
    while(semi.length < 2) {
        semi.push(placeholder.splice(0,2));
    }

    for(var i=0; i<semi.length; i++) {
        var match = i+1;
        $(".semi").append('<div class="match">'+match+':' + semi[i][0] + ' vs ' + semi[i][1]+'</div>');
    }
    finalBracket(semi);
}
function finalBracket(result) {
    for(i=0; i<result.length; i++) {
        var rand = Math.random() * 2;
        // determine the round winners
        if (rand <=1) {
            placeholder.push(result[i][0]);
        } else {
            placeholder.push(result[i][1]);
        }
    }
    while(final_round.length < 1) {
        final_round.push(placeholder.splice(0,2));
    }

    for(var i=0; i<final_round.length; i++) {
        var match = i+1;
        $(".final").append('<div class="match">'+match+':' + final_round[i][0] + ' vs ' + final_round[i][1]+'</div>');
    }
    winnerReveal(final_round);
}
function winnerReveal(result) {
    var rand = Math.random() * 2;
    // determine the winner
    if (rand <=1) {
        winner = result[0][0];
    } else {
        winner = result[0][1];
    }
    $(".winner").append('<div class="winner">'+winner+'</div>');
}



