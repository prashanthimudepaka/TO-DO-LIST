//variables
const addTask=document.getElementById('add-task')
const taskContainer=document.getElementById('task-container')
const inputTask=document.getElementById('input-task')
//event listener for add button
addTask.addEventListener('click',function(){
    // console.log(inputTask.value)
    let task=document.createElement('div')
    task.classList.add('task')
    let li=document.createElement('li')
    li.innerText=`${inputTask.value}`
    task.appendChild(li)
    // taskContainer.appendChild(task)

    /****CHECK BUTTON IF IT IS FINISHED OR NOT** */
    let checkButton=document.createElement('button')
    checkButton.innerHTML=`<i class ="fa fa-check"></i>`
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)//APPEND TO TO TASK DIV
   
    /****CREATING DELETE TASK BUTTON** */

    let deleteButton=document.createElement('button')
    deleteButton.innerHTML=`<i class ="fa fa-trash"></i>`
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)//APPEND TO TASK DIV
   
    if(inputTask.value ==""){
        /*IF INPUT IS EMPTY(USER DIDNT ENTERED THE TASK)*/
        alert('please enter the input')
    }
    else{
        /*ELSE ADD THAT ENTERED TASK ALONG 
        WITH LIST ITEM TO TASK CONTAINER*/
        taskContainer.appendChild(task)
    }

    /*THE ENTERED TEXT IN THE INPUT TAG WILL REMAIN SAME SO MAKE IT 
    TO EMPTY AFTER ADDING THE TASK*/
    inputTask.value=""

    /*WE APPENDED THESE CLASSES:
    1. task(div)
    2.deleteTask
    3.checkTask
    4.li */
    // CHECK BUTTON EVENTLISTENER
checkButton.addEventListener('click',function(){
    checkButton.parentElement.style.textDecoration="line-through"
})
//e-->event object
deleteButton.addEventListener('click',function(e){
    let target=e.target//actual element is click
    target.parentElement.parentElement.remove()
})

})




