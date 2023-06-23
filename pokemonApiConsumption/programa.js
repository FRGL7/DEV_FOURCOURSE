console.log("Hola");

const boton = document.createElement("button");
const input = document.createElement("input");
const label = document.createElement("label");

input.name = "pokemonName";
input.id = "pName";
input.placeholder = "pikachu";
boton.innerText = "Buscar";
label.innerText = "Enter a pokemon's name to get its data";

boton.addEventListener("click", obtenerPokemon);

/*document.body.append(label);*/
document.body.append(document.createElement("hr"));
document.body.append(input);
document.body.append(boton);

async function obtenerPokemon() {
  const pokemonName = input.value;
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  );
  const pokemon = await response.json();
  /* document.getElementById("descripcion").innerText =pokemon.*/
  document.getElementById("name").innerText = pokemon.name;
  document.getElementById("clave").innerText = pokemon.id;
  document.getElementById("imagen").src = pokemon.sprites.front_default;
  document.getElementById("altura").innerText = "heigth: " + pokemon.height;
  document.getElementById("peso").innerText = "weight: " + pokemon.weight / 10;
  const types = pokemon.types;
  if (types.length > 1) {
    document.getElementById("type1").innerText =
      "type 1: " + types[0].type.name;
    document.getElementById("type2").innerText =
      "type 2: " + types[1].type.name;
  } else {
    document.getElementById("type1").innerText = "type: " + types[0].type.name;
    document.getElementById("type2").innerText = "";
  }

  console.log(pokemon);
}

/*
boton.addEventListener("click",()=>{
   fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((pokemon)=>{
        pokemon.json().then((info)=>{
            console.log(info)
        })
   })
})*/
