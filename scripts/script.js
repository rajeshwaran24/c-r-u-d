
 //  create element

const input=document.getElementById('crud');
const button=document.getElementById('btn');
const todo=document.getElementById('todo-list-container');
const form =document.getElementById('form-item')




 // global variable
let tasks=[];
let editId=null;
let isEditing=false;



 // init function

 function init(){
    isEditing=false;
    editId=null;
    button.innerText='submit';

 }

// // update ui step-2

const updateUi=function(){
    todo.innerHTML=null;
    
    tasks.forEach((task)=>{
        const taskEl=document.createElement('li')

        taskEl.innerHTML= `${task.taskName}
    <button class="btn-update"onclick = updateItem(${task.id}) ><i class="fa-solid fa-pen-to-square update"></i></button>
 <button class="btn-delete" onclick = deleteItem(${task.id})><i class="fa-solid fa-trash delete"></i></button>`;
   todo.appendChild(taskEl)
    })
}

// //delete step-3
const deleteItem=function(id){

    tasks=tasks.filter(taskDelete=>{
        return taskDelete.id!==id;
      
    })
   
    updateUi();
}
 
// update step-4

const updateItem=function(id){
    isEditing=true;
    button.innerText='update';

    const itemToEdit=tasks.find((taskUpdate)=>{
        return taskUpdate.id===id;
    });

    input.value=itemToEdit.taskName;
    editId=itemToEdit.id


 }



// // add event listener

 form.addEventListener('submit',function(event){
     event.preventDefault();

    //  step-5

    const title=input.value;

    if(isEditing){
        tasks=tasks.map((task)=>{
            if(task.id===editId){
                return{
                    id:editId,
                    taskName:title,
                };
            }else{
                return task;
            }
        })
        init();
        updateUi();

    }   



//  step-1
    
    else{
        const title=input.value;
        const task={
            id:Date.now(),
            taskName:title,
            }
            console.log(task)
            tasks.push(task)
            console.log(tasks)

            


         updateUi();
         input.value=null;


            
       }
         })



