import { useState } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
import { InputTask } from './components/InputTask'
import { RadioForm } from './components/RadioForm'
import { TaskList } from './components/TaskList'
import { Title } from './components/Title'

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [finish, setFinish] = useState(false);
  const onChangeTaskText = (e) => setTaskText(e.target.value);
  const addTask = () => {
    if (taskText === '') return;
    const task = {
      text: taskText,
      status: finish
    }
    const newTask = [...tasks, task];
    setTasks(newTask);
    setTaskText('');
  }
  const checkTaskStatus = (value) => {
    let text = '作業中';
    if (value === true) text = '完了';
    return text;
  }

  return (
    <>
      <Title title='ToDoリスト' />
      <RadioForm />
      <TaskList tasks={tasks} checkTaskStatus={checkTaskStatus} />
      <Title title='新規追加のタスク' />
      <InputTask text={taskText} onChangeTaskText={onChangeTaskText} addTask={addTask} />
    </>
  )
}