(function(window){
    var Bye = "Goodbye";
    var SayBye = {};
    SayBye.speak = function (names) {
    console.log(Bye + " " + names);
    }
    window.SayBye = SayBye;
})(window);