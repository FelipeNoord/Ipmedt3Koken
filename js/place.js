AFRAME.registerComponent('place', {
    schema: {},
    init: function () {

    const camera = document.getElementById("js--camera");
    const cuttingBoard = document.getElementById("js--cuttingBoard");

    cuttingBoard.addEventListener("click", function(evt){
        
        if(camera.children[1].getAttribute("class") === "js--cutable"){
            // console.log(this);
            // cuttingBoard.innerHTML += `${camera.childeren[1]}`;
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