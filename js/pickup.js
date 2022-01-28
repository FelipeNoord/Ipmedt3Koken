
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
        var j = 0;
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben
          if(pickups[i].id == "burger" && j == 0){
            document.getElementById("burger").setAttribute("position", "0.5 1.14 -1");
            j++;
         }
          if(pickups[i].id == "broodje" && j == 1){
             document.getElementById("broodje").setAttribute("position", "0.6 1.17 0.6");
             j++;
          }
          if(pickups[i].id == "broodje" && j == 2){
            document.getElementById("broodje").setAttribute("position", "-0.5 1.17 0.55");
            j++;
          }if(pickups[i].id == "slablaadje" && j == 3){
            document.getElementById("slablaadje").setAttribute("position", "-0.5 1.2 0.55");
            j++;
          }if(pickups[i].id == "tomaat"  && j == 4){
            document.getElementById("tomaat").setAttribute("position", "0.6 1.17 0.6");
            j++;
          }if(pickups[i].id == "tomaat"  && j == 5){
            document.getElementById("tomaat").setAttribute("position", "-0.5 1.2 0.55");
            j++;
          }if(pickups[i].id == "burger"  && j == 6){
            document.getElementById("burger").setAttribute("position", "-0.5 1.2 0.55");
            j++;
          }if(pickups[i].id == "ketchup"  && j == 7){
            document.getElementById("ketchup").setAttribute("position", "-0.5 1.2 0.55");
            j++;
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
 
 