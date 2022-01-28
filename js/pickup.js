
  // Registering component in foo-component.js
  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        var j = 0;

        console.log("hallo");

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }


      

//burger
      function addListeners(){
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", async function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben


          if(pickups[i].id == "olie" && j == 0){
            document.getElementById("olie").setAttribute("animation__pos", "property:position; from: 0.6 1.14 1.4;  to: 0.53 2 -1; dur: 3000; easing: linear;");
            document.getElementById("olie").setAttribute("animation__rot", " property: rotation; from: 0 0 0; to: 180 0 0; delay: 2000; dur: 1000;");
            document.getElementById("olie").setAttribute("animation__shake", "property: position; from: 0.53 2 -1; to: 0.53 2.2 -1; delay: 3000; dur: 2000; easing: easeInOutSine; loop: 3");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0; angle: 3; target: #olie;")
            await sleep(10000);
            
            document.getElementById("olie").setAttribute("position", "0.6 1.14 1.4");
             document.getElementById("olie").setAttribute("rotation", "0 0 0");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #burger;")
            document.getElementById("tv").setAttribute("text", "value:Lekker bezig!; color: black; align: center;color: black; align: center;")
            await sleep(5000);
            document.getElementById("tv").setAttribute("text", "value: Nu kunnen we de burger bakken\nklik maar op de burger!; color: black; align: center;color: black; align: center;")
            await sleep(5000);
            j++;
         }

          if(pickups[i].id == "burger" && j == 1){
      
            document.getElementById("burger").setAttribute("position", "0.53 1.19 -1");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #broodje;")
            document.getElementById("tv").setAttribute("text", "value:Lekker bezig!; color: black; align: center;color: black; align: center;")
            await sleep(5000);
            document.getElementById("tv").setAttribute("text", "value: Broodje maken bro; color: black; align: center;color: black; align: center;")
            j++;
         }
    
          if(pickups[i].id == "broodje" && j == 2){
            document.getElementById("broodje").setAttribute("animation__pos", "property: position; from: -1 1.14 0.5; to: -0.5 1.17 0.55");
            document.getElementById("broodje").setAttribute("position", "-0.5 1.17 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #slablaadje;")
            document.getElementById("tv").setAttribute("text", "value: En nu nog wat sla op het broodje!; color: black; align: center;color: black; align: center;")
            j++;
          }if(pickups[i].id == "slablaadje" && j == 3){
            document.getElementById("slablaadje").setAttribute("position", "-0.5 1.2 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #tomaat;")
            document.getElementById("tv").setAttribute("text", "value: En nu ff de tomaat snijden; color: black; align: center;color: black; align: center;")
            j++;
          }if(pickups[i].id == "tomaat"  && j == 4){
            document.getElementById("tomaat").setAttribute("position", "0.6 1.17 0.6");
            document.getElementById("tv").setAttribute("text", "value: Top gedaan!; color: black; align: center;color: black; align: center;")
            await sleep(5000);
            document.getElementById("tv").setAttribute("text", "value: Nu mag die op het broodje; color: black; align: center;color: black; align: center;")
            j++;
          }if(pickups[i].id == "tomaat"  && j == 5){
            document.getElementById("tomaat").setAttribute("position", "-0.5 1.2 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #burger;")
            document.getElementById("tv").setAttribute("text", "value: Nu is de burger klaar met bakken; color: black; align: center;color: black; align: center;")
            await sleep(5000)
            document.getElementById("tv").setAttribute("text", "value: Die kan op het broodje; color: black; align: center;color: black; align: center;")
            j++;
          }if(pickups[i].id == "burger"  && j == 6){
            document.getElementById("burger").setAttribute("position", "-0.5 1.2 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #ketchup;")
            document.getElementById("tv").setAttribute("text", "value: Ketchup erbij; color: black; align: center;color: black; align: center;")
            j++;
          }if(pickups[i].id == "ketchup"  && j == 7){
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0; angle: 3; target: #slablaadje;")
            document.getElementById("ketchup").setAttribute("position", "-0.5 2 0.55");
            document.getElementById("ketchup").setAttribute("rotation", "180 0 0");
            document.getElementById("ketchup").setAttribute("animation", "property: position; from: -0.5 2.2 0.55; to: -0.5 2 0.55; dur: 1000; easing: easeInOutElastic; loop: 3");
            await sleep(5000);
            document.getElementById("ketchup").setAttribute("position", "0.3 1.14 1.4");
            document.getElementById("ketchup").setAttribute("rotation", "0 0 0");
            document.getElementById("tv").setAttribute("text", "value: Lekker pik!; color: black; align: center;color: black; align: center;")
            await sleep(5000)
            document.getElementById("tv").setAttribute("text", "value: Die burger ruikt heerlijk!; color: black; align: center;color: black; align: center;")
            j++;
          }
      });
        }
      }

      async function television(){
        if(j==0){
          document.getElementById("tv").setAttribute("text", "value: Welkom bij lekker koken!; color: black; align: center;color: black; align: center;")
          await sleep(5000);
          document.getElementById("tv").setAttribute("text", "value: We gaan vandaag een burger maken!; color: black; align: center;color: black; align: center;")
          await sleep(5000);
          document.getElementById("tv").setAttribute("text", "value: We beginnen met wat olie in de pan doen!\n Klik maar op het flesje olie!; color: black; align: center;color: black; align: center;")
        }
      }

      addListeners();
      television();
      },
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 