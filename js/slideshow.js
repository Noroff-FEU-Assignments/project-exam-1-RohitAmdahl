const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?_embed'
console.log(url)
// const button = document.querySelector('.load_more')
const post = document.querySelector('.slideshow_carousel')
// const postContainer = document.querySelector('.post-blogs')
// const loading = document.querySelector('.loader')
async function blogPost(url) {
  try {
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
    post.innerHTML = ''
    results.forEach(function (postPic) {
      post.innerHTML += `
                          <a href="blog_specific.html?id=${postPic.id}"><div class="slideshow">
                          <img src="${postPic.jetpack_featured_media_url}" alt="" class="slideshow_img" />
                          <p class="title">
                            ${postPic.title.rendered}
                          </p>
                          </div></a>`
    })
  } catch (err) {
    console.log(error)
    // post.innerHTML = displayError('we have found an error')
    // function displayError(massage) {
    //   return `<div class ="found-error"> ${massage}</div>`
    // }
  }
}

blogPost(url)
