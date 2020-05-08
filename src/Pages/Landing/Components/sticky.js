const sticky = () => {
  const header = document.getElementById('home')
  let sticky = header.offsetTop

  const toggleSticky = () => {
    // (window.pageYOffset > sticky) ? header.classList.add('sticky') :  header.classList.remove('sticky')

    if (window.pageYOffset > sticky) header.classList.add('sticky')
    else header.classList.remove('sticky')
  }

  window.addEventListener('scroll', () => {
    toggleSticky()
  })
}

export default sticky
