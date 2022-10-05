const init = () => {
  form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    input = e.target['searchByID'].value
h4.innerText = fetch(`http://localhost:3000/movies/${input}.title`)

package.innerText = fetch(`http://localhost:3000/movies/${input}.summary`)
  })

}

document.addEventListener('DOMContentLoaded', init);