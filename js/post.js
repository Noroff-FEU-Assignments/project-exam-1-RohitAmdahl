const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?_embed'
console.log(url)
const postContainer = document.querySelector('.post-blogs')
const loading = document.querySelector('.loader')
// console.log(postContainer)
// console.log(loading)

async function blogPost(url) {
  try {
    const response = await fetch(url)
    const results = await response.json()
    //console.log(results)
    loading.innerHTML = ''
    results.forEach(function (post) {
      postContainer.innerHTML += `<a href="blog_specific.html?id=${post.id}"><article                  class="blog-artical">
                                    <h1 class="heading-post">${post.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${post.jetpack_featured_media_url}" alt="" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <div class="post-summary">
                                        <p class="text">${post.excerpt.rendered}
                                        </p>
                                      </div>
                                    </div>
                                  </article>
                                  <div class="cta-big">
                                    <button class="cta-button">
                                      Read more about this post
                                    </button>
                                  </div> </a>`
    })
  } catch (err) {
    console.log('error')
    textContainer.innerHTML = displayError('we have found an error')
    function displayError(massage) {
      return `<div> ${massage}</div>`
    }
  }
}

blogPost(url)
