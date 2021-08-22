import React , {useState, useEffet} from "react";

function Todo() {
    const [value,setValue] = useState("");
    const [taskList,setTaskList] = useState([]);
    const setTask = function () {
        let newTaskList = [...taskList];
            newTaskList.push({
                id : Date.now(),
                task:value
            })
            setTaskList(newTaskList);
            setValue("");
    }

    const removeTask = function (id) {
        let restOfTask = taskList.filter(function(taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOfTask);
    }
    //*******************************************************useEffect ********************************************************************
    // function cleanup() {

    //     console.log("cleanup");
    // }
    // empty array dependancy -> it will only ran only once just after first render
    // useEffet(() => {
    //     console.log("useEffect of todo ran");
    // }, [])

    // cdm + csm with dependency -> useEffect witha dependancy array 
    // depnedancy array clean up fn -> run before next useEffect
    // useEffet(() => {
    //     console.log("useEffect with dependancy array");
    //     return cleanup();
    // },[taskList]);

    //without any dependancy array -> 
    // i will always run whenever there is any change of state
    //cdm + cdu
    // cleanup fn before every next useEffect
    // useEffet(() => {
    //     console.log("ran on any update");
    //     return cleanup();
    // });
//****************************************************************************************************************************************************** */
    return(
        <>
        <div>
            <input type="text" placeholder="task" value={value} onChange={(e) => {
                setValue(e.target.value)
            }}></input>

            <button onClick={setTask}>Add Task</button>
        </div>

        {taskList.map((taskObj) => {
            return (
                <Task key={taskObj.id} id = {taskObj.id} task ={taskObj.task} removeTask = {removeTask}></Task>
            )
        })}
        </>
    )
 }

 function Task(props) {
     let {id, task, removeTask} = props;

     return (
         <li 
            onClick={(e) => {
                removeTask(id)
            }}
         >{task}</li>
     )
 }

 export default Todo;