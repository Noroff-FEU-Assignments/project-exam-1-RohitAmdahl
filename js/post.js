const url = 'https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts/?per_page=20'
console.log(url)
const postContainer = document.getElementById('post-blogs')
console.log(postContainer)

async function blogPost() {
  try {
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
  } catch (error) {
    console.log(err)
  }
}

blogPost()
