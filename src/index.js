document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#create-task-form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildNewTaskDescription(e.target["new-task-description"].value)
    form.reset();
  })
});

function buildNewTaskDescription(newTaskDescription) {
  const li = document.createElement('li')
  li.textContent = `${newTaskDescription}  `
  document.querySelector('#tasks').appendChild(li)

  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  li.appendChild(btn);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}