AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {
        const camera = document.getElementById("js--camera");
        const cuttable = document.getElementsByClassName("js--cuttable");
        let hold = "knife";
        const tomato = document.getElementById("js--tomato");
        const knife = '<a-entity gltf-model="#chefsmes-glb" id="js--knife" rotation="-45 80 50" position="0.3 -0.2 -0.3" scale="0.1 0.1 0.1"></a-entity>';
        const bun = document.getElementById("js--bun");

        bun.eventListener("click", function(evt){
          if(hold === "knife" && bun.getAttribute("id") == "js--bun"){
            camera.children[1].remove();
            console.log("hallo");
            
            bun.outerHTML += knife;
            const cutKnife = document.getElementById("js--knife");
            cutKnife.setAttribute('animation__pos', "property: position; from: 1.2 1.20 0.25; to: 0.8 1.20 0.25; dur: 1000;");
            cutKnife.setAttribute("animation__rot", "property: rotation; from: 0 -90 0; to: 0 -90 30; dur: 200; loop:5");
            
            setTimeout(returnKnife = () =>{
              cutKnife.setAttribute();
            }, )
          }
        });
    


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });