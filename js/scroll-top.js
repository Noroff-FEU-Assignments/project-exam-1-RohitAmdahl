const scrollTop = document.querySelector('scroll-top')

scrollTop.addEventListener('click', () => {
  console.log('i m up ')
  window.scrollTop(0, 0)
})
