const url = "https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?categories=13";
console.log(url);
const postRender = document.querySelector(".post-Container");
const title = document.querySelector(".tittleInfo");
const loading = document.querySelector(".loader");
console.log(postRender);

async function getRenderCategory(url) {
  try {
    const response = await fetch(url);
    const renders = await response.json();
    console.log(renders);

    postRender.innerHTML = " ";
    renders.forEach(function (getRenders) {
      title.innerHTML = `My Blog | ${getRenders.title.rendered}`;
      postRender.innerHTML += `<a href="/render.html?id=${getRenders.id}">
                                  <article class="blog-artical">
                                    <h1 class="heading-post">${getRenders.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${getRenders.jetpack_featured_media_url}" alt="" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <a href="blog_specific.html?id=${getRenders.id}"><div class="post-summary">
                                        <p class="text">${getRenders.excerpt.rendered}
                                        </p>
                                      </div></a>
                                    </div>
                                  </article></a>
                                  <a href="blog_specific.html?id=${getRenders.id}">
                                  <div class="cta-big">
                                    <button class="cta-button">
                                       Read more about this post
                                    </button>
                                  </div> </a>`;
    });
  } catch (error) {
    console.log(error);
    postRender.innerHTML = displayError("we have found an error");
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`;
    }
  }
}
getRenderCategory(url);
