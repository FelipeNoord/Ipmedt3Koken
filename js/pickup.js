
  // Registering component in foo-component.js
  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");

        console.log("hallo");

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }


//burger
      function addListeners(){
        var j = 0;
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", async function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben

          if(pickups[i].id == "olie" && j == 0){
            document.getElementById("olie").setAttribute("position", "0.53 2 -1");
            document.getElementById("olie").setAttribute("rotation", "180 0 0");
            document.getElementById("olie").setAttribute("animation", "property: position; from: 0.53 2.2 -1; to: 0.53 2 -1; dur: 2000; easing: linear; loop: 2");
            await sleep(4000);
            document.getElementById("olie").setAttribute("position", "0.6 1.14 1.4");
            document.getElementById("olie").setAttribute("rotation", "0 0 0");
            j++;
         }

          if(pickups[i].id == "burger" && j == 1){
            document.getElementById("burger").setAttribute("position", "0.53 1.19 -1");
            j++;
         }
          if(pickups[i].id == "broodje" && j == 2){
             document.getElementById("broodje").setAttribute("position", "0.6 1.17 0.6");
             j++;
          }
          if(pickups[i].id == "broodje" && j == 3){
            document.getElementById("broodje").setAttribute("position", "-0.5 1.17 0.55");
            j++;
          }if(pickups[i].id == "slablaadje" && j == 4){
            document.getElementById("slablaadje").setAttribute("position", "-0.5 1.2 0.55");
            j++;
          }if(pickups[i].id == "tomaat"  && j == 5){
            document.getElementById("tomaat").setAttribute("position", "0.6 1.17 0.6");
            j++;
          }if(pickups[i].id == "tomaat"  && j == 6){
            document.getElementById("tomaat").setAttribute("position", "-0.5 1.2 0.55");
            j++;
          }if(pickups[i].id == "burger"  && j == 7){
            document.getElementById("burger").setAttribute("position", "-0.5 1.2 0.55");
            j++;
          }if(pickups[i].id == "ketchup"  && j == 8){
            document.getElementById("ketchup").setAttribute("position", "-0.5 2 0.55");
            document.getElementById("ketchup").setAttribute("rotation", "180 0 0");
            document.getElementById("ketchup").setAttribute("animation", "property: position; from: -0.5 2.2 0.55; to: -0.5 2 0.55; dur: 1000; easing: easeInOutElastic; loop: 3");
            await sleep(5000);
            document.getElementById("ketchup").setAttribute("position", "0.3 1.14 1.4");
            document.getElementById("ketchup").setAttribute("rotation", "0 0 0");
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
 
 