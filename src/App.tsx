import { useState } from 'react'
import { InputTask } from './components/InputTask'
import { RadioForm } from './components/RadioForm'
import { TaskList } from './components/TaskList'
import { Title } from './components/Title'
import { TaskType } from './types/task/task';
import { checkTaskStatusResponseType } from './types/task/check-task-status-response'
import { completed, unCompleted } from './util/const/task-status';

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [text, setText] = useState<string>('');
  const [value, setValue] = useState<string>('all');
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => setValue(e.currentTarget.value);
  const filteringTasks = (task: TaskType): string => {
    if (value === 'worked') {
      if (task.isCompleted) return 'none';
      return '';
    } else if (value === 'completed') {
      if (task.isCompleted) return '';
      return 'none';
    } else {
      return ''
    }
  }
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const onChangeTaskText = (e: React.MouseEvent<HTMLButtonElement>) => setText(e.currentTarget.value);
  const addTask = () => {
    if (!text) return;
    const task: TaskType = {
      text,
      isCompleted
    }
    const newTask = [...tasks, task];
    setTasks(newTask);
    setText('');
  }
  const checkTaskStatus = (taskStatus: boolean): checkTaskStatusResponseType => {
    if (taskStatus) {
      return completed;
    } else {
      return unCompleted;
    }
  }
  const changeTaskStatus = (taskId: number): void => {
    const newTask = [...tasks];
    setIsCompleted(!isCompleted);
    newTask[taskId].isCompleted = isCompleted;
    setTasks(newTask);
  }
  const deleteTask = (taskId: number): void => {
    const newTasks = [...tasks];
    newTasks.splice(taskId, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <Title title='ToDoリスト' />
      <RadioForm value={value} handleChange={handleChange} />
      <TaskList tasks={tasks} checkTaskStatus={checkTaskStatus} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask} filteringTasks={filteringTasks} />
      <Title title='新規追加のタスク' />
      <InputTask text={text} onChangeTaskText={onChangeTaskText} addTask={addTask} />
    </>
  )
}
