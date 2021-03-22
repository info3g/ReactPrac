// import React,{Component} from 'react'
import React,{useState} from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
   
function Todo(){

    const[tasks,setTasks]=useState([])
    const[taskName,setTaskName]=useState('')
    let[taskNum,setTaskNum]=useState(0)


    function addTask(event)
    {   
        event.preventDefault()
        setTaskNum(taskNum+=1)

        setTasks([...tasks,taskName]) //appending the new taskname in tasks array, using spread operator
        // console.log(tasks)
    }

    function deleteTask(index){ // duplicate array is used because original array cannot be manipulated
        // alert('hi')
        let duptasks = [...tasks]
        duptasks.splice(index,1)
        setTasks(duptasks)
    }

    //here tasklist returns the div and all its childs
    const tasklist = tasks.map((item,index)=>{ // using map function to make new task display on screen
        return <div>
            <h2>{index+1}. {item}</h2>
            {/* if we are passing an argument through function like here we use arrow function */}
            <button className='btn btn-secondary' onClick={()=>{deleteTask(index)}}>Delete</button>
        </div>
    })



    return <div>
        <h1>React ToDo List</h1>
        <form>
            <input type='text' placeholder='Task Name' value={taskName} onChange={(e)=>{setTaskName(e.target.value)}} />
            {/* <input type='submit' value='Add Task' className='btn btn-primary'/> */}
            <button value='Add Task' className='btn btn-primary' onClick={addTask}> Add tasks</button>
        </form>
        <p>Total Tasks:{taskNum}</p>
        {/* to add the newly added task */}  
        {tasklist} 
    </div>

}
export default Todo