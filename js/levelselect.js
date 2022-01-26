AFRAME.registerComponent('levelselect', {
    schema: {},
    init: function () {

        const levelOneButton = document.getElementById("js--level1");
        const levelTwoButton = document.getElementById("js--level2");
        const levelThreeButton = document.getElementById("js--level3");
        
        levelOneButton.addEventListener("click", function(event){
            window.location.href="level1.html";
        });

        levelTwoButton.addEventListener("click", function(event){
            window.location.href="level2.html";
        });

        levelThreeButton.addEventListener("click", function(event){
            window.location.href="level3.html";
        })

    },

  });