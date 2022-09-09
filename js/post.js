const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts/?per_page=20'
console.log(url)
const postContainer = document.getElementById('post-blogs')
const loading = document.querySelector('.loader')
// console.log(postContainer)
// console.log(loading)

async function blogPost(url) {
  try {
    const response = await fetch(url)
    const results = await response.json()
    //console.log(results)
    loading.innerHTML = ' '
    results.forEach(function (post) {
      postContainer.innerHTML += `<article id="blog-artical">
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
                                  </div>`
    })
  } catch (err) {
    console.log(error)
  }
}

blogPost(url)
