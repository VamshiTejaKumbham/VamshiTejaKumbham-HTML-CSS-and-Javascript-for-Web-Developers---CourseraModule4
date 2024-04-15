(function(window){
    var Hello = "Hello";
    var SayHello = {};
    SayHello.speak = function (names) {
    console.log(Hello + " " + names);
    }
    window.SayHello  = SayHello ;
})(window);