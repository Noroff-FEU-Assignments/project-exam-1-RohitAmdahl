const aboutMe = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/pages/118'
console.log(aboutMe)
const aboutPage = document.querySelector('.post-blogs')
const loading = document.querySelector('.loader')
console.log(loading)
console.log(aboutPage)

async function fetchPage() {
  const response = await fetch(aboutMe)
  const results = await response.json()
  console.log(results)

  aboutPage.innerHTML += `<div class="blog-artical  grids">
                            <div class="about">
                            <h1 class="heading-post">${results.title.rendered}</h1>
                            </div>
                            <div class="layout-design">
                              ${results.content.rendered}
                            </div>
                          </div>`
}
fetchPage()
