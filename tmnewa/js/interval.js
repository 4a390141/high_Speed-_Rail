let intervalId = null;
onmessage = function(event) {
    if ( event.data.start ) {
        intervalId = setInterval(function(){
            postMessage('time.tick');
        },event.data.ms||1000);
    }
    if ( event.data.stop && intervalId !== null ) {
        clearInterval(intervalId);
    }
};