  // Registering component in foo-component.js
  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        let hold = null;
        console.log("hallo");

      function addListeners(){
        
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){
          if(hold == null){
          camera.innerHTML += '<a-entity gltf-model="#chefsmes-glb" id="mes" rotation="-45 80 50" position="0.3 -0.2 -0.3" scale="0.1 0.1 0.1"></a-entity>';
          hold = "box";
          console.log(this);
          this.remove();
          }
        });
        }
      }

      addListeners();



        const placeholders = document.getElementsByClassName('js--placeholder');
        let scene = document.getElementById('js--scene');


        for (let i = 0; i < placeholders.length; i++) {
          placeholders[i].addEventListener("click", function(evt){
            if(hold == "box"){
              let box = document.createElement("a-box");
              box.setAttribute("class", "js--pickup js--interact js--cookable");
              box.setAttribute("color", "green");
              box.setAttribute("position", {x: this.getAttribute("position").x, y:"0.5", z: this.getAttribute("position").z });
              scene.appendChild(box);
              document.getElementById("js--hold").remove();
              addListeners();
              hold = null;
            }
          });
          }     
      },
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 