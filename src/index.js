import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/
/* JS For Exercise-1 below */
function getAllJokes() {
  const jokes = jokeFacade.getJokes();
  let jokeList = jokes.map(joke => `<li>${joke}</li>`).join("\n");
  document.getElementById("jokes").innerHTML = jokeList;
}

getAllJokes()

function getJokeById(event) {
  event.preventDefault()
  let ID = document.getElementById("jokeID").value
  let joke = jokeFacade.getJokeById(ID);
  document.getElementById("showJoke").innerHTML = joke;
}

document.getElementById("getJoke").addEventListener("click", getJokeById);
document.getElementById("addJoke").addEventListener("click", addJoke);

function addJoke(event) {
  event.preventDefault()
  let jokeToAdd = document.getElementById("jokeID").value;
  jokeFacade.addJoke(jokeToAdd);
  getAllJokes();
}


/* JS For fExercise-2 below */
function getChuckJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("chuckJoke").innerHTML = data.value;

    });
}
getChuckJoke();


document.getElementById("getChuckJoke").addEventListener("click", getChuckJoke);

/* JS For Exercise-3 below */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");

