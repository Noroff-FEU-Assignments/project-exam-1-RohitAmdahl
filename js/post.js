const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts/?per_page=20'
console.log(url)
const postContainer = document.getElementById('post-blogs')
const loading = document.querySelector('.loader')
console.log(postContainer)
console.log(loading)

async function blogPost(url) {
  const response = await fetch(url)
  const results = await response.json()
  console.log(results)

  results.forEach(function (post) {
    postContainer.innerHTML = `<article class="post-heading">
                        <div class="post-container">
                          <div>
                            <h1 class="heading">${post.title.rendered}</h1>
                          </div>
                          <div>
                            <img class="post-image" src="" alt="" />
                          </div>
                          <div>
                            <p class="description">${post.content.rendered}</p>
                          </div>
                        </div>
                    </article> `
  })
}

blogPost(url)
