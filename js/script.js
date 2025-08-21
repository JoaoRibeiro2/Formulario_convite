const form = document.querySelector('form')

// const color_select = document.querySelector('.color-select')
const dark = document.querySelector('#dark')
const light = document.querySelector('#light')
const l_dark = document.querySelector('#label_dark')
const l_light = document.querySelector('#label_light')
form.onsubmit = (e) => {
      e.preventDefault()
}

dark.addEventListener('click', function () {
            l_dark.classList.add("check")
            l_light.classList.remove("check")
            console.log(l_dark)
      })
light.addEventListener('click', function () {
            l_light.classList.add("check")
            l_dark.classList.remove("check")
            console.log(l_light)
      })