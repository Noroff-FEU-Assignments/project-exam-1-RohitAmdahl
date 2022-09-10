const queryString = document.location.search
const params = new URLSearchParams(queryString)
console.log(params)
const id = params.get('id')
console.log(id)
const linkUrl =
  'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts/' + id + '?_embed'
console.log(linkUrl)
const postDetails = document.querySelector('.post-Container')
console.log(postDetails)

async function fetchPost() {
  try {
    const response = await fetch(linkUrl)
    const link = await response.json()
    console.log(link)
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
  }
}
fetchPost()
