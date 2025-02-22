const loader = document.querySelector('#loader')
if (loader) {
  window.addEventListener('load', () => {
    loader.classList.add('close');
  })

  document.addEventListener('DOMContentLoaded', () => {
    loader.classList.add('close');
  })

  window.addEventListener('beforeunload', () => {
    loader.classList.add('close');
  })

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      loader.classList.add('close');
    }
  })
}