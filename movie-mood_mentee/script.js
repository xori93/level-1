// STEP 1: Make an object called movieRecs
// This object should have 3 keys: happy, sad, excited
// Each key has an array of movie title strings
const movieRecs = {
  happy: ["Forrest Gump", "The Princess Bride", "The Intern"],
  sad: ["Blue Valentine", "The Pursuit of Happiness", "Marrage Story"],
  neutral: ["The Terminal", "inception", "Catch Me If You Can"]
}

// STEP 2: Select all 3 buttons and the <ul> from the HTML using getElementById
const happyMood = document.getElementById("happy");
const sadMood = document. getElementById("sad");
const neutralMood = document.getElementById("neutral");
const movieList = document.getElementById("movie-list")

// STEP 3: Create a function called showMovies
// It should accept one argument called mood
function showMovies(mood) {
  // STEP 4: Inside the function, clear the old list using innerHTML = ""
  movieList.innerHTML = "";

  // STEP 5: Loop through the movies for that mood using forEach

  movieRecs[mood].forEach(movie => {
    // STEP 6: For each movie:
  // - create a <li> element
  // - set its textContent to the movie title
  // - append it to the movie list
    const li = document.createElement("li");
    li.textContent = movie;

    movieList.appendChild(li)
  });
}

// STEP 7: Add click events to each button
// Each one should call showMovies with the appropriate mood string

happyMood.addEventListener("click", function () {
  showMovies("happy");
  happyMood.textContent = "Happy";
});

sadMood.addEventListener("click", function () {
  showMovies("sad");
  sadMood.textContent = "Sad";
});

neutralMood.addEventListener("click", function () {
  showMovies("neutral");
  neutralMood.textContent = "Neutral"
});