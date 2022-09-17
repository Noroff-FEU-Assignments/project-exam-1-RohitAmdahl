const button = document.querySelector('.load_more')
const title = document.querySelector('.tittleInfo')
title.innerHTML = 'Design Blog | Blog'
const postContainer = document.querySelector('.post-blogs')
const loading = document.querySelector('.loader')

let pageNumber = 0
const maximumPages = response.headers.get('x-wp-totalpages')
console.log(maximumPages)

async function blogPost() {
  pageNumber++
  const url =
    'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?page=' + pageNumber
  console.log(url)

  if (pageNumber(maximumPages) === pageNumber) {
    postContainer.innerHTML = ''
    // button.style.display = 'none'
  }

  try {
    const response = await fetch(url)
    const maximumPages = response.headers.get('x-wp-totalpages')
    console.log(maximumPages)
    const results = await response.json()
    results.forEach(function (post) {
      postContainer.innerHTML += `<article class="blog-artical">
                                    <h1 class="heading-post" id ="postImage">${post.title.rendered}</h1>
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
                                  </div> `
    })
  } catch (err) {
    postContainer.innerHTML = displayError('we have found an error')
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`
    }
  }
}

blogPost()

// button.style.display = 'none'
button.addEventListener('click', blogPost)

const scrollTop = document.querySelector('.scroll-top')

scrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})
