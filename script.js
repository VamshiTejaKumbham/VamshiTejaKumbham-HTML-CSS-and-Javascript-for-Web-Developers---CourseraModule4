(function () {

    var names = ["Joey", "Pheobe", "Ross", "Chandler", "Monika", "Rachel", "Luffy", "Zoro", "Franky", "Chopper"];
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        SayBye.speak(names[i]);
      } else {
        SayHello.speak(names[i]);
      }
    }
    
    })();