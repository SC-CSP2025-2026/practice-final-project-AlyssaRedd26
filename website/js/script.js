const searchButton = document.querySelector("#search-btn");
const movieInput = document.querySelector("#input-movie-id");
const listGroup = document.querySelector(".list-group");
const movieTitleHeading = document.querySelector("#movie-title");

const loadMoviesByID = async (MovieID) => {
  if (!MovieID) {
    alert("Please enter a Movie ID");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/imdb-top-100-movies.p.rapidapi.com/${MovieID}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "81caa877592e58749a10e6ea0f341b9025907ba9880aeed2e3422dda681c15d3",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  const movieName = result.data.title;
  const writers = result.data.writers;

  listGroup.innerHTML = "";

  const title = `<li class="list-group-item movie-header"><strong>${result.data.title}<strong></li>`;
  listGroup.insertAdjacentHTML("beforeend", title);

  writers.forEach((writer) => {
    const listItem = `<li class="list-group-item">${writer}</li>`;
    listGroup.insertAdjacentHTML("beforeend", listItem);
  });
};

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const movieID = movieInput.value;
  loadMoviesByID(movieID);
});
