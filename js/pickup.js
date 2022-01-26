
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


//burger
      function addListeners(){
        for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener("click", function(evt){
          if(hold == null && pickups[i].classList.contains("burger")){
            pickups[i].setAttribute("id", "js--hold");
    
          camera.innerHTML += pickups[i].outerHTML;
          camera.children[1].setAttribute("position", "1 -1 -3")
          hold = "true";
          this.remove();
          }else if(hold == null && pickups[i].classList.contains("tomaat")){
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
          placeholders[i].addEventListener("click", function(evt){
            if(hold == "true" && pickups[i].classList.contains("burger")){
              let box = document.createElement("a-cylinder")
              box.setAttribute("class", "js--pickup js--interact burger");
              box.setAttribute("color", pickups[i].getAttribute("color"));
              box.setAttribute("height", pickups[i].getAttribute("height"));
              box.setAttribute("radius",  pickups[i].getAttribute("radius"))
              box.setAttribute("position", {x: this.getAttribute("position").x, y:"0.5", z: this.getAttribute("position").z });
              snijplank.appendChild(box);
              document.getElementById("js--hold").remove();
              addListeners();
              hold = null;
            }else if(hold == "true" && pickups[i].classList.contains("tomaat")){
              let box = document.createElement("a-sphere")
              box.setAttribute("class", "js--pickup js--interact tomaat");
              box.setAttribute("color", pickups[i].getAttribute("color"));
              box.setAttribute("height", pickups[i].getAttribute("height"));
              box.setAttribute("radius",  pickups[i].getAttribute("radius"))
              box.setAttribute("position", {x: this.getAttribute("position").x, y:"0.5", z: this.getAttribute("position").z });
              snijplank.appendChild(box);
              document.getElementById("js--hold").remove();
              addListeners();
              hold = null;


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
 
 