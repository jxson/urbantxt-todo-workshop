
document.addEventListener('DOMContentLoaded', function() {
  console.log('domready')

  var add = document.querySelector('.js-add-todo')
  add.addEventListener('submit', onadd)

  var list = document.querySelector('.todo-list')
  list.addEventListener('click', onclick)
})

function onadd(event){
  // Prevent default behavior and the even from bubbling up
  event.stopPropagation()
  event.preventDefault()

  var form = this
  var input = form.querySelector('input')

  console.log('submitted:', input.value)

  // Lets add it to the list
  var list = document.querySelector('.todo-list')

  var label = document.createElement('label')

  var checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.value = input.value

  var text = document.createTextNode(input.value)

  label.appendChild(checkbox)
  label.appendChild(text)

  label.style.display = 'block'

  console.log('appeding:', label)

  list.appendChild(label)

  console.log('clearing out the input')

  input.value = ''
}

function onclick(event){
  var form = this

  // https://developer.mozilla.org/en-US/docs/Web/API/Node
  if (event.target.nodeName !== 'LABEL') return

  var label = event.target
  var input = form.querySelector('input')

  // wont be checked until right after this event
  if (input.checked === false) {
    label.style.textDecoration = 'line-through'
  } else {
    label.style.textDecoration = 'none'
  }
}
