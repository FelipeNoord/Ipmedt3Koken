window.onload = () =>{ 

    //snij eten op de snijplank
    document.getElementById("snijplank").onmouseenter = (event) =>{
        if(document.getElementById("snijplank").children[0].id == 'tomato'){
            document.getElementById("snijplank").innerHTML = '<a-box id="tomato_cut" color="blue" scale="0.5 50 0.5"></a-box>'
        }
    }

};

