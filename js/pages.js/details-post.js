const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const linkUrl =
  "https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts/" + id + "?_embed";
console.log(linkUrl);
const postDetails = document.querySelector(".post-Container");
const title = document.querySelector(".tittleInfo");

const loading = document.querySelector(".loader");
console.log(postDetails);

async function fetchPost() {
  try {
    const response = await fetch(linkUrl);
    const link = await response.json();
    postDetails.innerHTML = "";
    title.innerHTML = `My Blog | ${link.title.rendered}`;
    postDetails.innerHTML += ` <article>
                                    <h1 class="heading-post">${link.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${link.jetpack_featured_media_url}" alt="${link._embedded["wp:featuredmedia"]["0"].alt_text}" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <div class="text-pic">
                                       ${link.content.rendered}
                                      </div>
                                    </div>
                                  </article>`;
  } catch (error) {
    console.log("error");
    postDetails.innerHTML = displayError("we have found an error");
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`;
    }
  }

  //  ----------image model -0--------------------
  const picture = document.getElementById("image-model"); //---div wrapper
  // const pictureModel = document.getElementById("img-model"); //---div wrapper-2

  const modelPic = document.getElementById("model"); //...img tag
  // const modelPics = document.getElementById("model-1"); //...img tag-2

  const image = document.querySelector(".post-picture"); //----api container fetch result

  const detailImage = document.querySelector(".blog-container");
  console.log(detailImage); //----api container fetch result-details

  const restPicture = document.querySelectorAll(".blog-container figure img");
  console.log(restPicture);

  image.onclick = function () {
    picture.style.display = "block";
    modelPic.src = this.src;
    console.log(["modelPic.src"]);
  };

  picture.onclick = () => {
    picture.style.display = "none";
    console.log("close");
  };
  //----------------
  // //------ local storage
  // window.localStorage.setItem("post", "${post.title.rendered}");
  // //----------------

  //-----------------------
}
fetchPost();
