AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {

        document.getElementById("snijplank").onmouseenter = (event) =>{
            if(document.getElementById("snijplank").children[0].id == 'tomato'){
                document.getElementById("snijplank").innerHTML = '<a-box id="tomato_cut" color="blue" scale="0.5 50 0.5"></a-box>'
            }
        }

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });