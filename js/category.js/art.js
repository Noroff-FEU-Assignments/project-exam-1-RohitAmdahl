const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?categories=17'
console.log(url)
const postRender = document.querySelector('.post-Container')
const loading = document.querySelector('.loader')
console.log(postRender)

async function getRenderCategory(url) {
  try {
    const response = await fetch(url)
    const renders = await response.json()
    console.log(renders)
    postRender.innerHTML = ' '
    renders.forEach(function (getArt) {
      postRender.innerHTML += `<a href="/art.html?id=${getArt.id}"><article                  class="blog-artical">
                                    <h1 class="heading-post">${getArt.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${getArt.jetpack_featured_media_url}" alt="" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <a href="blog_specific.html?id=${getArt.id}"><div class="post-summary">
                                        <p class="text">${getArt.excerpt.rendered}
                                        </p>
                                      </div></a>
                                    </div>
                                  </article></a>
                                  <a href="blog_specific.html?id=${getArt.id}">
                                  <div class="cta-big">
                                    <button class="cta-button">
                                       Read more about this post
                                    </button>
                                  </div> </a>`
    })
  } catch (error) {
    console.log(error)
    postRender.innerHTML = displayError('we have found an error')
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`
    }
  }
}
getRenderCategory(url)
