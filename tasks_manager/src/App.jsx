import { useEffect, useState } from 'react'
import './App.css'
import Task from './Task'
import TaskClass from './TaskModel'

function App() {
  const [task, setTask] = useState()

  const onclick = () => {
    setTask(pre => {
      return ({
        ...pre,
        isCompleted: !pre.isCompleted
      })
    })
  }

  useEffect(() => {
    const task1 = new TaskClass("Task 1")
    setTask(task1)
  }, [])


  return (
    <div className="App">
      <Task task={task} onclick={onclick} />
    </div>
  )
}

export default App
