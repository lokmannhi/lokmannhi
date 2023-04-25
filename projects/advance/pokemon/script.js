const poke_container = document.getElementById("poke_container");
const pokemons_number = 151;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  const promises = [];
  for (let i = 1; i <= pokemons_number; i++) {
    promises.push(getPokemon(i));
  }

  const pokemons = await Promise.all(promises);
  pokemons.forEach((pokemon) => {
    createPokemonCard(pokemon);
  });
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  return pokemon;
};

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokeInnerHTML = `
    <div class="img-container">
      <img src="${pokemon.sprites.front_default}" alt="${name}" />
    </div>
    <div class="info">
      <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
      <label class="name-label" for="checkbox_${pokemon.id}">
        <input type="checkbox" id="checkbox_${pokemon.id}" value="${
    pokemon.name
  }">
        <h3 class="name">${name}</h3>
      </label>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}

fetchPokemons();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const playerName = document.getElementById("playerName").value;

  const selectedPokemonElements = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const selectedPokemon = [...selectedPokemonElements].map((el) => el.value);

  // do something with the player name and selected Pokemon, such as display them in a message
  const message = `Hello ${playerName}, you have selected the following Pokemon: ${selectedPokemon.join(
    ", "
  )}`;
  alert(message);
});

const messageEl = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const playerName = document.getElementById("playerName").value;

  const selectedPokemonElements = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const selectedPokemon = [...selectedPokemonElements].map((el) => el.value);

  // display the message with the player name and selected Pokemon
  const message = `Hello ${playerName}, you have selected the following Pokemon: ${selectedPokemon.join(
    ", "
  )}`;
  messageEl.textContent = message;

  // hide the other Pokemon cards
  const allPokemonCards = document.querySelectorAll(".pokemon");
  allPokemonCards.forEach((card) => {
    if (selectedPokemon.includes(card.querySelector("input").value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  // reset the form
  form.reset();

  // display all the Pokemon cards
  const allPokemonCards = document.querySelectorAll(".pokemon");
  allPokemonCards.forEach((card) => {
    card.style.display = "block";
  });

  // reset the message
  messageEl.textContent = "";

  // reset the checkbox
  const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
