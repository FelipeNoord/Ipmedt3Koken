AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {

        document.getElementById("snijplank").onmouseenter = (event) =>{
            if(document.getElementById("snijplank").children[0].id == 'tomato'){
                document.getElementById("snijplank").innerHTML = '<a-cylinder id="tomato_cut" color="red" radius="0.4" height="2" position="0 3 0"></a-cylinder>'
            }
        }

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });s