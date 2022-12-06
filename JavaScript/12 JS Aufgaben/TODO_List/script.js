let tasks = [];
printTaskList()



document.getElementById("addTask").addEventListener("click",function(){
    addTask()
})


function addTask(){
    let taskName = document.getElementById("txtNewToDo").value
    let responsible = document.getElementById("txtResponsible").value
    let task = {taskName: taskName, isDone: false, responsible: responsible}
    tasks.push(task)
    printTaskList()
}

function markTask(element){
    let index = element.attributes["data-index"].value
    let isCheck = element.checked
    tasks[index].isDone = isCheck
    printTaskList()
}


function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks()
}


function getHTMLTasks(){
    let html = ""
    let index = 0
    
    tasks.forEach(element => {
        let checked = ""
        
        if(element.isDone){
            checked = "checked"
        }
        html += "<li><input onClick='markTask(this)' name='checkbox' type='checkbox' data-index='" + index + "'" + checked +"/>" + element.taskName + "  " + element.responsible + "   " + index + "</li>"
        index++
        
    });
    return html;
}
