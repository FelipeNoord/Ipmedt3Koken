AFRAME.registerComponent('cut', {
    schema: {},
    init: function () {

        document.getElementById("snijplank").addEventListener("click", function(evt){

            if(document.getElementById("snijplank").children[0].id == 'tomato'){
                document.getElementById("snijplank").innerHTML = '<a-box id="tomato_cut" color="blue" scale="0.5 50 0.5"></a-box><a-entity light="type: spot; color: #45B3E0; intensity: 0.3; angle: 7; target: #snijplank;" scale="0.1 0.1 0.1" position="0 300 0"></a-entity>'
            }
        })

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });s