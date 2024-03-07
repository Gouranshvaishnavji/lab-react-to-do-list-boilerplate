import React, { useState } from "react";
import './App.css';

const TodoListApp = () => {
 const [tasks, setTasks] = useState([]);
 const [newTask, setNewTask] = useState('');

 const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
 };

 const changeTask = (e) => {
    setNewTask(e.target.value);
 };

 const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
 };

 const editTask = (index, e) => {
    const value = e.target.value;
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
 };

 return (
    <div className='todo-container'>
      <h1>TO-DO List</h1>
      <div className='task-input'>
        <input
          type="text"
          value={newTask}
          placeholder='Enter the task'
          onChange={changeTask}
        />
        <button type='submit' onClick={addTask}>
          Add please
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className='task-item'>
            <input
              type="text"
              value={task}
              onChange={(e) => editTask(index, e)}
            />
            <button type='submit' onClick={() => deleteTask(index)}>
              Delete please
            </button>
          </div>
        ))}
      </div>
    </div>
 );
};

export default TodoListApp;
