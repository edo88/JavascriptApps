const apiKey = "0d163e8c5f6afae6e912160105a8113a";
const imgApi= "https://image.tmdb.org/t/p/w1280";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const form = document.getElementById("search-form");
const query = document.getElementById("search-input");
const result = document.getElementById("result");

let page = 1;
let isSearching = false;

// Fetch JSON data from url
async function fetchData(url){
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        return await response.json();
    }catch(error){
        return null;
    }
}

// Fetch and show results based on url
async function fetchAndShowResult(url){
    const data = await fetchData(url);
    if (data && data.results){
        showResults(data.results);
    }
}

// Crear tarjeta pelicula en html ( html card)

