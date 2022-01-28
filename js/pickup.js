  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");
        const tomato = document.getElementById("js--tomato");
        const knife = document.getElementById("js--knife");
        const knifeP = '<a-entity cut class="js--interact js--pickup" id="js--cut" gltf-model="#chefsmes-glb" metalness: 1; roughness: 0; rotation="-30 90 20" position="0.2 -0.2 -0.4" scale="0.1 0.1 0.1"></a-entity>'
      
        let hold = null;
        console.log("hallo");


//burger
      function addListeners(){
        
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben
          if(pickups[i].id == "js--bun"){
             document.getElementById("js--bun").setAttribute("position", "0.6 1.17 0.6");
          }

        


      });
        }

        knife.addEventListener("click", function(evt){
          if(hold == null && knife.getAttribute("id") == "js--knife"){
            console.log("hallo");
            this.remove();
            camera.innerHTML += knifeP; 
          }
        })
      }

      addListeners();
      },
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 