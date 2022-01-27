
  // Registering component in foo-component.js
  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");


        let hold = null;
        console.log("hallo");


//burger
      function addListeners(){
        
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben
          if(pickups[i].id == "broodje"){
             document.getElementById("broodje").setAttribute("position", "0.6 1.17 0.6");
          }


      });
        }
      }

      addListeners();
      },
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 