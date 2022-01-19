  // Registering component in foo-component.js
  AFRAME.registerComponent('cook', {
    schema: {},
    init: function () { 
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      let cookable = document.getElementsByClassName("js--cookable");
      const button = document.getElementById("js--cookingButton");
      const camera = document.getElementById("js--camera");

      button.addEventListener("click", async function(evt){
        for (let i = 0; i < cookable.length; i++) {
          await sleep(2000);
          cookable[i].setAttribute("color", "brown");


        }
      })



        },
      
    
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 