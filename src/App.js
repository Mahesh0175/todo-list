// import React from 'react';
import Header from './components/Header'   // Header'
import Tasks from './components/Tasks';
import { useState } from "react"; // task component
import AddTask from './components/AddTask'
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5the at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "siddesh nandurkar",
      day: "jan 3rd at 2:55",
      reminder: true,
    }
  ]);

  // Add Task
  const addTask = (task) => {
    //  console.log(task)
    const id = Math.floor(Math.random() *
    10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header onAdd= {() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
      
      {showAddTask && <AddTask onAdd={addTask}/>}
      
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
      <Footer />
    </div>
  );
}

//  **** make class for the header****

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;


// ********first code******


// // import logo from './logo.svg';
// // import './App.css';

// import Header from'./components/Header'   // Header is added sepratedly

// function App() {
//   // const name = 'Brad'
//   // const x = true

//   return (
//     // wraping is important --- div
//     <div className="App">
//       <h1>Hello From React</h1>
//       {/* <h2>Hello {name}</h2> */}
//       {/* <h2>Hello {x ? 'Yes' : 'No'}</h2> */}
//       {/* note that   ? = if ....    : = else */}
//     </div>
//   );
// }

// export default App;