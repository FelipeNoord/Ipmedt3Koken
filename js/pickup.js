
    //   // TELEPORTEREN //
    //   let pickups = document.getElementsByClassName("js--pickup");
    //   const camera = document.getElementById("js--camera");
    //   let hold = null;

    // function addListeners(){
    //   for (let i = 0; i < pickups.length; i++) {
    //   pickups[i].addEventListener("click", function(evt){
    //     if(hold == null){
    //       camera.innerHTML+= pickups[i].outerHTML
    //       camera.children[1].setAttribute("position","1 1 -3");
    //       hold = "true";
    //       this.remove();
    //     }
    //   });
    //   }
    // }

    // addListeners();



    //   const placeholders = document.getElementsByClassName('js--placeholder');
    //   let scene = document.getElementById('js--scene');
    //   let snijplank = document.getElementById("snijplank");



    //   for (let i = 0; i < placeholders.length; i++) {
    //     placeholders[i].addEventListener("click", function(evt){
    //       if(hold == "true"){
    //         let box = camera.children[1];
    //         box.setAttribute("position", {x: box.getAttribute("position").x, y:box.getAttribute("position").y + 0.5, z: box.getAttribute("position").z });
    //         console.log(box)
    //         snijplank.appendChild(box);
    //         addListeners();
    //         hold = null;
    //       }
    //     });
    //     }
  // Registering component in foo-component.js
  AFRAME.registerComponent('pickup', {
    
    schema: {},
    init: function () {  
        // TELEPORTEREN //
        let pickups = document.getElementsByClassName("js--pickup");
        const camera = document.getElementById("js--camera");


        let hold = null;
        console.log("hallo");


//burger
      function addListeners(){
        
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){ //pickups is een array met alle elementen die als class "pickup" hebben
          if(hold == null && pickups[i].classList.contains("burger")){ 
            //hold = null als het item niet is opgepakt en aan de camera vast zit
            //De if checkt of dat echt zo is en of het element wat pickupable is als class ook nog "burger" heeft
            pickups[i].setAttribute("id", "js--hold");
            // hier word er een id toegevoegd aan in dit geval "burger" genaamd js--hold
    
          camera.innerHTML += pickups[i].outerHTML;
          camera.children[1].setAttribute("position", "1 -1 -3")
          hold = "true";
          this.remove();
          // dan word de burger (pickups[i]) toegevoegd aan de camera als child en krijgt het een positie mee
          // daarna word hold op true gezet, dit is nodig voor het plaatsen van dit element.
          //this.remove zorgt ervoor dat this (this refereerd naar pickups[i], dus de burger die je oppakt) word verwijderd (het burger element wat nog niet is opgepakt 
          //word verwijderd en er word een nieuwe burger gemaakt als child in camera)

          }else if(hold == null && pickups[i].classList.contains("tomaat")){
            //dit werkt hetzelfde als burger maar dan word er gecheckt of het element als class "tomaat" heeft ipv burger, dit veranderd dus per element wat je wilt oppakken
            pickups[i].setAttribute("id", "js--hold");
    
            camera.innerHTML += pickups[i].outerHTML;
            camera.children[1].setAttribute("position", "1 -1 -3")
            hold = "true";
            this.remove();
      }else if(hold == null && pickups[i].classList.contains("mes")){
        //dit werkt hetzelfde als burger maar dan word er gecheckt of het element als class "mes" heeft ipv burger, dit veranderd dus per element wat je wilt oppakken
        pickups[i].setAttribute("id", "js--hold");
    
            camera.innerHTML += pickups[i].outerHTML;
            camera.children[1].setAttribute("position", "1 -1 -3")
            hold = "true";
            this.remove();
      }


      });
        }
      }

      addListeners();



        const placeholders = document.getElementsByClassName('js--placeholder');
        let scene = document.getElementById('js--scene');
        const snijplank = document.getElementById("snijplank");


        for (let i = 0; i < placeholders.length; i++) {
          placeholders[i].addEventListener("click", function(evt){  //placeholders[i] is een array van alle elementen die als class js--placeholder hebben


            for (let j = 0; i < pickups.length; j++){
              if(hold == "true" && pickups[j].classList.contains("burger")){
                // als hetgeen wat is opgepakt als class "burger" heeft voert het deze if uit
  
                let box = document.createElement("a-entity")
                //<a-entity pickup class="js--interact js--pickup burger" id="burger" gltf-model="#burger-glb" position="0.5 1.14 1.4" scale="0.3 0.3 0.3"></a-entity>
                box.setAttribute("class", "js--pickup js--interact burger");
                box.setAttribute("id", "burger");
                box.setAttribute("gltf-model", "#burger-glb");
                box.setAttribute("scale",  "0.3 0.3 0.3")
                box.setAttribute("position", {x: this.getAttribute("position").x, y:"1.177", z: this.getAttribute("position").z });
                console.log(box)
                //hierboven wordt een nieuwe element gemaakt dat de attributen van hetgeen wat je vast hebt kopieert.
                scene.appendChild(box); // hier word het nieuwe element toegevoegd aan de scene
                document.getElementById("js--hold").remove(); // het element met id "js--hold" word verwijderd, dus het element in de camera word verwijderd
                addListeners();
                hold = null; //hold weer op null
              }else if(hold == "true" && pickups[j].classList.contains("tomaat")){
                let box = document.createElement("a-sphere")
                box.setAttribute("class", "js--pickup js--interact tomaat");
                box.setAttribute("color", pickups[j].getAttribute("color"));
                box.setAttribute("height", pickups[j].getAttribute("height"));
                box.setAttribute("radius",  pickups[j].getAttribute("radius"))
                box.setAttribute("position", {x: this.getAttribute("position").x, y:"1.14", z: this.getAttribute("position").z });
                scene.appendChild(box);
                document.getElementById("js--hold").remove();
                addListeners();
                hold = null;
              }
            }

          });
          }
          
      //tomaat

      },
    update: function () {
    },
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });
 
 