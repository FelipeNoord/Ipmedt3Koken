AFRAME.registerComponent('cats', {
    schema: {},
    init: function () {

      const frame = document.getElementById("cat");
    
        let randomCat = "https://api.thecatapi.com/v1/images/search";
        console.log(randomCat)

        axios.get(randomCat).then(function(response){
        updateFilm(response.data);
        })
        
        updateFilm = (data) =>{
        console.log(data.title);
        film.setAttribute('value',data.title);
        }

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });