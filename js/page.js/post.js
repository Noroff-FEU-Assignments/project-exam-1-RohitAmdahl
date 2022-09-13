export const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts'
const button = document.querySelector('.load_more')
const title = document.querySelector('.tittleInfo')
console.log(button)
const postContainer = document.querySelector('.post-blogs')
const loading = document.querySelector('.loader')
export async function blogPost(url) {
  try {
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
    title.innerHTML = 'Design Blog | Blog'
    postContainer.innerHTML = ''
    results.forEach(function (post) {
      postContainer.innerHTML += `<a href="blog_specific.html?id=${post.id}"><article                  class="blog-artical">
                                    <h1 class="heading-post">${post.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${post.jetpack_featured_media_url}" alt="" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <a href="blog_specific.html?id=${post.id}"><div class="post-summary">
                                        <p class="text">${post.excerpt.rendered}
                                        </p>
                                      </div></a>
                                    </div>
                                  </article></a>
                                  <a href="blog_specific.html?id=${post.id}">
                                  <div class="cta-big">
                                    <button class="cta-button">
                                       Read more about this post
                                    </button>
                                  </div> </a>`
    })
  } catch (err) {
    postContainer.innerHTML = displayError('we have found an error')
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`
    }
  }
}

blogPost(url)

function onchange() {
  const newUrl = url + '?per_page=20&_embed'
  postContainer.innerHTML = ''
  blogPost(newUrl)
  button.style.display = 'none'
}
button.addEventListener('click', onchange)

// <div class="picture-post">
//   <img src="${post.jetpack_featured_media_url}" alt="${post._embedded['wp:featuredmedia']['0'].alt_text}" class="post-picture" />
// </div>
// ${post._embedded['wp:featuredmedia']['0'].alt_text}
