import { useState } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
import { InputTask } from './components/InputTask'
import { RadioForm } from './components/RadioForm'
import { TaskList } from './components/TaskList'
import { Title } from './components/Title'
import { TaskType } from './types/task/task';
import { OnChangeTaskTextType } from './types/task/on-change-task-text';
import { AddTaskType } from './types/task/add-task';
import { CheckTaskStatusType } from './types/task/chek-task-status';

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [finish, setFinish] = useState<boolean>(false);
  const onChangeTaskText: OnChangeTaskTextType = (e: any) => setTaskText(e.target.value);
  const addTask: AddTaskType = () => {
    if (taskText === '') return;
    const task = {
      text: taskText,
      status: finish
    }
    const newTask = [...tasks, task];
    setTasks(newTask);
    setTaskText('');
  }
  const checkTaskStatus: CheckTaskStatusType = (value: boolean) => {
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
