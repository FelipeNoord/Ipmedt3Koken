AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {
        let mes = document.getElementsByClassName("mes");
        let cuttable = document.getElementsByClassName("js--cuttable");

            for (let i = 0; i < cuttable.length; i++) {
                cuttable[i].addEventListener("click", function(evt){
                 if(mes[0].id == "js--hold" && cuttable[i].classList.contains("tomaat")){
                    console.log("ja man")
                  cuttable[i].setAttribute("color", "blue");
              }
            }
    
                )}
          
    


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });