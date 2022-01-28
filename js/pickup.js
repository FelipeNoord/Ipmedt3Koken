  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
  
        const uiText = document.getElementById("js--uiText");

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }


        const textToSpeech = (text) => {
          responsiveVoice.speak(text.getAttribute("value"), "Dutch Male");
        }

        textToSpeech(uiText)
//burger
      function addListeners(){
        var j = 0;
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", async function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben

          if(pickups[i].id == "olie" && j == 0){
            document.getElementById("olie").setAttribute("animation__pos", "property:position; from: 0.6 1.14 1.4;  to: 0.53 2 -1; dur: 3000; easing: linear;");
            document.getElementById("olie").setAttribute("animation__rot", " property: rotation; from: 0 0 0; to: 180 0 0; delay: 2000; dur: 1000;");
            document.getElementById("olie").setAttribute("animation__shake", "property: position; from: 0.53 2 -1; to: 0.53 2.2 -1; delay: 3000; dur: 2000; easing: easeInOutSine; loop: 3");
            document.getElementById("olie").setAttribute("animation__return", "property: position; from: 0.53 2.2 -1; to: 0.6 1.14 1.4; delay: 6000; dur: 2000;");
            document.getElementById("olie").setAttribute("animation__rota", "property: rotation; from:  180 0 0; to: 0 0 0; delay: 6000; dur: 2000;");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0; angle: 3; target: #olie;")
            uiText.setAttribute("value", "Lekker bezig! Nu kunnen we de burger bakken klik maar op de burger!")
            textToSpeech(uiText);
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #burger;")
            j++;

            
         }

          if(pickups[i].id == "burger" && j == 1){
            document.getElementById("burger").setAttribute("position", "0.53 1.154 -1");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #broodje;")
            uiText.setAttribute("value", "Broodje maken bro! Je moet nu het broodje snijden leg het broodje op de snijplank")
            textToSpeech(uiText);
            j++;
         }
          if(pickups[i].id == "broodje" && j == 2){
            document.getElementById("broodje").setAttribute("animation__pos", "property: position; from: -0.5 1.17 0.55; to: 0.6 1.17 1");
            uiText.setAttribute("value", "Je moet nu het broodje snijden leg het broodje op de snijplank");
            textToSpeech(uiText);
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #c9484a ; to: #c5514e; dur: 1;");
             
             
             j++;
          }
          if(pickups[i].id == "broodje" && j == 3){
            document.getElementById("broodje").setAttribute("animation__pos", "property: position; from: -1 1.14 0.5; to: 0.618 1.34 0.6; dur: 2000;");
            
            document.getElementById("broodje").setAttribute("animation__rot", "property: rotation; from: 0 0 0; to: 0 0 90; delay: 500;");
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #c5514e ; to: #c05953; dur: 1;");
            setTimeout(broodjeWeg = (evt) => {
              document.getElementById("broodje").setAttribute("visible", "false");
              document.getElementById("broodje").setAttribute("scale", "0.01 0.01 0.01");
              document.getElementById("gesnedenbroodje").setAttribute("visible", "true");
            }, 2000);
            

            uiText.setAttribute("value", "Pak nu je mes zodat je het broodje door midden kan snijden!");
            textToSpeech(uiText);

            j++;
          } if(pickups[i].id == "mes" && j == 4){
            document.getElementById("mes").setAttribute("animation__pos" , "property: position; from: 0.585 1.50 0.333; to: 0.585 1.25 0.333; dur: 1000");
            document.getElementById("mes").setAttribute("animation__rot" , "property: rotation; from: 0 -90 0; to: 0 -90 0;");
            document.getElementById("bovenkantbroodje").setAttribute("animation__pos", "property: position; from: 0 0 0; to: -0.28 0.66 0; delay: 1000");
            document.getElementById("bovenkantbroodje").setAttribute("animation__rot", "property: rotation; from: 0 -90 0; to: 0 0 90; delay: 1000");
            document.getElementById("onderkantbroodje").setAttribute("animation__pos", "property: position; from: 0 0 0; to: -0.5 -0.66 0; delay: 1000");
            document.getElementById("onderkantbroodje").setAttribute("animation__rot", "property: rotation; from: 0 -90 0; to: 0 0 -90; delay: 1000");
            document.getElementById("mes").setAttribute("animation__return", "property: position; from: 0.585 1.25 0.333; to: 0.146 1.155 0.475; delay: 1000;");
            document.getElementById("mes").setAttribute("animation__retrot", "property: rotation; from: 0 -90 0; to: 90 -90 0; delay: 1000;");
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #c05953 ; to: #bc6257; dur: 1;");
            // document.getElementById("mes").setAttribute("animation__pos" , "property: position; from: 0.8 1.25 0.3; to: 0.4 1.25 0.3; dur: 1000");
            // document.getElementById("mes").setAttribute("animation__rot" , "property: rotation; from: 0 -90 30; to: 0 -90 0; loop: 4; dur: 250; easing: linear;");
            // document.getElementById("mes").setAttribute("animation__return", "property: position; from: 0.4 1.25 0.3; to: 0.3 1.196 0.475; delay: 1000");
            // document.getElementById("mes").setAttribute("animation__retrot", "property: rotation; from: 0 -90 0; to: 76 -72 -1; delay: 1000;")
            uiText.setAttribute("value", "Leg het broodje nu klaar op je bord!");
            textToSpeech(uiText);


            j++
          }
          if(pickups[i].id == "gesnedenbroodje" && j == 5){
            document.getElementById("gesnedenbroodje").setAttribute("animation__position", "property: position; from: 0.6 1.34 0.6; to: -0.7 1.307 0.55;");
            uiText.setAttribute("value", "Nu nog wat sla op het broodje!");
            textToSpeech(uiText);
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #bc6257 ; to: #ba665a; dur: 1;");
            
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #slablaadje;")
            j++;
          }

          if(pickups[i].id == "slablaadje" && j == 6){
            document.getElementById("slablaadje").setAttribute("position", "-0.5 1.2 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #tomaat;")
            
            //burger kleur
            j++;
          }if(pickups[i].id == "tomaat"  && j == 7){
            document.getElementById("tomaat").setAttribute("position", "0.6 1.17 0.6");

            uiText.setAttribute("value", "Top gedaan! Nu mag de tomaat op het broodje");
            textToSpeech(uiText);
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #ba665a ; to: #b4705f; dur: 1;");
            j++;
          }

          if(pickups[i].id == "mes" && j == 8){
            document.getElementById("mes").setAttribute("animation__pos" , "property: position; from: 0.7 1.25 0.3; to: 0.3 1.25 0.3; dur: 1500");
            document.getElementById("mes").setAttribute("animation__rot" , "property: rotation; from: 0 -90 30; to: 0 -90 0; loop: 4; dur: 250; easing: linear;");
            document.getElementById("mes").setAttribute("animation__return", "property: position; from: 0.5 1.25 0.333; to: 0.146 1.155 0.475; delay: 1000;");
            document.getElementById("mes").setAttribute("animation__retrot", "property: rotation; from: 0 -90 0; to: -90 -90 0; delay: 1000;");
            document.getElementById("gesnedentomaat").setAttribute("visible", "true");
            document.getElementById("tomaat").setAttribute("visible", "false");
            
            j++
          }if(pickups[i].id == "gesnedentomaat"  && j == 9){
            document.getElementById("gesnedentomaat").setAttribute("position", "-0.5 1.2 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #burger;")
            uiText.setAttribute("value", "Pling Pling de burger is klaar met bakken haal em van het vuur en leg em op het broodje!");
            textToSpeech(uiText);
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #af7a64 ; to: #aa8469; dur: 1;");
            j++;
          }if(pickups[i].id == "burger"  && j == 10){
            document.getElementById("burger").setAttribute("position", "-0.5 1.22 0.55");
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0.3; angle: 3; target: #ketchup;")
            uiText.setAttribute("value", "Zo nu nog even wat ketchup erbij! Smikkelen");
            textToSpeech(uiText);
            //burger kleur
            document.getElementById("burger").setAttribute("animation", "property: color; from: #c05953 ; to: #bc6257; dur: 1;");

            j++;
          }if(pickups[i].id == "ketchup"  && j == 11){
            document.getElementById("spotlight").setAttribute("light", "type: spot; intensity: 0; angle: 3; target: #slablaadje;")
            document.getElementById("ketchup").setAttribute("position", "-0.5 2 0.55");
            document.getElementById("ketchup").setAttribute("rotation", "180 0 0");
            document.getElementById("ketchup").setAttribute("animation", "property: position; from: -0.5 2.2 0.55; to: -0.5 2 0.55; dur: 1000; easing: easeInOutElastic; loop: 3");
            document.getElementById("ketchup").setAttribute("position", "0.3 1.14 1.4");
            document.getElementById("ketchup").setAttribute("rotation", "0 0 0");

            uiText.setAttribute("value", "Zo he die burger ruikt heerlijk, dat wordt niet uithongeren vandaag!");
            textToSpeech(uiText);


            document.getElementById("bovenkantbroodje").setAttribute("animation__pos", "property: position; from: -0.28 0.66 0; to: -0.185 -0.666 0; delay: 1000");
            document.getElementById("bovenkantbroodje").setAttribute("animation__rot", "property: rotation; from: 0 0 90; to: 0 0 -90; delay: 1000");
 
            j++;
          }
      });
        }

        // knife.addEventListener("click", function(evt){
        //   if(hold == null && knife.getAttribute("id") == "js--knife"){
        //     console.log("hallo");
        //     this.remove();
        //     camera.innerHTML += knifeP; 
        //   }
        // })
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
 
 