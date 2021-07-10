// The root App component
import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  /*
    useState()
    1. we pass in an initial state (a variable or an object)
    2. returns a stateful value and a function to update it
  */
	const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

	/*
		By using this Hook, you tell React that your component needs to do something after render. 
		React will remember the function you passed (we'll refer to it as our “effect”), 
		and call it later after performing the DOM updates.
	*/
	useEffect(() => {
			const getTasks = async () => {
				const tasksFromServer = await fecthTasks()
				setTasks(tasksFromServer)
			}

			getTasks()
		}, [])

	// calling backend API and return JSON data
	const fecthTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks')
		const data = await res.json()
		
		console.log(data)
		return data
	}

	const fecthTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`)
		const data = await res.json()
		
		console.log(data)
		return data
	}

	/* 
		These event triggered functions now only changes frontend display.
		Normally they will also call backend routes to change data
	*/
	
	/* 
		The three dots syntax (…) is part of ES6 and not React itself 
		and it's used by two operators i.e. the Spread and Rest operators. 
		The Spread operator lets you expand an iterable like an object, string, or array 
		into its elements while the Rest operator does the inverse by reducing a set of elements into one array.
	*/
	// Add Task
	const addTask = async (task) => {
		// add data in backend
		const res = await fetch(
			'http://localhost:5000/tasks', 
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(task)
			}
		)
		
		const data = await res.json()
		// modify frontend component state
		setTasks([...tasks, data])
	
		// const id = Math.floor(Math.random() * 10000) + 1
		// const newTask = { id, ...task }
		// setTasks([...tasks, newTask])
	}

	// Delete Task
	const deleteTask = async (id) => {
		// delete data in backend
		await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
		// modify frontend component state
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// Toggle Reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fecthTask(id)
		const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

		const res = await fetch(
			`http://localhost:5000/tasks/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(updatedTask)
			}
		)

		const data = await res.json()

		setTasks(tasks.map((task) => task.id === id 
			? {...task, reminder: data.reminder}
			: task
		))
	}

  return (
    // passing a prop
    <div className='container'>
      <Header 
				onAdd={() => setShowAddTask(!showAddTask)} 
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 
				? <Tasks 
						tasks={tasks}
						onDelete={deleteTask}
						onToggle={toggleReminder}
					/>
				: 'No Tasks To Show'}
    </div>
  )
}

export default App;
 