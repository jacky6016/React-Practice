// The root App component
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  /*
    useState()
    1. we pass in an initial state (a variable or an object)
    2. returns a stateful value and a function to update it
  */
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 3:30pm',
      reminder: false,
    },
  ])

	/* 
		These event triggered functions now only changes frontend display.
		Normally they will also call backend routes to change data
	*/

	// Delete Task
	const deleteTask = (id) => {
		// console.log('delete', id)
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => task.id === id 
			? {...task, reminder: !task.reminder}
			: task
		))
	}

  return (
    // passing a prop
    <div className='container'>
      <Header />
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
 