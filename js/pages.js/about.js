//-------------------About me page API call----------
const aboutMe = "https://rohitkumar.rkamdahl.no/wp-json/wp/v2/pages/118";
console.log(aboutMe);
const aboutPage = document.querySelector(".post-blogs");
const loading = document.querySelector(".loader");
const title = document.querySelector(".tittleInfo");
console.log(loading);
console.log(aboutPage);

async function fetchPage() {
  try {
    const response = await fetch(aboutMe);
    const results = await response.json();
    title.innerHTML = "Design blog | About me";
    aboutPage.innerHTML = "";
    aboutPage.innerHTML += `<div class="blog-artical">
                            <div class="about">
                            <h1 class="heading-post">${results.title.rendered}</h1>
                            </div>
                            <div class="layout-design">
                              ${results.content.rendered}
                            </div>
                          </div>`;
  } catch (error) {
    console.log("error");
    textContainer.innerHTML = displayError("we have found an error");
    function displayError(massage) {
      return `<div class="found-error"> ${massage}</div>`;
    }
  }
}
fetchPage();
