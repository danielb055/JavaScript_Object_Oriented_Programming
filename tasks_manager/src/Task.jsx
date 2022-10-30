import React from 'react'

const Task = ({ task, onclick }) => {
    console.log(task)
    if (task) {
        return (
            <div onClick={onclick} className={task.isCompleted ? "task completed" : "task"}>
                <div id={task.id}>{task.id}</div>
                <h4>{task.taskDescription}</h4>
            </div>
        )
    }
    else {
        return (<></>)
    }
}

export default Task