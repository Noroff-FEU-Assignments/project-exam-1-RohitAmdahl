const queryString = document.location.search
const params = new URLSearchParams(queryString)
console.log(params)
const id = params.get('id')
console.log(id)
const linkUrl =
  'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts/' + id + '?_embed'
console.log(linkUrl)
const postDetails = document.querySelector('.post-Container')
const title = document.querySelector('.tittleInfo')

const loading = document.querySelector('.loader')
console.log(postDetails)

async function fetchPost() {
  try {
    const response = await fetch(linkUrl)
    const link = await response.json()
    // console.log(link)
    postDetails.innerHTML = ''
    title.innerHTML = `My Blog | ${link.title.rendered}`
    postDetails.innerHTML += ` <article>
                                    <h1 class="heading-post">${link.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${link.jetpack_featured_media_url}" alt="${link._embedded['wp:featuredmedia']['0'].alt_text}" class="post-picture" />
                                    </div>
                                    <div class="blog-container">
                                      <div class="text-pic">
                                       ${link.content.rendered}
                                      </div>
                                    </div>
                                  </article>`
  } catch (error) {
    console.log('error')
    postDetails.innerHTML = displayError('we have found an error')
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`
    }
  }

  const picture = document.getElementById('image-model')
  console.log(picture)
  const modelPic = document.getElementById('model')
  console.log(modelPic)
  const image = document.querySelector('.post-picture')
  console.log(image)
  const exit = document.getElementById('exit')
  console.log(exit)

  image.onclick = function () {
    console.log('hello')
    picture.style.display = 'block'
    modelPic.src = this.src
    console.log(['modelPic.src'])
  }
  exit.onclick = () => {
    picture.classList.remove('exit')
    // picture.style.display = 'none'
    console.log('close')
  }
}
fetchPost()
