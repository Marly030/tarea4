(function (window){
    var byeSpeaker = {};
    byeSpeaker.speak = function (names) {
        console.log(speakWord + " " + names);
    }
    window.byeSpeaker = byeSpeaker;
}) (window);
