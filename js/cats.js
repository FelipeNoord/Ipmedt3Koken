//6c660162-3d00-4f27-a1e6-abce8ea12703

AFRAME.registerComponent('cats', {
    schema: {},
    init: function () {

      const frame = document.getElementById("cat");
    
        
        let randomCat = "https://api.thecatapi.com/v1/images/search";

        axios.defaults.headers.common['x-api-key'] = "6c660162-3d00-4f27-a1e6-abce8ea12703"
        axios.get(randomCat).then(function(response){
        updateCat(response.data);
        })
        
        updateCat = (data) =>{
        let image = data[0].url;
        console.log("url", image);
        frame.setAttribute('src', image);
        }

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });