var seconds = 00;

var tens = 00;

var appendTens = document.getElementById('tens');

var appendSeconds = document.getElementById('seconds');

var buttonStart = document.getElementById('button-start');
 
var buttonStop = document.getElementById('button-stop');

var buttonReset = document.getElementById('button-reset');

var Intervel; 

    buttonStart.onclick = function () {

    clearInterval(Intervel);
    
    Intervel = setInterval(start , 100);
}

    buttonStop.onclick = function () {

        clearInterval(Intervel);
}

    buttonReset.onclick = function () {

        clearInterval(Intervel);

        tens = 00;

        seconds = 00;

        appendTens.innerHTML = tens;

        appendSeconds.innerHTML = seconds;
    }

    function start() {
        tens++;
         
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens >99){
            seconds++; 
            appendSeconds.innerHTML = "0" + seconds;
            tens = 00;
            appendTens.innerHTML = "0" + 0 ;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    
    }






