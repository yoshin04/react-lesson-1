import { useState } from 'react'
import { InputTask } from './components/InputTask'
import { RadioForm } from './components/RadioForm'
import { TaskList } from './components/TaskList'
import { Title } from './components/Title'
import { TaskType } from './types/task/task';
import { checkTaskStatusResponseType } from './types/task/check-task-status-response'

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [text, setText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const onChangeTaskText = (e: any) => setText(e.target.value);
  const addTask = () => {
    if (!text) return;
    const task: TaskType = {
      text,
      isComplete
    }
    const newTask = [...tasks, task];
    setTasks(newTask);
    setText('');
  }
  const checkTaskStatus = (value: boolean): checkTaskStatusResponseType => {
    if (value) {
      const text = '完了';
      return text;
    } else {
      const text = '作業中';
      return text;
    }
  }

  return (
    <>
      <Title title='ToDoリスト' />
      <RadioForm />
      <TaskList tasks={tasks} checkTaskStatus={checkTaskStatus} />
      <Title title='新規追加のタスク' />
      <InputTask text={text} onChangeTaskText={onChangeTaskText} addTask={addTask} />
    </>
  )
}
