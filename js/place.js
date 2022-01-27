AFRAME.registerComponent('place', {
    schema: {},
    init: function () {

    const camera = document.getElementById("js--camera");
    const cuttingBoard = document.getElementById("js--cuttingBoard");

    cuttingBoard.addEventListener("click", function(evt){
        
        if(camera.children[1].classList.contains("js--cutable")){
            camera.children[1].setAttribute("id", "js--cuttingTomato")
            cuttingBoard.outerHTML += camera.children[1].outerHTML;
            let tomato = document.getElementById("js--cuttingtomato");
            camera.children[1].remove();
            setTimeout(tomatoMove = (evt) => {
                tomato.setAttribute("position", "0.6 1.16 0.6")
                console.log(tomato);
            }, 1000)
            
            console.log();
            console.log("hallo");
        }
    })
    

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });