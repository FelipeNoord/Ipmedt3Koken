AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {
        const camera = document.getElementById("js--camera");
        const mes = document.getElementsByClassName("mes");
        const cuttable = document.getElementsByClassName("js--cuttable");
        let hold = "knife";
        const tomato = document.getElementById("js--tomaat");
        const knife = '<a-entity gltf-model="#chefsmes-glb" id="js--knife" rotation="-45 80 50" position="0.3 -0.2 -0.3" scale="0.1 0.1 0.1"></a-entity>';


        tomato.addEventListener("click", function(evt){
          if(hold === "knife" && tomato.getAttribute("id") == "js--tomaat"){
            camera.children[1].remove();
            console.log("hallo");
            const cutKnife = document.getElementById("js--knife");
            tomato.outerHTML += cutKnife;
            console.log(cutKnife);
            cutKnife.setAttribute('animation__pos', "property: position; from: 1.2 1.20 0.25; to: 0.8 1.20 0.25; dur: 1000;");
            cutKnife.setAttribute("animation__rot", "property: rotation; from: 0 -90 0; to: 0 -90 30; dur: 200; loop:5");
          }
        });
    


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });