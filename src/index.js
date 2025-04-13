const task = document.getElementById('inputTask')
const btn = document.getElementById('btn')
const taskList = document.getElementById('taskList')
let total = document.getElementById('total')
let completed = document.getElementById('completed')

let totalCount = 0 
let completedCount = 0

btn.addEventListener('click', () => {
    let value = task.value;
    // console.log(value);
    
    // Creating a task Li -
    const newTask = document.createElement('li')
    newTask.style.backgroundColor = hexGenerator()
    taskList.appendChild(newTask)
    
    // Incrementing total count -
    totalCount++
    total.innerText = `Total: ${totalCount}`
    
    // Creating a check, Task was completed or not -
    const check = document.createElement('input')
    check.type = "checkbox"
    newTask.appendChild(check)
    
    
    const spanTask = document.createElement('span')
    spanTask.innerText = value
    newTask.appendChild(spanTask)
    
    
    // Creating a task Delete Button -
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'Delete'
    newTask.appendChild(delBtn)
    

    delBtn.addEventListener('click', () => {
        taskList.removeChild(newTask)
        totalCount--
        if(completedCount > 0){
            completedCount--
            completed.innerText = `Completed: ${completedCount}`
        }
        total.innerText = `Total: ${totalCount}`
    })


    // Tasks Counter -
    check.addEventListener('change', () => {
        if(check.checked){
            spanTask.style.textDecoration = 'line-through' 
            completedCount++;
        }
        else{
            spanTask.style.textDecoration = 'none'
            completedCount--;
        }
            completed.innerText = `Completed: ${completedCount}`
    })
})

function hexGenerator(){
    const r = Math.floor(Math.random() * 76) + 180;
    const g = Math.floor(Math.random() * 76) + 180;
    const b = Math.floor(Math.random() * 76) + 180;
  
  // Convert to HEX and pad with zeros if needed
  const toHex = (val) => val.toString(16).padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}