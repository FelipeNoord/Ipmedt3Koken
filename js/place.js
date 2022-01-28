// AFRAME.registerComponent('place', {
//     schema: {},
//     init: function () {

//     const camera = document.getElementById("js--camera");
//     const cuttingBoard = document.getElementById("js--cuttingBoard");

//     cuttingBoard.addEventListener("click", function(evt){
        
//         if(camera.children[1].classList.contains("js--cutable")){

//             cuttingBoard.innerHTML += camera.children[1].outerHTML;
//             cuttingBoard.setAttribute("class", "");
//             let product = cuttingBoard.children[0];
//             camera.children[1].remove();
//             product.setAttribute("position", "0 0.05 0");
//             if(product.getAttribute("id") == "js--tomato"){
//                 product.setAttribute("scale", "0.1 0.1 0.1");
//                 console.log(product);
                
//             }
//         }
//     })
    

//     },
//     update: function () {},
//     tick: function () {},
//     remove: function () {},
//     pause: function () {},
//     play: function () {}
//   });