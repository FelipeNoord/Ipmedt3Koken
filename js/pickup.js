  // Registering component in foo-component.js
  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        const tomato = document.getElementById("js--tomaat");
        let hold = null;
        const knife = '<a-entity gltf-model="#chefsmes-glb" id="mes" rotation="-45 80 50" position="0.3 -0.2 -0.3" scale="0.1 0.1 0.1"></a-entity>';

      function addListeners(){
        
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){
          if(hold == null && pickups[i].getAttribute("id") == "mes"){
          camera.innerHTML += knife;
          hold = "knife";
          console.log(hold);
          this.remove();
          }
        });
        tomato.addEventListener("click", function(evt){
          if(hold === "knife" && tomato.getAttribute("id")){
            camera.children[1].remove();
            tomato.outerHTML += knife;
            const cutKnife = document.getElementById("mes");
            cutKnife.setAttribute('animation__pos', "property: position; from: 1.2 1.20 0.25; to: 0.8 1.20 0.25; dur: 1000;");
            cutKnife.setAttribute("animation__rot", "property: rotation; from: 0 -90 0; to: 0 -90 30; dur: 200; loop:5");
            hold = tomatoCut;
          }
        })


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
 
 