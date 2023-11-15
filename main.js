const searchInput = document.getElementById("location");
const pokegif = document.querySelector(".gif");
const pokename =  document.querySelector(".name");
const poketype =  document.querySelector(".type");
const pokeheight =  document.querySelector(".height");
const pokeweight =  document.querySelector(".weight");
const pokebio =  document.querySelector(".bio");

function search() {
    fetch (`https://pokeapi.co/api/v2/pokemon/${searchInput.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        pokename.innerHTML=data.name
        pokeheight.innerHTML=`${(data.height)/10}m`       
        pokeweight.innerHTML=`${(data.weight)/10*2.20462.toFixed(3)}kg`
        poketype.innerHTML=data.types[0].type.name
        var imgElement = document.createElement('img');

            // Set the src attribute to the GIF URL
            imgElement.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;

            // Clear the existing content of pokegif and append the img element
            pokegif.innerHTML = '';
            pokegif.appendChild(imgElement);
        
    })
}