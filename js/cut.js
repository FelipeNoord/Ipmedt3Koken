AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {
        const camera = document.getElementById("js--camera");
        const cuttable = document.getElementsByClassName("js--cuttable");
        let hold = "knife";
        const tomato = document.getElementById("js--tomato");
        const knife = '<a-entity gltf-model="#chefsmes-glb" id="js--cuttingknife" rotation="0 -90 0" position="0.3 -0.2 -0.3" scale="0.1 0.1 0.1"></a-entity>';
        const bun = document.getElementById("js--bun");


        function addListeners() {
          bun.addEventListener("click", function(evt){
            console.log(bun.getAttribute("position"));
            if(bun.getAttribute("id") == ("js--bun")){
              bun.outerHTML += knife;

              let knifeAnimations = document.getElementById("js--cuttingknife");

              knifeAnimations.setAttribute("animation__pos" , "property: position; from: 0.8 1.25 0.3; to: 0.4 1.25 0.3; dur: 1000");
              knifeAnimations.setAttribute("animation__rot" , "property: rotation; from: 0 -90 30; to: 0 -90 0; loop: 4; dur: 250; easing: linear;");
            }
          });
        }
        
    addListeners();


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });