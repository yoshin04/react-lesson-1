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
  const deleteTask = (taskId: number): void => {
    const newTasks = [...tasks];
    newTasks.splice(taskId, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <Title title='ToDoリスト' />
      <RadioForm />
      <TaskList tasks={tasks} checkTaskStatus={checkTaskStatus} deleteTask={deleteTask} />
      <Title title='新規追加のタスク' />
      <InputTask text={text} onChangeTaskText={onChangeTaskText} addTask={addTask} />
    </>
  )
}
