  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        const kitchenKnife = document.getElementById("pickupknife");
        let hold = false;
        const knife = '<a-entity gltf-model="#chefsmes-glb" id="js--knife" rotation="-45 80 50" position="0.3 -0.2 -0.3" scale="0.1 0.1 0.1"></a-entity>';
        const tomaat = '<a-entity pickup class="js--interact js--pickup js--cutable" id="js--tomato" gltf-model="#tomaat-glb" scale="0.03 0.03 0.03" position="0.2 -0.2 -0.5"><a-entity gltf-model=#tomaat_stengel-glb></a-entity></a-entity>'

//burger
      function addListeners(){
        
        for (let i = 0; i < pickups.length; i++){

          pickups[i].addEventListener("click", function(evt){
            if(hold === false && pickups[i].getAttribute("id") == "js--knife"){
            camera.innerHTML += knife;
            this.remove();
            hold = true;
            console.log(hold);
            }
          });

          pickups[i].addEventListener("click", function(evt){
            if(hold === false && pickups[i].getAttribute("id") == "js--tomato"){
            camera.innerHTML += tomaat;
            hold = true;
            this.remove();
            }
          })




        }


        }
        

 

      addListeners();

      

      //   const placeholders = document.getElementsByClassName('js--placeholder');
      //   let scene = document.getElementById('js--scene');
      //   const snijplank = document.getElementById("snijplank");


      //   for (let i = 0; i < placeholders.length; i++) {
      //     placeholders[i].addEventListener("click", function(evt){  //placeholders[i] is een array van alle elementen die als class js--placeholder hebben


      //       for (let j = 0; i < pickups.length; j++){
      //         if(hold == "true" && pickups[j].classList.contains("burger")){
      //           // als hetgeen wat is opgepakt als class "burger" heeft voert het deze if uit
  
      //           let box = document.createElement("a-entity")
      //           //<a-entity pickup class="js--interact js--pickup burger" id="burger" gltf-model="#burger-glb" position="0.5 1.14 1.4" scale="0.3 0.3 0.3"></a-entity>
      //           box.setAttribute("class", "js--pickup js--interact burger");
      //           box.setAttribute("id", "burger");
      //           box.setAttribute("gltf-model", "#burger-glb");
      //           box.setAttribute("scale",  "0.3 0.3 0.3")
      //           box.setAttribute("position", {x: this.getAttribute("position").x, y:"1.177", z: this.getAttribute("position").z });
      //           console.log(box)
      //           //hierboven wordt een nieuwe element gemaakt dat de attributen van hetgeen wat je vast hebt kopieert.
      //           scene.appendChild(box); // hier word het nieuwe element toegevoegd aan de scene
      //           document.getElementById("js--hold").remove(); // het element met id "js--hold" word verwijderd, dus het element in de camera word verwijderd
      //           addListeners();
      //           hold = null; //hold weer op null
      //         }else if(hold == "true" && pickups[j].classList.contains("tomaat")){
      //           let box = document.createElement("a-sphere")
      //           box.setAttribute("class", "js--pickup js--interact tomaat");
      //           box.setAttribute("color", pickups[j].getAttribute("color"));
      //           box.setAttribute("height", pickups[j].getAttribute("height"));
      //           box.setAttribute("radius",  pickups[j].getAttribute("radius"))
      //           box.setAttribute("position", {x: this.getAttribute("position").x, y:"1.14", z: this.getAttribute("position").z });
      //           scene.appendChild(box);
      //           document.getElementById("js--hold").remove();
      //           addListeners();
      //           hold = null;
      //         }
      //       }

      //     });
      //     }
          
      // //tomaat

      },
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 