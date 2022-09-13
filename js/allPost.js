import { url } from './page.js/post.js'
console.log(url)
import { blogPost } from './page.js/post.js'
blogPost(url)
const allPosts =
  'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?per_page=20&_embed'
console.log(allPosts)
const button = document.querySelector('.load_more')
console.log(button)

// async function newUrl(allPosts) {
//   const response = await fetch(allPosts)
//   const results = await response.json()
//   console.log(results)
//   // postContainer.innerHTML = ''
// }

//load more posts
button.addEventListener('click', () => {
  console.log('hello')
  const addArticles = document.querySelector('.post-blogs')
  addArticles.forEach((post) => {
    post.classList.remove('hidden')
  })
  loadMorePosts.style.display = 'none'
})

newUrl(allPosts)

// function change() {
//   const newUrl = url + 'allPosts'
//   blogPost(newUrl)
//   console.log('hello')
// }
// button.addEventListener('click', change)
