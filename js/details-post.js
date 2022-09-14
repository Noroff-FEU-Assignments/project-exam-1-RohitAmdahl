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
    console.log(link)
    title.innerHTML = `My Blog | ${link.title.rendered}`
    postDetails.innerHTML = ''
    postDetails.innerHTML += ` <article>
                                    <h1 class="heading-post">${link.title.rendered}</h1>
                                    <div class="picture-post">
                                      <img src="${link.jetpack_featured_media_url}" alt="" class="post-picture" />
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
  // image model---
  // const picture = document.querySelectorAll('.post-picture')
  // console.log(picture)
  let picture = [].forEach(function (pictures) {
    const postImage = document.querySelectorAll('.post-picture')
    console.log(pictures)
    function popUpPicture() {
      // console.log(postImage)
      ImgSrc = ImgSrc
      console.log(pictures)
      // postImage.onclick = popUpPicture
    }
    pictures.addEventListener('click', popUpPicture)
  })
  const modelImg = document.querySelector('#model')
  modelImg.style.display = 'block'
  // image model stops ....
}
fetchPost()
