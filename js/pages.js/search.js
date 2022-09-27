const title = document.querySelector(".tittleInfo");
title.innerHTML = "Design Blog | Search page";
const searchText = document.querySelector(".search-result");

const searchButton = document.getElementById("search-cta_search-page");

searchButton.onclick = () => {
  const searchInput = document.querySelector("#search-box").value.toUpperCase();
  console.log(searchInput);
  const correctURLForThisSearch =
    "https://rohitkumar.rkamdahl.no/wp-json/wp/v2/search?search=" + searchInput;

  async function searchApi() {
    try {
      const response = await fetch(correctURLForThisSearch);
      const searchResult = await response.json();

      searchResult.forEach((search) => {
        searchText.innerHTML += `  <p class="search-result-text">${
          ("result", search.title)
        }</p>`;
      });
    } catch (error) {
      console.log(error);
    }
  }
  searchApi();
};
