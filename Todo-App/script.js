var btn = document.getElementById('add-btn')
var input = document.getElementById('task-input')
var taskList = document.getElementById('task-list')
var resetBtn = document.getElementById('reset-btn')

btn.addEventListener('click', function () {
    var taskText = input.value.trim()

    if (taskText === '') return
    var li = document.createElement('li')

    var taskWrapper = document.createElement('div')
    taskWrapper.classList.add('task-left')

    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    var span = document.createElement('span')
    span.textContent = taskText

    checkbox.addEventListener('change', function () {
        span.classList.toggle('completed')
    })


    taskWrapper.appendChild(checkbox);
    taskWrapper.appendChild(span);


    var delBtn = document.createElement('button')
    delBtn.textContent = '❌'
    delBtn.classList.add('delete-btn')
    delBtn.addEventListener('click', function () {
        li.remove()
    })

    li.appendChild(taskWrapper);
    li.appendChild(delBtn);

    taskList.appendChild(li)
    input.value = ''
})

resetBtn.addEventListener('click', function () {
    taskList.innerHTML = ''
})

