// Registering component in foo-component.js
AFRAME.registerComponent('pickup', {

  schema: {},
  init: function () {
      // TELEPORTEREN //
      let pickups = document.getElementsByClassName("js--pickup");
      const camera = document.getElementById("js--camera");
      let hold = null;

    function addListeners(){
      for (let i = 0; i < pickups.length; i++) {
      pickups[i].addEventListener("click", function(evt){
        if(hold == null){
          camera.innerHTML+= pickups[i].outerHTML
          camera.children[1].setAttribute("position","1 1 -3");
          hold = "true";
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
          if(hold == "true"){
            let box = camera.children[1];
            box.setAttribute("position", {x: this.getAttribute("position").x, y:this.getAttribute("position").y + 0.5, z: this.getAttribute("position").z });
            scene.appendChild(box);
            document.getElementsByClassName("js--hold") == null
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