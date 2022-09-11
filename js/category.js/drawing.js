const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?categories=15'
console.log(url)
const drafting = document.querySelector('.post-Container')
const loading = document.querySelector('.loader')
console.log(drafting)

async function getRenderCategory(url) {
  try {
    const response = await fetch(url)
    const getDrafting = await response.json()
    console.log(getDrafting)
    drafting.innerHTML = ' '
    getDrafting.forEach(function (getResults) {
      drafting.innerHTML += `<a href="/drawing.html?id=${getResults.id}"><article                  class="blog-artical">
                                    <h1 class="heading-post">${getResults.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${getResults.jetpack_featured_media_url}" alt="" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <a href="blog_specific.html?id=${getResults.id}"><div class="post-summary">
                                        <p class="text">${getResults.excerpt.rendered}
                                        </p>
                                      </div></a>
                                    </div>
                                  </article></a>
                                  <a href="blog_specific.html?id=${getResults.id}">
                                  <div class="cta-big">
                                    <button class="cta-button">
                                       Read more about this post
                                    </button>
                                  </div> </a>`
    })
  } catch (error) {
    console.log(error)
    drafting.innerHTML = displayError('we have found an error')
    function displayError(massage) {
      return `<div class="error"> ${massage}</div>`
    }
  }
}
getRenderCategory(url)
