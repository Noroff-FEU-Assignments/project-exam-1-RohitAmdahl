const postContainer = document.querySelector('.post-blogs')
const button = document.querySelector('.load_more')
const title = document.querySelector('.tittleInfo')
title.innerHTML = 'Design Blog | Blog'
const loading = document.querySelector('.loader')

// const url =
//   'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?page=' + pageNumber
// console.log(url)

let pageNumber = 0
async function blogPost() {
  pageNumber++
  const url =
    'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?page=' +
    pageNumber +
    '&_embed'
  console.log(url)

  // const search =
  //   'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?search=&_embed'
  // console.log(search)
  if (pageNumber === 1) {
    postContainer.innerHTML = ''
  }
  try {
    const response = await fetch(url)
    const results = await response.json()
    results.forEach(function (post) {
      const altTText = post._embedded?.['wp:featuredmedia'][0].alt_text
      postContainer.innerHTML += `<article class="blog-artical">
                                    <h1 class="heading-post" id ="postImage">${post.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${post.jetpack_featured_media_url}" alt="${altTText}" class="post-picture" />
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

  button.onclick = () => {
    button.style.display = 'none'
  }
}

blogPost()
button.addEventListener('click', blogPost)

//-----scroll function on the page----
const scrollTop = document.querySelector('.scroll-top')
scrollTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})
