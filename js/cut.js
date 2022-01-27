AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {
        let holding = document.getElementsById("js--hold");
        const mes = document.getElementsByClassName("mes");
        const cuttable = document.getElementsByClassName("js--cuttable");

        cuttable.addEventListener("click", async function(evt){
            for (let i = 0; i < cuttable.length; i++) {
              if(mes.classList){

              }
    
    
            }
          })
    


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });