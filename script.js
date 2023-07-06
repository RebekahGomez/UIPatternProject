// let currentImage = "";

// prevButton.addEventListener("click", fetchDogImage);
// nextButton.addEventListener("click", fetchDogImage);

let images = [];
let breeds = [];
let currentIndex = 0;
// let breed = "";

function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
      // images = data.message;
      breeds = Object.keys(data.message);
      fetchImagesForBreeds();
    })
    .catch(error => console.error(error));
}

function fetchImagesForBreeds() {
  breeds.forEach(breed => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => res.json())
      .then(data => {
        if (data.message && data.message.length) {
          images.push({ breed: breed, url: data.message[0] });
        }
        if (breed === breeds[breeds.length - 1]) {
          displayCurrentImage();
        }
      })
      .catch(error => console.error(error));
  });
}

function displayCurrentImage() {
  if (images.length > 0 && currentIndex >= 0 && currentIndex < images.length) {
    document.getElementById("dog-image").src = images[currentIndex].url;
    document.querySelector(".dogBreed").innerText = images[currentIndex].breed;
  } else {
    console.error("Invalid index or images array is empty");
  }
}

let prevButton = document.querySelector(".prevButton");
let nextButton = document.querySelector(".nextButton");

prevButton.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  displayCurrentImage();
});

nextButton.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  displayCurrentImage();
});

fetchDogImage();


// everything below was practice we went over in class
// Wed. July 5th - recordings are available via Slack
// function fetchBookAPI() {
//   // Documentation https://covers.openlibrary.org/b/id/coverID-Sjpg
//   let baseURL = "https://openlibrary.org/subjects/" //for subjects endpoint
//   /// authors endpoint: https://openlibrary.org/search/authors.json?q=Author
//   let subject = "love" // you can change the subject to different genres like "horror"

//   fetch(`${baseURL} ${subject}.json`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       displayUI(data.results)
//     })
// }

// fetchBookAPI();

// function displayUI(results) {
//   console.log(results);
// }

// when you go to Chrome - you can get cover_ID

// https://hp-api.onrender.com/api/characters 

// function fetchHarryPotterAPI() {
//   let baseURL = "https://hp-api.onrender.com/api"
//   //Endpoints: /characters, /character/:id, /characters/students, characters/house/:house, /spells
//   fetch(`${baseURL}/characters/students`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
// }

// fetchHarryPotterAPI();



// https://pokeapi.co 
// // Documentation: pokeapi.co
// function fetchPokemonAPI() {
//   let baseURL = "https://pokeapi.co/api/v2/pokemon"
//   //Endpoints: 
//   fetch(`${baseURL}?limit=151`)
//     .then((res) => res.json())
//     .then((data) => {
//       let pokemon = document.querySelector(".pokemon")
//       let img = document.querySelector(".img")
//       console.log(data.results[0].url);
//       pokemon.innerText = data.results[0].name
//       img.src = data.results[0].url

//       //displayPokemonUI(data.results)
//     })
// }

// fetchPokemonAPI();

// function displayPokemonUI(pokemon) {
//   // Image (url goes here) Raul goes over this at 10:17am

//   const div = document.querySelector(".works");

//   pokemon.forEach((pokemon) => {
//     let pokemonHTML = `
//     <div class = "books">
//     <h1>${pokemon.name}</h1>
//     <img src="url goes here: />
//     </div>
//     `;

//     div.insertAdjacentHTML("beforeend", pokemonHTML)
//   })
// }